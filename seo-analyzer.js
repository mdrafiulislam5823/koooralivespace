const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

class SEOAnalyzer {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
    this.browser = null;
    this.results = {
      overview: {},
      pages: {},
      technical: {},
      recommendations: []
    };
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async analyzePage(url, pageName) {
    const page = await this.browser.newPage();
    const startTime = performance.now();
    
    try {
      // Set viewport for mobile testing
      await page.setViewport({ width: 1200, height: 800 });
      
      // Navigate to page
        const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        const loadTime = performance.now() - startTime;
      
      // Basic page info
      const title = await page.title();
      const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => '');
      const metaKeywords = await page.$eval('meta[name="keywords"]', el => el.content).catch(() => '');
      
      // Header analysis
      const headers = await page.evaluate(() => {
        const headerTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        const headerData = {};
        
        headerTags.forEach(tag => {
          const elements = document.querySelectorAll(tag);
          headerData[tag] = Array.from(elements).map(el => ({
            text: el.textContent.trim(),
            hasContent: el.textContent.trim().length > 0
          }));
        });
        
        return headerData;
      });
      
      // Image analysis
      const images = await page.evaluate(() => {
        const imgs = document.querySelectorAll('img');
        return Array.from(imgs).map(img => ({
          src: img.src,
          alt: img.alt || '',
          hasAlt: !!img.alt,
          width: img.width,
          height: img.height,
          loading: img.loading || 'eager'
        }));
      });
      
      // Internal links analysis
      const links = await page.evaluate((baseUrl) => {
        const anchors = document.querySelectorAll('a[href]');
        return Array.from(anchors).map(a => ({
          href: a.href,
          text: a.textContent.trim(),
          isInternal: a.href.startsWith(baseUrl) || a.href.startsWith('/'),
          hasText: a.textContent.trim().length > 0,
          target: a.target
        }));
      }, this.baseUrl);
      
      // Schema markup analysis
      const schemaMarkup = await page.evaluate(() => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        return Array.from(scripts).map(script => {
          try {
            return JSON.parse(script.textContent);
          } catch (e) {
            return { error: 'Invalid JSON-LD' };
          }
        });
      });
      
      // Open Graph and Twitter Cards
      const socialMeta = await page.evaluate(() => {
        const ogTags = {};
        const twitterTags = {};
        
        document.querySelectorAll('meta[property^="og:"]').forEach(meta => {
          ogTags[meta.getAttribute('property')] = meta.content;
        });
        
        document.querySelectorAll('meta[name^="twitter:"]').forEach(meta => {
          twitterTags[meta.getAttribute('name')] = meta.content;
        });
        
        return { openGraph: ogTags, twitter: twitterTags };
      });
      
      // Mobile responsiveness check
    await page.setViewport({ width: 375, height: 667 }); // iPhone size
      
      const mobileMetrics = await page.evaluate(() => {
        const viewport = document.querySelector('meta[name="viewport"]');
        return {
          hasViewportMeta: !!viewport,
          viewportContent: viewport ? viewport.content : '',
          bodyWidth: document.body.scrollWidth,
          hasHorizontalScroll: document.body.scrollWidth > window.innerWidth
        };
      });
      
      // Content analysis
      const content = await page.evaluate(() => {
        const textContent = document.body.textContent || '';
        const wordCount = textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed
        
        return {
          wordCount,
          readingTime,
          hasContent: wordCount > 100
        };
      });
      
