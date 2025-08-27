import { Header } from "@/components/header"
import { MatchGrid } from "@/components/match-grid"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import dynamic from "next/dynamic"
import InternalLinks, { streamingLinks, newsLinks } from '@/components/InternalLinks'

// Lazy load non-critical components
const StatsSection = dynamic(() => import("@/components/stats-section").then(mod => ({ default: mod.StatsSection })), {
  loading: () => <div className="animate-pulse bg-muted h-32 rounded-lg" />
})

const NewsletterSignup = dynamic(() => import("@/components/newsletter-signup").then(mod => ({ default: mod.NewsletterSignup })), {
  loading: () => <div className="animate-pulse bg-muted h-24 rounded-lg" />
})

export const metadata: Metadata = {
  title: "Koora Live كورة لايف - بث مباشر مجاني",
  description:
    "شاهد مباريات الدوري السعودي والدوريات العالمية مجاناً مع Koora Live كورة لايف. بث مباشر بجودة HD، تعليق عربي احترافي، وإحصائيات مفصلة. انضم لملايين المشجعين واستمتع بأفضل تجربة مشاهدة كرة القدم على الإنترنت.",
  keywords:
    "Koora Live, كورة لايف, كورة لايف بث مباشر, مباريات مباشرة, الدوري السعودي, كرة القدم, بث مباشر, الهلال, النصر, الاتحاد, الأهلي, مباريات اليوم, كورة لايف السعودية, Koora Live streaming",
  authors: [{ name: "Koora Live - كورة لايف" }],
  creator: "Koora Live - كورة لايف",
  publisher: "Koora Live - كورة لايف",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://koooralive.space"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
    },
  },
  openGraph: {
    title: "Koora Live - كورة لايف - كورة لايف بث مباشر للدوري السعودي",
    description: "Koora Live - كورة لايف - كورة لايف بث مباشر للدوري السعودي والدوريات العالمية بجودة عالية ومجاناً",
    url: "https://koooralive.space",
    siteName: "Koora Live - كورة لايف",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "كورة لايف - مشاهدة المباريات مباشرة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koora Live - كورة لايف - كورة لايف بث مباشر",
    description: "Koora Live - كورة لايف - كورة لايف بث مباشر للدوري السعودي",
    images: ["/og-image.jpg"],
    creator: "@kooralive_sa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

const teams = [
  { name: "الهلال", city: "الرياض", founded: "1957", titles: 18, logo: "/al-hilal-saudi-football-club-logo.png" },
  { name: "النصر", city: "الرياض", founded: "1955", titles: 9, logo: "/al-nassr-saudi-football-club-logo.png" },
  { name: "الاتحاد", city: "جدة", founded: "1927", titles: 8, logo: "/al-ittihad-saudi-football-club-logo.png" },
  { name: "الأهلي", city: "جدة", founded: "1937", titles: 3, logo: "/al-ahli-saudi-football-club-logo.png" },
  { name: "الشباب", city: "الرياض", founded: "1947", titles: 6, logo: "/al-shabab-saudi-football-club-logo.png" },
  { name: "الفتح", city: "الأحساء", founded: "1958", titles: 2, logo: "/al-fateh-saudi-football-club-logo.png" },
]

const faqData = [
  {
    question: "كيف يمكنني مشاهدة مباريات الدوري السعودي مجاناً مع Koora Live كورة لايف؟",
    answer:
      "يمكنك مشاهدة جميع مباريات الدوري السعودي مجاناً من خلال موقع Koora Live كورة لايف. Koora Live كورة لايف بث مباشر يوفر لك بث عالي الجودة لجميع المباريات مع تعليق عربي احترافي.",
  },
  {
    question: "ما هي مميزات Koora Live كورة لايف بث مباشر؟",
    answer:
      "Koora Live كورة لايف بث مباشر يوفر جودة HD و Full HD، تعليق عربي احترافي، متوافق مع جميع الأجهزة، ومجاني بالكامل. Koora Live كورة لايف هو الخيار الأفضل لمشاهدة المباريات.",
  },
  {
    question: "متى يبدأ موسم الدوري السعودي على Koora Live كورة لايف؟",
    answer:
      "يبدأ موسم الدوري السعودي عادة في شهر أغسطس وينتهي في شهر مايو. Koora Live كورة لايف يغطي جميع مباريات الموسم مع Koora Live كورة لايف بث مباشر عالي الجودة.",
  },
  {
    question: "هل يمكنني مشاهدة Koora Live كورة لايف على الهاتف المحمول؟",
    answer:
      "نعم، Koora Live كورة لايف متوافق تماماً مع الهواتف المحمولة والأجهزة اللوحية. Koora Live كورة لايف بث مباشر يعمل بسلاسة على جميع الأجهزة.",
  },
  {
    question: "ما هي جودة البث في Koora Live كورة لايف؟",
    answer:
      "Koora Live كورة لايف يوفر بث بجودة HD و Full HD و 4K حسب سرعة الإنترنت. تقنية البث المتكيف تضمن أفضل جودة حسب سرعة الإنترنت لديك، مما يجعل تجربة المشاهدة على Koora Live كورة لايف استثنائية.",
  },
  {
    question: "متى سيتم إطلاق تطبيق Koora Live كورة لايف للهواتف الذكية؟",
    answer:
      "نحن نعمل حالياً على تطوير تطبيق Koora Live كورة لايف للأندرويد والآيفون. سيتم إطلاق التطبيق قريباً مع مميزات إضافية مثل الإشعارات الفورية ومشاهدة أفضل على الهواتف المحمولة.",
  },
  {
    question: "ما هي مميزات تطبيق Koora Live كورة لايف الجديد؟",
    answer:
      "تطبيق Koora Live كورة لايف سيوفر إشعارات فورية للأهداف، واجهة محسنة للهواتف، إمكانية حفظ المباريات المفضلة، ومشاهدة بدون إعلانات مع جودة أفضل.",
  },
  {
    question: "هل سيكون تطبيق Koora Live كورة لايف مجاني؟",
    answer:
      "نعم، تطبيق Koora Live كورة لايف سيكون مجاني بالكامل مع جميع المميزات الأساسية. سيتوفر أيضاً إصدار مميز بمميزات إضافية للمشتركين.",
  },
]

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Koora Live - كورة لايف",
    alternateName: ["Koora Live", "كورة لايف", "كورة لايف بث مباشر"],
    url: "https://koooralive.space",
    description:
      "Koora Live - كورة لايف - منصة البث المباشر الأولى لمباريات كرة القدم في المملكة العربية السعودية. Koora Live كورة لايف بث مباشر للدوري السعودي",
    inLanguage: "ar-SA",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://koooralive.space/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Koora Live - كورة لايف",
      url: "https://koooralive.space",
      logo: {
        "@type": "ImageObject",
        url: "https://koooralive.space/logo.png",
      },
      sameAs: [
        "https://twitter.com/kooralive_sa",
        "https://instagram.com/kooralive_sa",
        "https://facebook.com/koooralive.space",
      ],
    },
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "دليل مشاهدة كرة القدم السعودية - Koora Live كورة لايف بث مباشر",
    description: "دليل شامل لمشاهدة مباريات كرة القدم السعودية مع Koora Live كورة لايف - كورة لايف بث مباشر",
    image: "https://koooralive.space/saudi-football-guide.png",
    author: {
      "@type": "Organization",
      name: "Koora Live - كورة لايف",
    },
    publisher: {
      "@type": "Organization",
      name: "Koora Live - كورة لايف",
      logo: {
        "@type": "ImageObject",
        url: "https://koooralive.space/logo.png",
      },
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://koooralive.space/",
    },
    articleSection: "Sports",
    inLanguage: "ar-SA",
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <section className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Koora Live - كورة لايف - كورة لايف بث مباشر</h1>
            <p className="text-muted-foreground">شاهد فرقك المفضلة تلعب مباشرة مع Koora Live كورة لايف</p>
          </section>

          <section aria-label="قائمة المباريات المباشرة والقادمة" className="mb-16">
            <MatchGrid />
          </section>

          <section className="mb-16">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                دليل مشاهدة كرة القدم السعودية مع Koora Live كورة لايف
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                دليلك الشامل لمشاهدة مباريات الدوري السعودي والبطولات العالمية مجاناً مع Koora Live كورة لايف بث مباشر
                بأفضل جودة
              </p>
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                <Image
                  src="/saudi-football-stadium-with-green-field-and-crowd.png"
                  alt="ملعب كرة القدم السعودي - كورة لايف"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>

            {/* APK announcement section */}
            <Card className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="text-center py-12">
                <div className="mb-6">
                  <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
                    🚀 قريباً جداً
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  تطبيق Koora Live كورة لايف للهواتف الذكية قادم قريباً!
                </h2>
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                  نحن نعمل بجد لإطلاق تطبيق Koora Live كورة لايف الرسمي للأندرويد والآيفون. التطبيق سيوفر تجربة مشاهدة
                  محسنة مع إشعارات فورية للأهداف، واجهة مستخدم محسنة للهواتف، وإمكانية مشاهدة المباريات بجودة أعلى مع
                  استهلاك أقل للبيانات.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="font-semibold mb-2">واجهة محسنة</h3>
                    <p className="text-sm text-muted-foreground">تصميم خاص للهواتف المحمولة</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🔔</span>
                    </div>
                    <h3 className="font-semibold mb-2">إشعارات فورية</h3>
                    <p className="text-sm text-muted-foreground">تنبيهات للأهداف والأحداث المهمة</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="font-semibold mb-2">أداء أسرع</h3>
                    <p className="text-sm text-muted-foreground">تحميل أسرع واستهلاك أقل للبيانات</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary mb-4">سجل الآن ليصلك إشعار عند إطلاق التطبيق!</p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  مرحباً بك في عالم كرة القدم السعودية مع Koora Live كورة لايف
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  كرة القدم السعودية تشهد نهضة حقيقية في السنوات الأخيرة، مع انضمام نجوم عالميين للدوري السعودي وتطوير
                  البنية التحتية الرياضية. الدوري السعودي للمحترفين أصبح واحداً من أقوى الدوريات في آسيا والشرق الأوسط.
                </p>
                <p>
                  مع Koora Live كورة لايف، يمكنك متابعة جميع مباريات الدوري السعودي والبطولات العالمية بجودة عالية
                  ومجاناً. Koora Live كورة لايف بث مباشر يوفر لك تجربة مشاهدة متميزة مع تعليق عربي احترافي وإحصائيات
                  مفصلة.
                </p>
                <p>
                  الاستثمارات الضخمة في كرة القدم السعودية، بما في ذلك صندوق الاستثمارات العامة، جعلت من الدوري السعودي
                  وجهة مفضلة للنجوم العالميين. هذا التطور جعل من Koora Live كورة لايف المنصة الأولى لمتابعة هذه النهضة
                  الكروية الحقيقية.
                </p>
                <p>
                  Koora Live كورة لايف بث مباشر يغطي ليس فقط مباريات الدوري السعودي، بل أيضاً كأس الملك، دوري أبطال آسيا،
                  والمباريات الودية الدولية للأندية السعودية. نحن نؤمن بأن كل مشجع يستحق مشاهدة فريقه المفضل بأفضل جودة
                  ممكنة.
                </p>
              </CardContent>
            </Card>

            {/* History Section */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  تاريخ كرة القدم السعودية وتطورها مع Koora Live كورة لايف
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  بدأت كرة القدم السعودية رحلتها في عشرينيات القرن الماضي، وشهدت تطوراً مستمراً حتى وصلت إلى ما هي عليه
                  اليوم. الدوري السعودي للمحترفين، الذي تأسس عام 2008، أصبح من أقوى الدوريات في المنطقة.
                </p>
                <p>
                  منتخب السعودية حقق إنجازات تاريخية، بما في ذلك الفوز بكأس آسيا ثلاث مرات والتأهل لكأس العالم خمس مرات.
                  هذه الإنجازات جعلت من كرة القدم السعودية محط أنظار العالم، و Koora Live كورة لايف فخور بتغطية هذا
                  التاريخ العريق.
                </p>
                <p>
                  اليوم، مع رؤية المملكة 2030 والاستثمار في الرياضة، نشهد عصراً ذهبياً جديداً لكرة القدم السعودية. Koora
                  Live كورة لايف بث مباشر يوثق هذه اللحظات التاريخية ويجعلها متاحة لجميع المشجعين حول العالم.
                </p>
              </CardContent>
            </Card>

            {/* Teams Table */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  أبرز فرق الدوري السعودي على Koora Live كورة لايف
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-right p-4 font-semibold">الفريق</th>
                        <th className="text-right p-4 font-semibold">المدينة</th>
                        <th className="text-right p-4 font-semibold">تأسس</th>
                        <th className="text-right p-4 font-semibold">الألقاب</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teams.map((team, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="p-4">
                            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={team.logo || "/placeholder.svg"}
                                  alt={`شعار ${team.name} - كورة لايف`}
                                  fill
                                  className="object-contain"
                                  loading="lazy"
                                  sizes="32px"
                                  quality={85}
                                />
                              </div>
                              <span className="font-semibold">{team.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-muted-foreground">{team.city}</td>
                          <td className="p-4 text-muted-foreground">{team.founded}</td>
                          <td className="p-4">
                            <Badge variant="secondary" className="font-semibold">
                              {team.titles} لقب
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 space-y-3 text-muted-foreground">
                  <p>
                    <strong>الهلال:</strong> أكثر الأندية تتويجاً بالألقاب في السعودية وآسيا، ويلعب مبارياته على Koora
                    Live كورة لايف بث مباشر
                  </p>
                  <p>
                    <strong>النصر:</strong> النادي الذي ضم كريستيانو رونالدو، مما جعل مبارياته الأكثر مشاهدة على Koora
                    Live كورة لايف
                  </p>
                  <p>
                    <strong>الاتحاد:</strong> عميد الأندية السعودية وأول نادي يتأسس في المملكة، تابع مبارياته على Koora
                    Live كورة لايف
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Comprehensive Features Section */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">مميزات Koora Live كورة لايف بث مباشر المتقدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Koora Live كورة لايف بث مباشر عالي الجودة</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Koora Live كورة لايف يوفر بث مباشر بجودة HD و Full HD و 4K لجميع المباريات مع استقرار تام في
                          الإشارة. تقنية البث المتكيف تضمن أفضل جودة حسب سرعة الإنترنت لديك، مما يجعل تجربة المشاهدة على
                          Koora Live كورة لايف استثنائية.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">تعليق عربي احترافي مع Koora Live كورة لايف</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          تعليق عربي من أفضل المعلقين الرياضيين في الوطن العربي مع تحليل فني متخصص على Koora Live كورة
                          لايف. فريق التعليق يضم خبراء كرة القدم الذين يقدمون تحليلاً عميقاً للمباريات والتكتيكات.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Koora Live كورة لايف متوافق مع جميع الأجهزة</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          شاهد المباريات على الكمبيوتر، الهاتف المحمول، التابلت، أو التلفزيون الذكي بنفس الجودة مع Koora
                          Live كورة لايف. التطبيق متوافق مع جميع أنظمة التشغيل ويدعم البث على الشاشات الكبيرة.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">تقنية البث المتقدمة</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Koora Live كورة لايف يستخدم أحدث تقنيات البث المباشر مع خوادم متعددة حول العالم لضمان عدم
                          انقطاع الإشارة. تقنية CDN المتقدمة تضمن سرعة تحميل فائقة من أي مكان في العالم.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">إحصائيات مفصلة ومباشرة على Koora Live كورة لايف</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          احصائيات شاملة ومفصلة للمباريات واللاعبين والفرق مع تحديث مباشر على Koora Live كورة لايف. تشمل
                          الإحصائيات: نسبة الاستحواذ، التمريرات الناجحة، المحاولات على المرمى، والخريطة الحرارية
                          للاعبين.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Koora Live كورة لايف مجاني بالكامل</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          جميع المباريات والخدمات متاحة مجاناً على Koora Live كورة لايف بدون اشتراكات أو رسوم خفية. نحن
                          نؤمن بأن كرة القدم حق للجميع، لذلك نوفر أفضل خدمة مجانية في المنطقة.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">تحديثات فورية وإشعارات ذكية</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          تحديثات فورية للنتائج والأهداف مع إشعارات ذكية للمباريات المهمة على Koora Live كورة لايف.
                          يمكنك تخصيص الإشعارات لفرقك المفضلة والحصول على تنبيهات للأحداث المهمة فقط.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">مجتمع Koora Live كورة لايف التفاعلي</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          انضم إلى مجتمع Koora Live كورة لايف وشارك آرائك وتوقعاتك مع آلاف المشجعين. غرف الدردشة
                          المباشرة أثناء المباريات تجعل تجربة المشاهدة أكثر متعة وتفاعلاً.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Watch Section */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  كيفية مشاهدة المباريات على Koora Live كورة لايف بث مباشر
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">اختر المباراة على Koora Live كورة لايف</h3>
                    <p className="text-muted-foreground">
                      تصفح قائمة المباريات المتاحة على Koora Live كورة لايف واختر المباراة التي تريد مشاهدتها
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">اضغط شاهد مباشرة</h3>
                    <p className="text-muted-foreground">
                      اضغط على زر "شاهد مباشرة" الأخضر للانتقال إلى Koora Live كورة لايف بث مباشر
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">استمتع بالمشاهدة</h3>
                    <p className="text-muted-foreground">
                      استمتع بمشاهدة المباراة بأفضل جودة مع تعليق عربي احترافي على Koora Live كورة لايف
                    </p>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    دليل مفصل للمشاهدة على Koora Live كورة لايف:
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong>الخطوة 1:</strong> ادخل إلى موقع Koora Live كورة لايف من أي متصفح على جهازك
                    </p>
                    <p>
                      <strong>الخطوة 2:</strong> تصفح قائمة المباريات المباشرة والقادمة في الصفحة الرئيسية
                    </p>
                    <p>
                      <strong>الخطوة 3:</strong> اختر المباراة التي تريد مشاهدتها من قائمة Koora Live كورة لايف
                    </p>
                    <p>
                      <strong>الخطوة 4:</strong> اضغط على زر "شاهد مباشرة" الأخضر
                    </p>
                    <p>
                      <strong>الخطوة 5:</strong> انتظر تحميل المشغل (عادة أقل من 10 ثوان)
                    </p>
                    <p>
                      <strong>الخطوة 6:</strong> اختر جودة البث المناسبة لسرعة الإنترنت لديك
                    </p>
                    <p>
                      <strong>الخطوة 7:</strong> استمتع بمشاهدة المباراة مع Koora Live كورة لايف بث مباشر
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Author Bio Section */}
            <Card className="mb-12 bg-gradient-to-r from-secondary/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">عن الكاتب</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src="/football-coach-portrait.png"
                      alt="المدرب سامي الجابر - خبير كرة القدم السعودية"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="128px"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="flex-1 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-foreground mb-2">المدرب سامي الجابر</h3>
                    <p className="text-lg text-primary mb-4">خبير كرة القدم السعودية ومحلل رياضي</p>
                    <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                      <p>
                        المدرب سامي الجابر، أسطورة كرة القدم السعودية واللاعب السابق للمنتخب السعودي ونادي الهلال. شارك
                        في أربع بطولات كأس عالم وسجل أول هدف سعودي في تاريخ كأس العالم عام 1994.
                      </p>
                      <p>
                        بعد اعتزاله كلاعب، عمل الجابر كمدرب ومحلل رياضي، وهو حالياً خبير كرة القدم في Koora Live كورة
                        لايف ويساهم في تقديم التحليل الفني للمباريات. خبرته الواسعة في كرة القدم السعودية والعالمية
                        تجعله مرجعاً موثوقاً في عالم الكرة.
                      </p>
                      <p>
                        يؤمن الجابر بأن Koora Live كورة لايف يلعب دوراً مهماً في نشر ثقافة كرة القدم وجعلها متاحة للجميع،
                        خاصة مع التطور الكبير الذي يشهده الدوري السعودي حالياً.
                      </p>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse">
                      <a
                        href="https://facebook.com/samialjaberofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="sr-only">فيسبوك</span>📘 فيسبوك
                      </a>
                      <a
                        href="https://twitter.com/samijaber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="sr-only">تويتر</span>🐦 تويتر
                      </a>
                      <a
                        href="https://linkedin.com/in/samialjabercoach"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="sr-only">لينكد إن</span>💼 لينكد إن
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">الأسئلة الشائعة حول Koora Live كورة لايف</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{faq.answer}</p>
                    {index < faqData.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Statistics Section */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  إحصائيات الدوري السعودي على Koora Live كورة لايف
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">18</div>
                    <div className="text-muted-foreground">فريق مشارك</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">306</div>
                    <div className="text-muted-foreground">مباراة في الموسم</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2.8M</div>
                    <div className="text-muted-foreground">مشاهد شهرياً</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">45+</div>
                    <div className="text-muted-foreground">دولة تتابع الدوري</div>
                  </div>
                </div>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-primary">إحصائيات المشاهدة على Koora Live كورة لايف:</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• متوسط المشاهدين لكل مباراة: 150,000 مشاهد</p>
                      <p>• أعلى نسبة مشاهدة: مباريات الهلال والنصر</p>
                      <p>• نسبة المشاهدة من السعودية: 65%</p>
                      <p>• نسبة المشاهدة من الدول العربية: 30%</p>
                      <p>• نسبة المشاهدة من باقي العالم: 5%</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-primary">إحصائيات تقنية:</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• متوسط جودة البث: Full HD (1080p)</p>
                      <p>• زمن التأخير: أقل من 30 ثانية</p>
                      <p>• نسبة استقرار الإشارة: 99.5%</p>
                      <p>• متوسط سرعة التحميل: 2 ثانية</p>
                      <p>• دعم الأجهزة: 100% من الأجهزة الحديثة</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <Card>
              <CardContent className="text-center py-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  ابدأ مشاهدة مباريات كرة القدم الآن مع Koora Live كورة لايف
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  انضم إلى ملايين المشاهدين واستمتع بأفضل تجربة مشاهدة لمباريات كرة القدم السعودية والعالمية مع Koora
                  Live كورة لايف بث مباشر
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#matches"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    شاهد المباريات الآن على Koora Live كورة لايف
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    تواصل معنا
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

          <StatsSection />

          <section className="py-12">
            <div className="max-w-md mx-auto">
              <NewsletterSignup />
            </div>
          </section>
          
          {/* Internal Links Section */}
          <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <InternalLinks 
                    title="خدمات البث المباشر"
                    links={streamingLinks}
                  />
                  <InternalLinks 
                    title="المحتوى الرياضي"
                    links={newsLinks}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
