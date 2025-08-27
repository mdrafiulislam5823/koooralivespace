import { Metadata } from 'next'
import Image from 'next/image'
import { Trophy, Users, Calendar, Star, Play, Globe } from 'lucide-react'
import Breadcrumb, { BreadcrumbStructuredData } from '@/components/Breadcrumb'
import InternalLinks, { newsLinks } from '@/components/InternalLinks'

export const metadata = {
  title: "الدوري السعودي للمحترفين 2025 - مشاهدة مباشرة | Koora Live",
  description:
    "تابع أحدث أخبار ومباريات الدوري السعودي للمحترفين مع Koora Live. مشاهدة مباشرة لجميع مباريات الهلال والنصر والاتحاد والأهلي",
  keywords: "الدوري السعودي, Saudi Pro League, كورة لايف, Koora Live, الهلال, النصر, الاتحاد",
  openGraph: {
    title: "الدوري السعودي للمحترفين 2025 - Koora Live",
    description: "أفضل منصة لمشاهدة مباريات الدوري السعودي مباشرة",
    images: ["/saudi-pro-league-teams.png"],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "name": "الدوري السعودي للمحترفين",
  "alternateName": "Saudi Pro League",
  "url": "https://koooralive.space/saudi-pro-league",
  "logo": "https://koooralive.space/saudi-pro-league-logo.png",
  "description": "الدوري السعودي للمحترفين هو أعلى مستوى في كرة القدم السعودية ويضم 18 نادياً يتنافسون على اللقب",
  "sport": "Football",
  "location": {
    "@type": "Country",
    "name": "Saudi Arabia",
    "alternateName": "المملكة العربية السعودية"
  },
  "foundingDate": "2008",
  "numberOfTeams": 18,
  "member": [
    {
      "@type": "SportsTeam",
      "name": "نادي الهلال",
      "alternateName": "Al Hilal",
      "location": "الرياض"
    },
    {
      "@type": "SportsTeam",
      "name": "نادي النصر",
      "alternateName": "Al Nassr",
      "location": "الرياض"
    },
    {
      "@type": "SportsTeam",
      "name": "نادي الاتحاد",
      "alternateName": "Al Ittihad",
      "location": "جدة"
    },
    {
      "@type": "SportsTeam",
      "name": "نادي الأهلي",
      "alternateName": "Al Ahli",
      "location": "جدة"
    }
  ]
}

export default function SaudiProLeaguePage() {
  const breadcrumbItems = [
    { label: 'الدوري السعودي للمحترفين' }
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
            <h1 className="text-4xl font-bold mb-4 text-green-400">
              الدوري السعودي للمحترفين 2025 - دليلك الشامل مع Koora Live
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              اكتشف كل ما تحتاج معرفته عن الدوري السعودي للمحترفين وكيفية مشاهدة المباريات مباشرة على منصة كورة لايف
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-green-400 mb-4">نظرة عامة على الدوري السعودي</h2>
            <p className="mb-6 leading-relaxed">
              يعتبر <strong>الدوري السعودي للمحترفين</strong> من أقوى الدوريات في المنطقة العربية، ومع منصة{" "}
              <a href="/" className="text-green-400 hover:underline">
                Koora Live
              </a>
              يمكنك متابعة جميع المباريات بجودة عالية ومجاناً. يضم الدوري 18 نادياً يتنافسون على لقب البطولة في موسم مثير.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mb-4">الأندية الكبرى في الدوري السعودي</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-3">نادي الهلال</h3>
                <p>أكثر الأندية تتويجاً بالألقاب المحلية والقارية، ويمكنك مشاهدة جميع مبارياته على كورة لايف</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-3">نادي النصر</h3>
                <p>النادي العالمي بقيادة كريستيانو رونالدو، تابع مبارياته حصرياً على Koora Live</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-4">مميزات مشاهدة الدوري السعودي على كورة لايف</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>بث مباشر بجودة HD لجميع المباريات</li>
              <li>تعليق عربي احترافي</li>
              <li>إحصائيات مفصلة للمباريات واللاعبين</li>
              <li>تطبيق جوال قريباً للمشاهدة في أي مكان</li>
              <li>مجاني بالكامل بدون اشتراكات</li>
            </ul>

            <div className="bg-green-900/20 border border-green-400 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">💡 نصيحة من الخبراء</h3>
              <p>
                للحصول على أفضل تجربة مشاهدة، تأكد من سرعة الإنترنت المناسبة واستخدم متصفح محدث.
                <a href="/" className="text-green-400 hover:underline ml-2">
                  عودة للصفحة الرئيسية
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-4">الأسئلة الشائعة</h2>
            <div className="space-y-4 mb-8">
              <details className="bg-gray-900 p-4 rounded-lg">
                <summary className="font-bold cursor-pointer">هل مشاهدة المباريات مجانية على كورة لايف؟</summary>
                <p className="mt-2">نعم، جميع المباريات متاحة مجاناً بدون أي رسوم أو اشتراكات.</p>
              </details>
              <details className="bg-gray-900 p-4 rounded-lg">
                <summary className="font-bold cursor-pointer">متى سيتم إطلاق تطبيق الجوال؟</summary>
                <p className="mt-2">سيتم إطلاق تطبيق Koora Live للأندرويد قريباً جداً، ترقبوا الإعلان الرسمي.</p>
              </details>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">ابدأ المشاهدة الآن</h3>
              <p className="mb-6">لا تفوت أي مباراة من الدوري السعودي</p>
              <a
                href="/"
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
              >
                شاهد المباريات المباشرة
              </a>
            </div>
          </div>
        </article>
            
            <InternalLinks 
              title="المزيد من المحتوى الرياضي"
              links={newsLinks}
              className="mt-12"
            />
          </div>
        </div>
      </div>
    </>
  )
}