      // Performance metrics
      const performanceMetrics = await page.evaluate(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        return {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
        };
      });
      
      return {
        url,
        pageName,
        statusCode: response.status(),
        loadTime: Math.round(loadTime),
        title: {
          content: title,
          length: title.length,
          isOptimal: title.length >= 30 && title.length <= 60
        },
        metaDescription: {
          content: metaDescription,
          length: metaDescription.length,
          isOptimal: metaDescription.length >= 120 && metaDescription.length <= 160,
          exists: !!metaDescription
        },
        metaKeywords: {
          content: metaKeywords,
          exists: !!metaKeywords
        },
        headers,
        images: {
          total: images.length,
          withAlt: images.filter(img => img.hasAlt).length,
          withoutAlt: images.filter(img => !img.hasAlt).length,
          lazyLoaded: images.filter(img => img.loading === 'lazy').length,
          details: images
        },
        links: {
          total: links.length,
          internal: links.filter(link => link.isInternal).length,
          external: links.filter(link => !link.isInternal).length,
          withoutText: links.filter(link => !link.hasText).length,
          details: links
        },
        schemaMarkup,
        socialMeta,
        mobile: mobileMetrics,
        content,
        performance: {
          ...performanceMetrics,
          loadTime: Math.round(loadTime)
        }
      };
    } catch (error) {
      return {
        url,
        pageName,
        error: error.message,
        statusCode: 0
      };
    } finally {
      await page.close();
    }
  }

  async checkTechnicalSEO() {
    const page = await this.browser.newPage();
    
    try {
      // Check robots.txt
      const robotsResponse = await page.goto(`${this.baseUrl}/robots.txt`, { waitUntil: 'networkidle2' });
      const robotsContent = await page.content();
      
      // Check sitemap.xml
      const sitemapResponse = await page.goto(`${this.baseUrl}/sitemap.xml`, { waitUntil: 'networkidle2' });
      const sitemapContent = await page.content();
      
      return {
        robots: {
          exists: robotsResponse.status() === 200,
          content: robotsContent,
          statusCode: robotsResponse.status()
        },
        sitemap: {
          exists: sitemapResponse.status() === 200,
          content: sitemapContent,
          statusCode: sitemapResponse.status()
        }
      };
    } catch (error) {
      return {
        robots: { exists: false, error: error.message },
        sitemap: { exists: false, error: error.message }
      };
    } finally {
      await page.close();
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    Object.values(this.results.pages).forEach(page => {
      if (page.error) {
        recommendations.push(`❌ Page ${page.pageName}: ${page.error}`);
        return;
      }
      
      // Title recommendations
      if (!page.title.isOptimal) {
        if (page.title.length < 30) {
          recommendations.push(`⚠️  ${page.pageName}: Title too short (${page.title.length} chars). Recommended: 30-60 characters.`);
        } else if (page.title.length > 60) {
          recommendations.push(`⚠️  ${page.pageName}: Title too long (${page.title.length} chars). Recommended: 30-60 characters.`);
        }
      }
      
      // Meta description recommendations
      if (!page.metaDescription.exists) {
        recommendations.push(`❌ ${page.pageName}: Missing meta description.`);
      } else if (!page.metaDescription.isOptimal) {
        if (page.metaDescription.length < 120) {
          recommendations.push(`⚠️  ${page.pageName}: Meta description too short (${page.metaDescription.length} chars). Recommended: 120-160 characters.`);
        } else if (page.metaDescription.length > 160) {
          recommendations.push(`⚠️  ${page.pageName}: Meta description too long (${page.metaDescription.length} chars). Recommended: 120-160 characters.`);
        }
      }
      
      // Header structure recommendations
      if (!page.headers.h1 || page.headers.h1.length === 0) {
        recommendations.push(`❌ ${page.pageName}: Missing H1 tag.`);
      } else if (page.headers.h1.length > 1) {
        recommendations.push(`⚠️  ${page.pageName}: Multiple H1 tags found (${page.headers.h1.length}). Should have only one H1 per page.`);
      }
      
      // Image recommendations
      if (page.images.withoutAlt > 0) {
        recommendations.push(`⚠️  ${page.pageName}: ${page.images.withoutAlt} images missing alt text.`);
      }
      
      // Performance recommendations
      if (page.performance.loadTime > 3000) {
        recommendations.push(`⚠️  ${page.pageName}: Slow page load time (${page.performance.loadTime}ms). Target: <3000ms.`);
      }
      
      // Mobile recommendations
      if (!page.mobile.hasViewportMeta) {
        recommendations.push(`❌ ${page.pageName}: Missing viewport meta tag for mobile optimization.`);
      }
      
      if (page.mobile.hasHorizontalScroll) {
        recommendations.push(`⚠️  ${page.pageName}: Horizontal scroll detected on mobile. Check responsive design.`);
      }
      
      // Content recommendations
      if (!page.content.hasContent) {
        recommendations.push(`⚠️  ${page.pageName}: Low content volume (${page.content.wordCount} words). Consider adding more content.`);
      }
      
      // Schema markup recommendations
      if (!page.schemaMarkup || page.schemaMarkup.length === 0) {
        recommendations.push(`⚠️  ${page.pageName}: No structured data (Schema.org) found.`);
      }
    });
    
    // Technical SEO recommendations
    if (!this.results.technical.robots.exists) {
      recommendations.push(`❌ Technical: robots.txt file not found or inaccessible.`);
    }
    
    if (!this.results.technical.sitemap.exists) {
      recommendations.push(`❌ Technical: sitemap.xml file not found or inaccessible.`);
    }
    
    return recommendations;
  }

  async run() {
    console.log('🚀 Starting SEO Analysis...');
    
    await this.init();
    
    // Define pages to analyze
    const pagesToAnalyze = [
      { url: `${this.baseUrl}/`, name: 'Homepage' },
      { url: `${this.baseUrl}/about`, name: 'About' },
      { url: `${this.baseUrl}/contact`, name: 'Contact' },
      { url: `${this.baseUrl}/saudi-pro-league`, name: 'Saudi Pro League' },
      { url: `${this.baseUrl}/match/1`, name: 'Match Page 1' },
      { url: `${this.baseUrl}/match/2`, name: 'Match Page 2' },
      { url: `${this.baseUrl}/football-news`, name: 'Football News' },
      { url: `${this.baseUrl}/football-highlights`, name: 'Football Highlights' },
      { url: `${this.baseUrl}/mobile-app`, name: 'Mobile App' },
      { url: `${this.baseUrl}/privacy`, name: 'Privacy Policy' }
    ];
    
    // Analyze each page
    for (const pageInfo of pagesToAnalyze) {
      console.log(`📄 Analyzing: ${pageInfo.name}`);
      const result = await this.analyzePage(pageInfo.url, pageInfo.name);
      this.results.pages[pageInfo.name] = result;
    }
    
    // Check technical SEO
    console.log('🔧 Checking Technical SEO...');
    this.results.technical = await this.checkTechnicalSEO();
    
    // Generate recommendations
    console.log('💡 Generating Recommendations...');
    this.results.recommendations = this.generateRecommendations();
    
    // Generate overview
    const totalPages = Object.keys(this.results.pages).length;
    const successfulPages = Object.values(this.results.pages).filter(p => !p.error).length;
    const avgLoadTime = Object.values(this.results.pages)
      .filter(p => !p.error && p.performance)
      .reduce((sum, p) => sum + p.performance.loadTime, 0) / successfulPages;
    
    this.results.overview = {
      totalPages,
      successfulPages,
      failedPages: totalPages - successfulPages,
      avgLoadTime: Math.round(avgLoadTime),
      totalRecommendations: this.results.recommendations.length,
      analysisDate: new Date().toISOString()
    };
    
    await this.close();
    
    return this.results;
  }

  generateReport() {
    const report = [];
    
    report.push('# SEO ANALYSIS REPORT - KOORA LIVE STREAMING WEBSITE');
    report.push('=' .repeat(60));
    report.push('');
    report.push(`Analysis Date: ${new Date(this.results.overview.analysisDate).toLocaleString()}`);
    report.push(`Website: ${this.baseUrl}`);
    report.push('');
    
    // Overview
    report.push('## OVERVIEW');
    report.push('-'.repeat(30));
    report.push(`Total Pages Analyzed: ${this.results.overview.totalPages}`);
    report.push(`Successful Analyses: ${this.results.overview.successfulPages}`);
    report.push(`Failed Analyses: ${this.results.overview.failedPages}`);
    report.push(`Average Load Time: ${this.results.overview.avgLoadTime}ms`);
    report.push(`Total Recommendations: ${this.results.overview.totalRecommendations}`);
    report.push('');
    
    // Recommendations Summary
    report.push('## RECOMMENDATIONS SUMMARY');
    report.push('-'.repeat(30));
    this.results.recommendations.forEach(rec => {
      report.push(rec);
    });
    report.push('');
    
    // Detailed Page Analysis
    report.push('## DETAILED PAGE ANALYSIS');
    report.push('-'.repeat(30));
    
    Object.values(this.results.pages).forEach(page => {
      if (page.error) {
        report.push(`\n### ${page.pageName} - ERROR`);
        report.push(`URL: ${page.url}`);
        report.push(`Error: ${page.error}`);
        return;
      }
      
      report.push(`\n### ${page.pageName}`);
      report.push(`URL: ${page.url}`);
      report.push(`Status Code: ${page.statusCode}`);
      report.push(`Load Time: ${page.loadTime}ms`);
      report.push('');
      
      // Title Analysis
      report.push('**Title:**');
      report.push(`- Content: "${page.title.content}"`);
      report.push(`- Length: ${page.title.length} characters`);
      report.push(`- Optimal: ${page.title.isOptimal ? '✅' : '❌'}`);
      report.push('');
      
      // Meta Description
      report.push('**Meta Description:**');
      if (page.metaDescription.exists) {
        report.push(`- Content: "${page.metaDescription.content}"`);
        report.push(`- Length: ${page.metaDescription.length} characters`);
        report.push(`- Optimal: ${page.metaDescription.isOptimal ? '✅' : '❌'}`);
      } else {
        report.push('- Missing ❌');
      }
      report.push('');
      
      // Headers
      report.push('**Header Structure:**');
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
        const count = page.headers[tag] ? page.headers[tag].length : 0;
        if (count > 0) {
          report.push(`- ${tag.toUpperCase()}: ${count} found`);
          if (tag === 'h1' && count > 1) {
            report.push('  ⚠️  Multiple H1 tags detected');
          }
        }
      });
      report.push('');
      
      // Images
      report.push('**Images:**');
      report.push(`- Total: ${page.images.total}`);
      report.push(`- With Alt Text: ${page.images.withAlt}`);
      report.push(`- Without Alt Text: ${page.images.withoutAlt} ${page.images.withoutAlt > 0 ? '⚠️' : '✅'}`);
      report.push(`- Lazy Loaded: ${page.images.lazyLoaded}`);
      report.push('');
      
      // Links
      report.push('**Links:**');
      report.push(`- Total: ${page.links.total}`);
      report.push(`- Internal: ${page.links.internal}`);
      report.push(`- External: ${page.links.external}`);
      report.push(`- Without Text: ${page.links.withoutText} ${page.links.withoutText > 0 ? '⚠️' : '✅'}`);
      report.push('');
      
      // Schema Markup
      report.push('**Structured Data:**');
      if (page.schemaMarkup && page.schemaMarkup.length > 0) {
        report.push(`- Found: ${page.schemaMarkup.length} schema(s) ✅`);
        page.schemaMarkup.forEach((schema, index) => {
          if (schema['@type']) {
            report.push(`  - Schema ${index + 1}: ${schema['@type']}`);
          }
        });
      } else {
        report.push('- No structured data found ⚠️');
      }
      report.push('');
      
      // Social Media
      report.push('**Social Media Meta:**');
      const ogCount = Object.keys(page.socialMeta.openGraph).length;
      const twitterCount = Object.keys(page.socialMeta.twitter).length;
      report.push(`- Open Graph tags: ${ogCount} ${ogCount > 0 ? '✅' : '❌'}`);
      report.push(`- Twitter Card tags: ${twitterCount} ${twitterCount > 0 ? '✅' : '❌'}`);
      report.push('');
      
      // Mobile
      report.push('**Mobile Optimization:**');
      report.push(`- Viewport Meta: ${page.mobile.hasViewportMeta ? '✅' : '❌'}`);
      report.push(`- Horizontal Scroll: ${page.mobile.hasHorizontalScroll ? '❌' : '✅'}`);
      report.push('');
      
      // Content
      report.push('**Content Analysis:**');
      report.push(`- Word Count: ${page.content.wordCount}`);
      report.push(`- Reading Time: ${page.content.readingTime} minutes`);
      report.push(`- Sufficient Content: ${page.content.hasContent ? '✅' : '⚠️'}`);
      report.push('');
      
      // Performance
      report.push('**Performance:**');
      report.push(`- Load Time: ${page.performance.loadTime}ms ${page.performance.loadTime < 3000 ? '✅' : '⚠️'}`);
      if (page.performance.firstContentfulPaint) {
        report.push(`- First Contentful Paint: ${Math.round(page.performance.firstContentfulPaint)}ms`);
      }
      report.push('');
    });
    
    // Technical SEO
    report.push('## TECHNICAL SEO');
    report.push('-'.repeat(30));
    report.push('');
    
    report.push('**robots.txt:**');
    report.push(`- Accessible: ${this.results.technical.robots.exists ? '✅' : '❌'}`);
    report.push(`- Status Code: ${this.results.technical.robots.statusCode || 'N/A'}`);
    report.push('');
    
    report.push('**sitemap.xml:**');
    report.push(`- Accessible: ${this.results.technical.sitemap.exists ? '✅' : '❌'}`);
    report.push(`- Status Code: ${this.results.technical.sitemap.statusCode || 'N/A'}`);
    report.push('');
    
    // SEO Score Calculation
    let score = 100;
    this.results.recommendations.forEach(rec => {
      if (rec.includes('❌')) score -= 10;
      else if (rec.includes('⚠️')) score -= 5;
    });
    score = Math.max(0, score);
    
    report.push('## SEO SCORE');
    report.push('-'.repeat(30));
    report.push(`Overall SEO Score: ${score}/100`);
    report.push('');
    
    if (score >= 90) {
      report.push('🎉 Excellent! Your website has great SEO optimization.');
    } else if (score >= 70) {
      report.push('👍 Good SEO foundation with room for improvement.');
    } else if (score >= 50) {
      report.push('⚠️  Moderate SEO issues that should be addressed.');
    } else {
      report.push('🚨 Significant SEO issues requiring immediate attention.');
    }
    
    report.push('');
    report.push('## PRIORITY ACTIONS');
    report.push('-'.repeat(30));
    
    const criticalIssues = this.results.recommendations.filter(rec => rec.includes('❌'));
    const warnings = this.results.recommendations.filter(rec => rec.includes('⚠️'));
    
    if (criticalIssues.length > 0) {
      report.push('**Critical Issues (Fix Immediately):**');
      criticalIssues.forEach(issue => report.push(`- ${issue.replace('❌ ', '')}`));
      report.push('');
    }
    
    if (warnings.length > 0) {
      report.push('**Warnings (Address Soon):**');
      warnings.slice(0, 10).forEach(warning => report.push(`- ${warning.replace('⚠️  ', '')}`)); // Show top 10
      if (warnings.length > 10) {
        report.push(`- ... and ${warnings.length - 10} more warnings`);
      }
    }
    
    report.push('');
    report.push('=' .repeat(60));
    report.push('Report generated by SEO Analyzer');
    report.push(`Generated on: ${new Date().toLocaleString()}`);
    
    return report.join('\n');
  }
}

// Main execution
async function main() {
  const analyzer = new SEOAnalyzer();
  
  try {
    const results = await analyzer.run();
    const report = analyzer.generateReport();
    
    // Save report to file
    fs.writeFileSync('seo-report.txt', report, 'utf8');
    
    console.log('\n✅ SEO Analysis Complete!');
    console.log('📄 Report saved to: seo-report.txt');
    console.log(`🎯 SEO Score: ${Math.max(0, 100 - (results.recommendations.length * 5))}/100`);
    console.log(`📊 Total Recommendations: ${results.recommendations.length}`);
    
  } catch (error) {
    console.error('❌ SEO Analysis failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SEOAnalyzer;