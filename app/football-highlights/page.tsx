import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "ملخصات مباريات كرة القدم | Koora Live - أفضل ملخصات المباريات",
  description:
    "شاهد أفضل ملخصات مباريات كرة القدم على Koora Live كورة لايف. ملخصات حصرية للدوري السعودي والدوريات العالمية بجودة HD مجاناً",
  keywords: "ملخصات مباريات, كورة لايف, Koora Live, ملخصات كرة القدم, أهداف المباريات, ملخصات الدوري السعودي",
  openGraph: {
    title: "ملخصات مباريات كرة القدم | Koora Live",
    description: "أفضل ملخصات مباريات كرة القدم على كورة لايف",
    images: ["/football-highlights.png"],
  },
}

export default function FootballHighlights() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ملخصات مباريات كرة القدم | Koora Live",
            description: "دليل شامل لأفضل ملخصات مباريات كرة القدم",
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
            mainEntityOfPage: "https://koooralive.space/football-highlights",
          }),
        }}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            ملخصات مباريات كرة القدم
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            شاهد أفضل ملخصات مباريات كرة القدم على{" "}
            <Link href="/" className="text-green-400 hover:text-green-300">
              Koora Live كورة لايف
            </Link>
            . ملخصات حصرية وشاملة لجميع المباريات المهمة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/football-highlights.png"
              alt="ملخصات مباريات كرة القدم"
              width={600}
              height={400}
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={85}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">لماذا ملخصات Koora Live؟</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                ملخصات شاملة لجميع الأهداف واللحظات المهمة
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                جودة HD عالية لأفضل تجربة مشاهدة
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                تحديث فوري بعد انتهاء المباريات مباشرة
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                تغطية شاملة للدوري السعودي والدوريات العالمية
              </li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">أحدث ملخصات المباريات</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { team1: "الهلال", team2: "النصر", score: "2-1", highlights: "15 دقيقة" },
              { team1: "الاتحاد", team2: "الأهلي", score: "3-0", highlights: "12 دقيقة" },
              { team1: "الشباب", team2: "الفتح", score: "1-1", highlights: "10 دقائق" },
            ].map((match, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">
                    {match.team1} vs {match.team2}
                  </h3>
                  <p className="text-2xl font-bold text-green-400 my-2">{match.score}</p>
                  <p className="text-gray-400">مدة الملخص: {match.highlights}</p>
                </div>
                <Link
                  href="/"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center transition-colors"
                >
                  شاهد الملخص
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">دليل ملخصات كرة القدم الشامل</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              في عالم كرة القدم السريع، قد تفوتك مشاهدة المباريات المباشرة، لكن مع <strong>Koora Live كورة لايف</strong>
              ، لن تفوتك أي لحظة مهمة. نقدم لك أفضل ملخصات مباريات كرة القدم بجودة عالية ومحتوى شامل.
            </p>

            <h3 className="text-2xl font-bold text-green-400 mb-4">أنواع الملخصات المتوفرة</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الملخص السريع (5 دقائق)</h4>
                <p className="text-gray-300">يركز على الأهداف واللحظات الحاسمة فقط</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الملخص الشامل (15 دقيقة)</h4>
                <p className="text-gray-300">يشمل جميع الفرص والأحداث المهمة في المباراة</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">مميزات ملخصات Koora Live</h3>
            <p className="text-gray-300 mb-4">
              تتميز ملخصات{" "}
              <Link href="/" className="text-green-400 hover:text-green-300">
                كورة لايف
              </Link>{" "}
              بالجودة العالية والتحليل المتخصص. نحرص على تقديم ملخصات تحتوي على:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>جميع الأهداف من زوايا متعددة</li>
              <li>أفضل الفرص الضائعة</li>
              <li>اللحظات الجدلية والقرارات التحكيمية</li>
              <li>إحصائيات المباراة المهمة</li>
              <li>تعليق صوتي باللغة العربية</li>
            </ul>

            <h3 className="text-2xl font-bold text-green-400 mb-4">الدوريات المغطاة</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-green-600">
                  <tr>
                    <th className="px-6 py-3 text-right">الدوري</th>
                    <th className="px-6 py-3 text-right">عدد الملخصات الأسبوعية</th>
                    <th className="px-6 py-3 text-right">جودة الفيديو</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-bold">الدوري السعودي للمحترفين</td>
                    <td className="px-6 py-4">15-20 ملخص</td>
                    <td className="px-6 py-4">4K & HD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">دوري أبطال آسيا</td>
                    <td className="px-6 py-4">8-12 ملخص</td>
                    <td className="px-6 py-4">HD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">الدوري الإنجليزي الممتاز</td>
                    <td className="px-6 py-4">10-15 ملخص</td>
                    <td className="px-6 py-4">HD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">دوري أبطال أوروبا</td>
                    <td className="px-6 py-4">6-8 ملخص</td>
                    <td className="px-6 py-4">HD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">الأسئلة الشائعة حول ملخصات المباريات</h2>
          <div className="space-y-6">
            {[
              {
                question: "متى تتوفر ملخصات المباريات؟",
                answer: "تتوفر ملخصات المباريات على Koora Live كورة لايف خلال 30 دقيقة من انتهاء المباراة مباشرة.",
              },
              {
                question: "هل الملخصات مجانية؟",
                answer: "نعم، جميع ملخصات المباريات على كورة لايف مجانية تماماً ومتاحة لجميع المستخدمين.",
              },
              {
                question: "ما هي جودة الفيديو المتاحة؟",
                answer: "نوفر ملخصات بجودة HD و 4K للمباريات المهمة، مع إمكانية اختيار الجودة المناسبة لسرعة الإنترنت.",
              },
              {
                question: "هل يمكن تحميل الملخصات؟",
                answer: "حالياً لا نوفر خاصية التحميل، لكن يمكنك مشاهدة الملخصات في أي وقت من خلال موقع Koora Live.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">ابدأ مشاهدة الملخصات الآن</h2>
          <p className="text-xl text-gray-300 mb-6">
            لا تفوت أي لحظة مهمة من مباريات كرة القدم مع ملخصات <strong>Koora Live كورة لايف</strong>
          </p>
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            شاهد الملخصات الآن
          </Link>
        </section>
      </main>
    </div>
  )
}
