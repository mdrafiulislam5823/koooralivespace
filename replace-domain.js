const fs = require('fs');
const path = require('path');

// Configuration
const OLD_DOMAIN = 'koooralive.space';
const NEW_DOMAIN = 'koooralive.space';
const PROJECT_ROOT = __dirname;

// File extensions to search
const EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.json', '.html', '.css', '.scss', '.md'];

// Directories to exclude
const EXCLUDE_DIRS = ['node_modules', '.git', '.next', 'dist', 'build', '.vercel'];

let filesModified = 0;
let totalReplacements = 0;

/**
 * Check if directory should be excluded
 */
function shouldExcludeDir(dirName) {
    return EXCLUDE_DIRS.includes(dirName) || dirName.startsWith('.');
}

/**
 * Check if file should be processed
 */
function shouldProcessFile(fileName) {
    return EXTENSIONS.some(ext => fileName.endsWith(ext));
}

/**
 * Process a single file
 */
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Count occurrences before replacement
        const occurrences = (content.match(new RegExp(OLD_DOMAIN.replace(/\./g, '\\.'), 'g')) || []).length;
        
        if (occurrences > 0) {
            // Replace all occurrences
            const newContent = content.replace(new RegExp(OLD_DOMAIN.replace(/\./g, '\\.'), 'g'), NEW_DOMAIN);
            
            // Write back to file
            fs.writeFileSync(filePath, newContent, 'utf8');
            
            console.log(`✅ Modified: ${filePath} (${occurrences} replacements)`);
            filesModified++;
            totalReplacements += occurrences;
        }
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
}

/**
 * Recursively scan directory
 */
function scanDirectory(dirPath) {
    try {
        const items = fs.readdirSync(dirPath);
        
        for (const item of items) {
            const fullPath = path.join(dirPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                if (!shouldExcludeDir(item)) {
                    scanDirectory(fullPath);
                }
            } else if (stat.isFile()) {
                if (shouldProcessFile(item)) {
                    processFile(fullPath);
                }
            }
        }
    } catch (error) {
        console.error(`❌ Error scanning directory ${dirPath}:`, error.message);
    }
}

/**
 * Main function
 */
function main() {
    console.log('🔍 Starting domain replacement...');
    console.log(`📝 Replacing: ${OLD_DOMAIN} → ${NEW_DOMAIN}`);
    console.log(`📁 Project root: ${PROJECT_ROOT}`);
    console.log('\n' + '='.repeat(50) + '\n');
    
    const startTime = Date.now();
    
    // Start scanning from project root
    scanDirectory(PROJECT_ROOT);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log('\n' + '='.repeat(50));
    console.log('📊 SUMMARY:');
    console.log(`✅ Files modified: ${filesModified}`);
    console.log(`🔄 Total replacements: ${totalReplacements}`);
    console.log(`⏱️  Duration: ${duration}s`);
    
    if (filesModified === 0) {
        console.log('ℹ️  No files needed modification.');
    } else {
        console.log('🎉 Domain replacement completed successfully!');
    }
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { main };