import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "حل مشاكل بث مباريات كرة القدم | Koora Live - دعم فني شامل",
  description:
    "تعلم كيفية حل مشاكل بث مباريات كرة القدم مع Koora Live. دليل شامل لحل جميع المشاكل التقنية مع كورة لايف بث مباشر.",
  keywords: "حل مشاكل البث, Koora Live, كورة لايف, مشاكل تقنية, دعم فني, كورة لايف بث مباشر, استكشاف الأخطاء",
  openGraph: {
    title: "حل مشاكل بث مباريات كرة القدم | Koora Live",
    description: "دليل شامل لحل جميع مشاكل البث مع كورة لايف",
    images: ["/streaming-troubleshooting.png"],
  },
}

export default function StreamingTroubleshootingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">حل مشاكل بث مباريات كرة القدم مع Koora Live</h1>
            <p className="text-xl text-gray-300 text-center mb-6">
              دليل شامل لحل جميع المشاكل التقنية مع كورة لايف بث مباشر
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
              src="/streaming-troubleshooting.png"
              alt="حل مشاكل بث مباريات كرة القدم"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">المشاكل الشائعة وحلولها</h2>

            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">مشكلة: البث لا يعمل أو لا يظهر</h3>
                <div className="space-y-2">
                  <p>
                    <strong>الحل 1:</strong> تأكد من اتصال الإنترنت
                  </p>
                  <p>
                    <strong>الحل 2:</strong> أعد تحديث الصفحة (F5)
                  </p>
                  <p>
                    <strong>الحل 3:</strong> امسح ذاكرة التخزين المؤقت للمتصفح
                  </p>
                  <p>
                    <strong>الحل 4:</strong> جرب متصفح آخر
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">مشكلة: البث يتقطع أو يتوقف</h3>
                <div className="space-y-2">
                  <p>
                    <strong>الحل 1:</strong> قلل جودة البث إلى HD أو SD
                  </p>
                  <p>
                    <strong>الحل 2:</strong> أغلق التطبيقات الأخرى التي تستهلك الإنترنت
                  </p>
                  <p>
                    <strong>الحل 3:</strong> استخدم كابل إيثرنت بدلاً من الواي فاي
                  </p>
                  <p>
                    <strong>الحل 4:</strong> تأكد من سرعة الإنترنت (5 ميجا على الأقل)
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">مشكلة: الصوت لا يعمل</h3>
                <div className="space-y-2">
                  <p>
                    <strong>الحل 1:</strong> تأكد من عدم كتم الصوت في المشغل
                  </p>
                  <p>
                    <strong>الحل 2:</strong> تحقق من إعدادات الصوت في الجهاز
                  </p>
                  <p>
                    <strong>الحل 3:</strong> أعد تشغيل المتصفح
                  </p>
                  <p>
                    <strong>الحل 4:</strong> جرب سماعات أو مكبرات صوت أخرى
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">مشكلة: الصورة غير واضحة أو مشوشة</h3>
                <div className="space-y-2">
                  <p>
                    <strong>الحل 1:</strong> ارفع جودة البث إلى HD أو 4K
                  </p>
                  <p>
                    <strong>الحل 2:</strong> تأكد من سرعة الإنترنت الكافية
                  </p>
                  <p>
                    <strong>الحل 3:</strong> أعد تحديث الصفحة
                  </p>
                  <p>
                    <strong>الحل 4:</strong> تحقق من إعدادات الشاشة
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">نصائح لتحسين الأداء</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">للكمبيوتر</h3>
                <ul className="space-y-2">
                  <li>• استخدم Chrome أو Firefox المحدث</li>
                  <li>• أغلق علامات التبويب الأخرى</li>
                  <li>• تأكد من وجود ذاكرة كافية</li>
                  <li>• استخدم اتصال سلكي</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">للجوال</h3>
                <ul className="space-y-2">
                  <li>• استخدم واي فاي بدلاً من البيانات</li>
                  <li>• أغلق التطبيقات الأخرى</li>
                  <li>• تأكد من شحن البطارية</li>
                  <li>• استخدم وضع الشاشة الكاملة</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">لا تزال تواجه مشاكل؟</h2>
            <p className="text-lg mb-6">
              جرب <strong>كورة لايف بث مباشر</strong> مرة أخرى أو تواصل معنا للمساعدة
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1DB954] text-white px-8 py-4 rounded-lg text-xl hover:bg-green-600 transition-colors"
            >
              العودة للمشاهدة
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
            headline: "حل مشاكل بث مباريات كرة القدم مع Koora Live",
            description: "دليل شامل لحل جميع المشاكل التقنية مع كورة لايف بث مباشر",
            author: {
              "@type": "Organization",
              name: "Koora Live",
            },
          }),
        }}
      />
    </div>
  )
}
