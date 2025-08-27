import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "أمان بث مباريات كرة القدم | Koora Live - مشاهدة آمنة ومحمية",
  description:
    "تعرف على أمان وحماية بث مباريات كرة القدم مع Koora Live. مشاهدة آمنة ومحمية لجميع المباريات مع كورة لايف بث مباشر.",
  keywords: "أمان بث مباريات, Koora Live, كورة لايف, مشاهدة آمنة, حماية البيانات, بث محمي, كورة لايف بث مباشر",
  openGraph: {
    title: "أمان بث مباريات كرة القدم | Koora Live",
    description: "مشاهدة آمنة ومحمية لجميع مباريات كرة القدم مع كورة لايف",
    images: ["/streaming-security.png"],
  },
}

export default function StreamingSecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">أمان وحماية بث مباريات كرة القدم مع Koora Live</h1>
            <p className="text-xl text-gray-300 text-center mb-6">
              دليلك الشامل للمشاهدة الآمنة والمحمية مع كورة لايف بث مباشر
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
              src="/streaming-security.png"
              alt="أمان بث مباريات كرة القدم"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">لماذا الأمان مهم في بث مباريات كرة القدم؟</h2>
            <p className="text-lg mb-4">
              يضمن <strong>Koora Live</strong> أعلى مستويات الأمان والحماية لجميع المستخدمين. مع{" "}
              <strong>كورة لايف بث مباشر</strong>، تحصل على تجربة مشاهدة آمنة ومحمية بالكامل.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">حماية البيانات</h3>
                <ul className="space-y-2">
                  <li>• تشفير SSL للحماية الكاملة</li>
                  <li>• عدم تخزين البيانات الشخصية</li>
                  <li>• حماية من البرمجيات الخبيثة</li>
                  <li>• خصوصية كاملة للمستخدمين</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">أمان التصفح</h3>
                <ul className="space-y-2">
                  <li>• عدم وجود إعلانات مشبوهة</li>
                  <li>• حماية من النوافذ المنبثقة</li>
                  <li>• فحص دوري للأمان</li>
                  <li>• سرعة وأمان في التحميل</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">شاهد بأمان مع Koora Live</h2>
            <p className="text-lg mb-6">
              استمتع بمشاهدة آمنة ومحمية لجميع مباريات كرة القدم مع <strong>كورة لايف بث مباشر</strong>
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1DB954] text-white px-8 py-4 rounded-lg text-xl hover:bg-green-600 transition-colors"
            >
              ابدأ المشاهدة الآمنة
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
            headline: "أمان وحماية بث مباريات كرة القدم مع Koora Live",
            description: "دليل شامل للمشاهدة الآمنة والمحمية مع كورة لايف بث مباشر",
            author: {
              "@type": "Organization",
              name: "Koora Live",
            },
            publisher: {
              "@type": "Organization",
              name: "Koora Live",
            },
          }),
        }}
      />
    </div>
  )
}
