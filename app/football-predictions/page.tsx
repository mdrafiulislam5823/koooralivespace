import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "توقعات مباريات كرة القدم | Koora Live - تحليلات وتوقعات دقيقة",
  description:
    "أفضل توقعات مباريات كرة القدم على Koora Live كورة لايف. تحليلات احترافية وتوقعات دقيقة للدوري السعودي والدوريات العالمية",
  keywords: "توقعات مباريات, كورة لايف, Koora Live, تحليل المباريات, توقعات كرة القدم, تحليلات رياضية",
  openGraph: {
    title: "توقعات مباريات كرة القدم | Koora Live",
    description: "تحليلات وتوقعات احترافية لمباريات كرة القدم",
    images: ["/football-predictions.png"],
  },
}

export default function FootballPredictions() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "توقعات مباريات كرة القدم | Koora Live",
            description: "دليل شامل لتوقعات وتحليلات مباريات كرة القدم",
            author: {
              "@type": "Person",
              name: "سامي الجابر",
              jobTitle: "مدرب كرة قدم محترف ومحلل رياضي",
            },
            publisher: {
              "@type": "Organization",
              name: "Koora Live",
              logo: "https://koooralive.space/logo.png",
            },
            mainEntityOfPage: "https://koooralive.space/football-predictions",
          }),
        }}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            توقعات مباريات كرة القدم
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            احصل على أدق التوقعات والتحليلات لمباريات كرة القدم من خبراء{" "}
            <Link href="/" className="text-green-400 hover:text-green-300">
              Koora Live كورة لايف
            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/football-predictions.png"
              alt="توقعات مباريات كرة القدم"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">لماذا توقعات Koora Live؟</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                تحليلات من خبراء كرة القدم المحترفين
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                إحصائيات شاملة ودقيقة للفرق واللاعبين
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                تحديث يومي للتوقعات والتحليلات
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                نسبة دقة عالية في التوقعات
              </li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">توقعات اليوم</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { team1: "الهلال", team2: "النصر", prediction: "فوز الهلال", confidence: "75%", odds: "2.1" },
              { team1: "الاتحاد", team2: "الأهلي", prediction: "تعادل", confidence: "60%", odds: "3.2" },
              { team1: "الشباب", team2: "الفتح", prediction: "فوز الشباب", confidence: "70%", odds: "1.8" },
            ].map((match, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2">
                    {match.team1} vs {match.team2}
                  </h3>
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                    {match.prediction}
                  </div>
                  <p className="text-gray-400">نسبة الثقة: {match.confidence}</p>
                  <p className="text-green-400 font-bold">المعامل: {match.odds}</p>
                </div>
                <Link
                  href="/"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center transition-colors"
                >
                  شاهد التحليل الكامل
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">دليل التوقعات الاحترافية</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              في <strong>Koora Live كورة لايف</strong>، نقدم لك أدق التوقعات لمباريات كرة القدم بناءً على تحليلات علمية
              ودراسة شاملة للإحصائيات والبيانات. فريقنا من الخبراء يعمل على مدار الساعة لتقديم أفضل التوقعات.
            </p>

            <h3 className="text-2xl font-bold text-green-400 mb-4">منهجية التوقعات</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">التحليل الإحصائي</h4>
                <p className="text-gray-300">دراسة شاملة لأداء الفرق في آخر 10 مباريات</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">تحليل اللاعبين</h4>
                <p className="text-gray-300">متابعة حالة اللاعبين الأساسيين والإصابات</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">العوامل الخارجية</h4>
                <p className="text-gray-300">أرضية الملعب، الجمهور، والظروف الجوية</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">التاريخ المباشر</h4>
                <p className="text-gray-300">نتائج المواجهات السابقة بين الفريقين</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">أنواع التوقعات</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-green-600">
                  <tr>
                    <th className="px-6 py-3 text-right">نوع التوقع</th>
                    <th className="px-6 py-3 text-right">الوصف</th>
                    <th className="px-6 py-3 text-right">نسبة الدقة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-bold">نتيجة المباراة</td>
                    <td className="px-6 py-4">فوز الفريق الأول، التعادل، أو فوز الفريق الثاني</td>
                    <td className="px-6 py-4 text-green-400">78%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">عدد الأهداف</td>
                    <td className="px-6 py-4">أكثر أو أقل من 2.5 هدف في المباراة</td>
                    <td className="px-6 py-4 text-green-400">72%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">كلا الفريقين يسجل</td>
                    <td className="px-6 py-4">هل سيسجل كلا الفريقين في المباراة</td>
                    <td className="px-6 py-4 text-green-400">75%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">النتيجة الدقيقة</td>
                    <td className="px-6 py-4">توقع النتيجة النهائية بالتفصيل</td>
                    <td className="px-6 py-4 text-green-400">45%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">نصائح للاستفادة من التوقعات</h3>
            <p className="text-gray-300 mb-4">
              للحصول على أقصى استفادة من توقعات{" "}
              <Link href="/" className="text-green-400 hover:text-green-300">
                كورة لايف
              </Link>
              ، ننصحك باتباع هذه الإرشادات:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>اقرأ التحليل الكامل وليس فقط التوقع النهائي</li>
              <li>تابع آخر الأخبار عن الفرق واللاعبين</li>
              <li>لا تعتمد على توقع واحد فقط</li>
              <li>راجع الإحصائيات التاريخية للفريقين</li>
              <li>خذ في الاعتبار العوامل الخارجية</li>
            </ul>
          </div>
        </section>

        <section className="text-center bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">احصل على التوقعات اليومية</h2>
          <p className="text-xl text-gray-300 mb-6">
            تابع أحدث التوقعات والتحليلات على <strong>Koora Live كورة لايف</strong>
          </p>
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            شاهد التوقعات الآن
          </Link>
        </section>
      </main>
    </div>
  )
}
