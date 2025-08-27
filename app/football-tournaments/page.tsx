import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "بطولات كرة القدم | Koora Live - جميع البطولات والدوريات",
  description:
    "تابع جميع بطولات ودوريات كرة القدم على Koora Live كورة لايف. الدوري السعودي، دوري أبطال آسيا، والبطولات العالمية",
  keywords: "بطولات كرة القدم, كورة لايف, Koora Live, الدوري السعودي, دوري أبطال آسيا, كأس العالم",
  openGraph: {
    title: "بطولات كرة القدم | Koora Live",
    description: "جميع بطولات ودوريات كرة القدم في مكان واحد",
    images: ["/football-tournaments.png"],
  },
}

export default function FootballTournaments() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "بطولات كرة القدم | Koora Live",
            description: "دليل شامل لجميع بطولات ودوريات كرة القدم",
            author: {
              "@type": "Person",
              name: "سامي الجابر",
              jobTitle: "مدرب كرة قدم محترف",
            },
            publisher: {
              "@type": "Organization",
              name: "Koora Live",
              logo: "https://koooralive.space/logo.png",
            },
            mainEntityOfPage: "https://koooralive.space/football-tournaments",
          }),
        }}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            بطولات كرة القدم
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            تابع جميع بطولات ودوريات كرة القدم على{" "}
            <Link href="/" className="text-green-400 hover:text-green-300">
              Koora Live كورة لايف
            </Link>
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">البطولات الحالية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "الدوري السعودي للمحترفين", status: "جاري", matches: 45, teams: 18 },
              { name: "دوري أبطال آسيا", status: "دور المجموعات", matches: 24, teams: 32 },
              { name: "كأس الملك", status: "ربع النهائي", matches: 8, teams: 8 },
              { name: "الدوري الإنجليزي الممتاز", status: "جاري", matches: 380, teams: 20 },
              { name: "دوري أبطال أوروبا", status: "دور الـ16", matches: 16, teams: 16 },
              { name: "كأس العالم للأندية", status: "قادم", matches: 32, teams: 32 },
            ].map((tournament, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-green-400 mb-2">{tournament.name}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">{tournament.status}</span>
                    <span className="text-gray-400 text-sm">{tournament.teams} فريق</span>
                  </div>
                  <p className="text-gray-300 text-sm">المباريات: {tournament.matches}</p>
                </div>
                <Link
                  href="/"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center transition-colors"
                >
                  شاهد المباريات
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">دليل البطولات الشامل</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              <strong>Koora Live كورة لايف</strong> هي منصتك الشاملة لمتابعة جميع بطولات كرة القدم حول العالم. من الدوري
              السعودي المحلي إلى البطولات القارية والعالمية.
            </p>

            <h3 className="text-2xl font-bold text-green-400 mb-4">البطولات المحلية</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الدوري السعودي للمحترفين</h4>
                <p className="text-gray-300 mb-2">أقوى دوري في المنطقة العربية</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 18 فريق يتنافسون على اللقب</li>
                  <li>• 34 جولة في الموسم الواحد</li>
                  <li>• أكبر الأسماء العالمية</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">كأس الملك</h4>
                <p className="text-gray-300 mb-2">البطولة الكأس الأهم في السعودية</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• نظام خروج المغلوب</li>
                  <li>• مشاركة جميع أندية المملكة</li>
                  <li>• نهائي مثير في الرياض</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">البطولات القارية</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-green-600">
                  <tr>
                    <th className="px-6 py-3 text-right">البطولة</th>
                    <th className="px-6 py-3 text-right">القارة</th>
                    <th className="px-6 py-3 text-right">عدد الفرق</th>
                    <th className="px-6 py-3 text-right">الفترة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-bold">دوري أبطال آسيا</td>
                    <td className="px-6 py-4">آسيا</td>
                    <td className="px-6 py-4">32</td>
                    <td className="px-6 py-4">فبراير - مايو</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">دوري أبطال أوروبا</td>
                    <td className="px-6 py-4">أوروبا</td>
                    <td className="px-6 py-4">32</td>
                    <td className="px-6 py-4">سبتمبر - يونيو</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">كوبا ليبرتادوريس</td>
                    <td className="px-6 py-4">أمريكا الجنوبية</td>
                    <td className="px-6 py-4">32</td>
                    <td className="px-6 py-4">فبراير - نوفمبر</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">دوري أبطال أفريقيا</td>
                    <td className="px-6 py-4">أفريقيا</td>
                    <td className="px-6 py-4">16</td>
                    <td className="px-6 py-4">ديسمبر - مايو</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">البطولات العالمية</h3>
            <p className="text-gray-300 mb-4">
              تابع أهم البطولات العالمية على{" "}
              <Link href="/" className="text-green-400 hover:text-green-300">
                كورة لايف
              </Link>
              :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong>كأس العالم FIFA:</strong> كل 4 سنوات، أهم بطولة في كرة القدم
              </li>
              <li>
                <strong>كأس العالم للأندية:</strong> سنوياً، أبطال القارات يتنافسون
              </li>
              <li>
                <strong>كأس القارات:</strong> كل 4 سنوات، بطولة تحضيرية لكأس العالم
              </li>
              <li>
                <strong>الألعاب الأولمبية:</strong> كل 4 سنوات، منتخبات تحت 23 سنة
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-green-400 mb-4">مميزات متابعة البطولات على Koora Live</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">البث المباشر</h4>
                <p className="text-gray-300">شاهد جميع مباريات البطولات مباشرة</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الجداول والنتائج</h4>
                <p className="text-gray-300">تحديث فوري لجميع النتائج والترتيب</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الإحصائيات</h4>
                <p className="text-gray-300">إحصائيات مفصلة لكل بطولة ولاعب</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الأخبار</h4>
                <p className="text-gray-300">آخر أخبار البطولات والفرق</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">التقويم الرياضي</h3>
            <p className="text-gray-300 mb-4">خطط لمتابعة البطولات المهمة خلال العام:</p>
            <div className="bg-gray-900 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold text-green-400 mb-3">الأحداث القادمة</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong>مارس 2025:</strong> تصفيات كأس العالم آسيا
                </li>
                <li>
                  <strong>أبريل 2025:</strong> نهائي دوري أبطال آسيا
                </li>
                <li>
                  <strong>مايو 2025:</strong> نهائي الدوري السعودي
                </li>
                <li>
                  <strong>يونيو 2025:</strong> كوبا أمريكا 2025
                </li>
                <li>
                  <strong>يوليو 2025:</strong> الألعاب الأولمبية باريس
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">تابع جميع البطولات</h2>
          <p className="text-xl text-gray-300 mb-6">
            لا تفوت أي مباراة من البطولات المهمة مع <strong>Koora Live كورة لايف</strong>
          </p>
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            شاهد البطولات الآن
          </Link>
        </section>
      </main>
    </div>
  )
}
