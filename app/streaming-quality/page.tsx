import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "جودة بث مباريات كرة القدم | Koora Live - كورة لايف بث مباشر بأعلى جودة",
  description:
    "اكتشف أفضل جودة بث لمباريات كرة القدم مع Koora Live. مشاهدة مباريات كرة القدم بجودة HD و 4K مع كورة لايف بث مباشر بدون تقطيع.",
  keywords:
    "جودة بث مباريات كرة القدم, Koora Live, كورة لايف, بث مباشر HD, مشاهدة مباريات بجودة عالية, بث مباريات 4K, كورة لايف بث مباشر",
  openGraph: {
    title: "جودة بث مباريات كرة القدم | Koora Live",
    description: "مشاهدة مباريات كرة القدم بأعلى جودة مع كورة لايف بث مباشر",
    images: ["/streaming-quality-comparison.png"],
  },
}

export default function StreamingQualityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">جودة بث مباريات كرة القدم مع Koora Live</h1>
            <p className="text-xl text-gray-300 text-center mb-6">
              دليلك الشامل لمشاهدة مباريات كرة القدم بأعلى جودة مع كورة لايف بث مباشر
            </p>
            <div className="text-center mb-8">
              <Link
                href="/"
                className="inline-block bg-[#1DB954] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                العودة إلى كورة لايف الرئيسية
              </Link>
            </div>
          </header>

          <div className="mb-8">
            <Image
              src="/streaming-quality-comparison.png"
              alt="مقارنة جودة بث مباريات كرة القدم"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">
              لماذا تختار Koora Live لمشاهدة مباريات كرة القدم؟
            </h2>
            <p className="text-lg mb-4">
              يوفر موقع <strong>Koora Live</strong> أفضل تجربة مشاهدة لمباريات كرة القدم بجودة عالية. مع{" "}
              <strong>كورة لايف بث مباشر</strong>، يمكنك الاستمتاع بمشاهدة جميع المباريات بجودة HD و 4K بدون تقطيع أو
              تأخير.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>بث مباشر بجودة HD و 4K</li>
              <li>
                سرعة تحميل فائقة مع <strong>Koora Live</strong>
              </li>
              <li>عدم وجود تقطيع أو تأخير في البث</li>
              <li>دعم جميع الأجهزة والمتصفحات</li>
              <li>بث مجاني لجميع مباريات الدوري السعودي</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">مقارنة جودات البث المختلفة</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-600 mb-6">
                <thead>
                  <tr className="bg-[#1DB954]">
                    <th className="border border-gray-600 p-3 text-right">نوع الجودة</th>
                    <th className="border border-gray-600 p-3 text-right">الدقة</th>
                    <th className="border border-gray-600 p-3 text-right">سرعة الإنترنت المطلوبة</th>
                    <th className="border border-gray-600 p-3 text-right">التوفر في Koora Live</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-600 p-3">SD - جودة عادية</td>
                    <td className="border border-gray-600 p-3">480p</td>
                    <td className="border border-gray-600 p-3">1 ميجا/ثانية</td>
                    <td className="border border-gray-600 p-3 text-[#1DB954]">✓ متوفر</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 p-3">HD - جودة عالية</td>
                    <td className="border border-gray-600 p-3">720p</td>
                    <td className="border border-gray-600 p-3">3 ميجا/ثانية</td>
                    <td className="border border-gray-600 p-3 text-[#1DB954]">✓ متوفر</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 p-3">Full HD - جودة فائقة</td>
                    <td className="border border-gray-600 p-3">1080p</td>
                    <td className="border border-gray-600 p-3">5 ميجا/ثانية</td>
                    <td className="border border-gray-600 p-3 text-[#1DB954]">✓ متوفر</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 p-3">4K Ultra HD</td>
                    <td className="border border-gray-600 p-3">2160p</td>
                    <td className="border border-gray-600 p-3">15 ميجا/ثانية</td>
                    <td className="border border-gray-600 p-3 text-[#1DB954]">✓ متوفر</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">نصائح لتحسين جودة المشاهدة</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">تحسين الاتصال</h3>
                <ul className="space-y-2">
                  <li>• استخدم اتصال إنترنت سريع ومستقر</li>
                  <li>• أغلق التطبيقات الأخرى التي تستهلك الإنترنت</li>
                  <li>• استخدم كابل إيثرنت بدلاً من الواي فاي</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">إعدادات الجهاز</h3>
                <ul className="space-y-2">
                  <li>• استخدم متصفح محدث</li>
                  <li>• أغلق علامات التبويب الأخرى</li>
                  <li>• تأكد من وجود مساحة كافية في الذاكرة</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">الأسئلة الشائعة حول جودة البث</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#1DB954]">ما هي أفضل جودة متوفرة في Koora Live؟</h3>
                <p>
                  يوفر <strong>كورة لايف</strong> جودة 4K Ultra HD لجميع المباريات المهمة، مع إمكانية الاختيار بين جودات
                  مختلفة حسب سرعة الإنترنت لديك.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#1DB954]">لماذا يتقطع البث أحياناً؟</h3>
                <p>
                  قد يحدث تقطيع في البث بسبب بطء الإنترنت أو ازدحام الشبكة. ننصح بتقليل جودة البث أو إعادة تحديث الصفحة.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#1DB954]">هل يمكن تغيير جودة البث أثناء المشاهدة؟</h3>
                <p>
                  نعم، يمكنك تغيير جودة البث في أي وقت من خلال إعدادات المشغل في <strong>Koora Live</strong> بدون إعادة
                  تحميل الصفحة.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">ابدأ المشاهدة الآن مع Koora Live</h2>
            <p className="text-lg mb-6">
              استمتع بمشاهدة جميع مباريات كرة القدم بأعلى جودة مع <strong>كورة لايف بث مباشر</strong>
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1DB954] text-white px-8 py-4 rounded-lg text-xl hover:bg-green-600 transition-colors"
            >
              شاهد المباريات الآن
            </Link>
          </section>
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "جودة بث مباريات كرة القدم مع Koora Live",
            description: "دليل شامل لمشاهدة مباريات كرة القدم بأعلى جودة مع كورة لايف بث مباشر",
            author: {
              "@type": "Organization",
              name: "Koora Live",
            },
            publisher: {
              "@type": "Organization",
              name: "Koora Live",
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "/streaming-quality",
            },
          }),
        }}
      />
    </div>
  )
}
