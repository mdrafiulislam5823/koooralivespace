import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "نجوم كرة القدم | Koora Live - أخبار ومعلومات النجوم",
  description:
    "تابع أخبار ومعلومات نجوم كرة القدم على Koora Live كورة لايف. أحدث الأخبار عن نجوم الدوري السعودي والعالمي",
  keywords: "نجوم كرة القدم, كورة لايف, Koora Live, أخبار اللاعبين, نجوم الدوري السعودي, كريستيانو رونالدو",
  openGraph: {
    title: "نجوم كرة القدم | Koora Live",
    description: "أحدث أخبار ومعلومات نجوم كرة القدم",
    images: ["/football-stars.png"],
  },
}

export default function FootballStars() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "نجوم كرة القدم | Koora Live",
            description: "دليل شامل لنجوم كرة القدم وأحدث أخبارهم",
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
            mainEntityOfPage: "https://koooralive.space/football-stars",
          }),
        }}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            نجوم كرة القدم
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            تابع أحدث أخبار ومعلومات نجوم كرة القدم على{" "}
            <Link href="/" className="text-green-400 hover:text-green-300">
              Koora Live كورة لايف
            </Link>
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">نجوم الدوري السعودي</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "كريستيانو رونالدو", team: "النصر", position: "مهاجم", goals: 25, assists: 8 },
              { name: "كريم بنزيما", team: "الاتحاد", position: "مهاجم", goals: 18, assists: 12 },
              { name: "نيمار جونيور", team: "الهلال", position: "جناح", goals: 8, assists: 15 },
              { name: "ساديو ماني", team: "النصر", position: "جناح", goals: 12, assists: 10 },
              { name: "روبن نيفيس", team: "الهلال", position: "وسط", goals: 5, assists: 18 },
              { name: "فابينيو", team: "الاتحاد", position: "وسط دفاعي", goals: 3, assists: 8 },
            ].map((player, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-green-400 mb-2">{player.name}</h3>
                  <p className="text-gray-300">
                    {player.team} - {player.position}
                  </p>
                  <div className="flex justify-between mt-4 text-sm">
                    <span>
                      أهداف: <strong className="text-green-400">{player.goals}</strong>
                    </span>
                    <span>
                      تمريرات حاسمة: <strong className="text-green-400">{player.assists}</strong>
                    </span>
                  </div>
                </div>
                <Link
                  href="/"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center transition-colors"
                >
                  شاهد أهدافه
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">دليل نجوم كرة القدم</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              يشهد الدوري السعودي للمحترفين حالياً نهضة كبيرة بوصول نجوم عالميين كبار، مما جعل
              <strong> Koora Live كورة لايف</strong> المنصة الأولى لمتابعة أخبار وأداء هؤلاء النجوم.
            </p>

            <h3 className="text-2xl font-bold text-green-400 mb-4">أبرز النجوم في الدوري السعودي</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">كريستيانو رونالدو</h4>
                <p className="text-gray-300 mb-2">النجم البرتغالي الذي انضم للنصر في 2023</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 5 مرات حاصل على الكرة الذهبية</li>
                  <li>• أكثر من 850 هدف في مسيرته</li>
                  <li>• قائد المنتخب البرتغالي</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">كريم بنزيما</h4>
                <p className="text-gray-300 mb-2">المهاجم الفرنسي نجم الاتحاد</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• حاصل على الكرة الذهبية 2022</li>
                  <li>• بطل دوري أبطال أوروبا 5 مرات</li>
                  <li>• أسطورة ريال مدريد السابق</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">إحصائيات النجوم هذا الموسم</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-green-600">
                  <tr>
                    <th className="px-6 py-3 text-right">اللاعب</th>
                    <th className="px-6 py-3 text-right">الفريق</th>
                    <th className="px-6 py-3 text-right">المباريات</th>
                    <th className="px-6 py-3 text-right">الأهداف</th>
                    <th className="px-6 py-3 text-right">التمريرات الحاسمة</th>
                    <th className="px-6 py-3 text-right">التقييم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-bold">كريستيانو رونالدو</td>
                    <td className="px-6 py-4">النصر</td>
                    <td className="px-6 py-4">28</td>
                    <td className="px-6 py-4 text-green-400">25</td>
                    <td className="px-6 py-4">8</td>
                    <td className="px-6 py-4 text-green-400">8.5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">كريم بنزيما</td>
                    <td className="px-6 py-4">الاتحاد</td>
                    <td className="px-6 py-4">24</td>
                    <td className="px-6 py-4 text-green-400">18</td>
                    <td className="px-6 py-4">12</td>
                    <td className="px-6 py-4 text-green-400">8.2</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">نيمار جونيور</td>
                    <td className="px-6 py-4">الهلال</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4 text-green-400">8</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4 text-green-400">8.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">تأثير النجوم على الدوري السعودي</h3>
            <p className="text-gray-300 mb-4">
              وصول هؤلاء النجوم العالميين للدوري السعودي أحدث نقلة نوعية في مستوى البطولة، حيث:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>زيادة الاهتمام العالمي بالدوري السعودي</li>
              <li>ارتفاع مستوى المنافسة والإثارة</li>
              <li>جذب المزيد من المواهب العالمية</li>
              <li>تطوير مستوى اللاعبين المحليين</li>
              <li>زيادة الحضور الجماهيري في الملاعب</li>
            </ul>

            <h3 className="text-2xl font-bold text-green-400 mb-4">متابعة النجوم على Koora Live</h3>
            <p className="text-gray-300 mb-4">
              على{" "}
              <Link href="/" className="text-green-400 hover:text-green-300">
                كورة لايف
              </Link>
              ، نوفر لك متابعة شاملة لجميع نجوم كرة القدم:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الأخبار اليومية</h4>
                <p className="text-gray-300">آخر أخبار النجوم داخل وخارج الملعب</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الإحصائيات المفصلة</h4>
                <p className="text-gray-300">أرقام وإحصائيات شاملة لكل لاعب</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">مقاطع الأهداف</h4>
                <p className="text-gray-300">أفضل أهداف ومهارات النجوم</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">المقابلات الحصرية</h4>
                <p className="text-gray-300">لقاءات خاصة مع نجوم الدوري</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">تابع نجومك المفضلين</h2>
          <p className="text-xl text-gray-300 mb-6">
            لا تفوت أي خبر عن نجوم كرة القدم مع <strong>Koora Live كورة لايف</strong>
          </p>
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            تابع النجوم الآن
          </Link>
        </section>
      </main>
    </div>
  )
}
