import { Metadata } from 'next'
import { Calendar, Globe, TrendingUp, Users, Clock, Star } from 'lucide-react'
import Breadcrumb, { BreadcrumbStructuredData } from '@/components/Breadcrumb'
import InternalLinks, { streamingLinks } from '@/components/InternalLinks'

export const metadata = {
  title: "أخبار كرة القدم السعودية والعربية اليوم | Koora Live",
  description: "تابع آخر أخبار كرة القدم السعودية والعربية مع Koora Live. أخبار الانتقالات والمباريات والبطولات",
  keywords: "أخبار كرة القدم, الأخبار الرياضية, كورة لايف, Koora Live, أخبار الهلال, أخبار النصر",
  openGraph: {
    title: "أخبار كرة القدم - Koora Live",
    description: "آخر أخبار كرة القدم السعودية والعربية",
    images: ["/football-news.png"],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "Koora Live - كورة لايف",
  "url": "https://koooralive.space",
  "logo": "https://koooralive.space/logo.png",
  "description": "منصة كورة لايف الرائدة في تغطية أخبار كرة القدم السعودية والعربية مع البث المباشر",
  "sameAs": [
    "https://twitter.com/kooralive_sa",
    "https://facebook.com/kooralive"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Saudi Arabia",
    "alternateName": "المملكة العربية السعودية"
  },
  "knowsAbout": [
    "الدوري السعودي للمحترفين",
    "كرة القدم السعودية",
    "أخبار الرياضة",
    "البث المباشر"
  ],
  "mainEntity": {
    "@type": "Article",
    "headline": "أخبار كرة القدم السعودية والعربية اليوم",
    "description": "تغطية شاملة لآخر أخبار كرة القدم في السعودية والوطن العربي",
    "author": {
      "@type": "Organization",
      "name": "Koora Live - كورة لايف"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Koora Live - كورة لايف",
      "logo": {
        "@type": "ImageObject",
        "url": "https://koooralive.space/logo.png"
      }
    },
    "datePublished": "2025-01-16",
    "dateModified": "2025-01-16",
    "articleSection": "Sports News",
    "keywords": "أخبار كرة القدم, الدوري السعودي, كورة لايف, الأخبار الرياضية"
  }
}

export default function FootballNewsPage() {
  const breadcrumbItems = [
    { label: 'أخبار كرة القدم' }
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-green-400">أخبار كرة القدم السعودية والعربية - Koora Live</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              تابع آخر الأخبار والتطورات في عالم كرة القدم مع <strong>كورة لايف</strong> - مصدرك الموثوق للأخبار
              الرياضية
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-green-400 mb-4">أبرز أخبار اليوم</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-3">الهلال يواصل انتصاراته</h3>
                <p className="mb-3">نادي الهلال يحقق فوزاً مهماً في الدوري السعودي ويقترب من اللقب</p>
                <span className="text-sm text-gray-400">منذ ساعتين</span>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-3">رونالدو يسجل هدفاً رائعاً</h3>
                <p className="mb-3">النجم البرتغالي يقود النصر لفوز مثير أمام الاتحاد</p>
                <span className="text-sm text-gray-400">منذ 3 ساعات</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-4">لماذا تتابع الأخبار على كورة لايف؟</h2>
            <p className="mb-6 leading-relaxed">
              <a href="/" className="text-green-400 hover:underline">
                منصة Koora Live
              </a>{" "}
              ليست فقط للبث المباشر، بل هي مصدرك الشامل لجميع أخبار كرة القدم. نحن نوفر تغطية شاملة وسريعة لجميع الأحداث
              الرياضية.
            </p>

            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">مميزات تغطيتنا الإخبارية</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>📰 أخبار فورية ومحدثة</li>
                <li>⚽ تغطية شاملة للدوري السعودي</li>
                <li>🏆 أخبار البطولات العربية</li>
                <li>👥 أخبار الانتقالات والصفقات</li>
                <li>📊 تحليلات وإحصائيات</li>
                <li>🎥 مقاطع فيديو حصرية</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-4">أقسام الأخبار</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-green-400 mb-2">الدوري السعودي</h4>
                <p className="text-sm">أخبار جميع أندية الدوري السعودي للمحترفين</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-green-400 mb-2">المنتخبات</h4>
                <p className="text-sm">أخبار المنتخب السعودي والمنتخبات العربية</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold text-green-400 mb-2">البطولات الآسيوية</h4>
                <p className="text-sm">تغطية دوري أبطال آسيا والبطولات القارية</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-4">كيف تتابع الأخبار معنا</h2>
            <ol className="list-decimal list-inside space-y-3 mb-8">
              <li>
                زر{" "}
                <a href="/" className="text-green-400 hover:underline">
                  الصفحة الرئيسية لكورة لايف
                </a>
              </li>
              <li>تصفح قسم الأخبار المحدث باستمرار</li>
              <li>اشترك في التنبيهات للحصول على آخر الأخبار</li>
              <li>شارك الأخبار مع أصدقائك</li>
            </ol>

            <div className="bg-green-900/20 border border-green-400 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">💡 نصيحة المحرر</h3>
              <p>
                لتبقى على اطلاع دائم بآخر الأخبار، احفظ موقع كورة لايف في المفضلة وتفقده يومياً. كما يمكنك مشاهدة
                المباريات المباشرة بعد قراءة الأخبار!
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">تابع آخر الأخبار</h3>
              <p className="mb-6">لا تفوت أي خبر مهم في عالم كرة القدم</p>
              <a
                href="/"
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
              >
                العودة للرئيسية
              </a>
            </div>
          </div>
          </article>
             
          <InternalLinks 
            title="شاهد المباريات مباشرة"
            links={streamingLinks}
            className="mt-12"
          />
          </div>
        </div>
      </div>
    </>
  )
}
