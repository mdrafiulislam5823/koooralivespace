import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "تكلفة بث مباريات كرة القدم | Koora Live - مشاهدة مجانية بالكامل",
  description:
    "اكتشف تكلفة بث مباريات كرة القدم مع Koora Live. مشاهدة مجانية بالكامل لجميع المباريات مع كورة لايف بث مباشر بدون رسوم.",
  keywords: "تكلفة بث مباريات, Koora Live, كورة لايف, مشاهدة مجانية, بث مجاني, كورة لايف بث مباشر, مباريات مجانية",
  openGraph: {
    title: "تكلفة بث مباريات كرة القدم | Koora Live",
    description: "مشاهدة مجانية بالكامل لجميع مباريات كرة القدم مع كورة لايف",
    images: ["/streaming-costs.png"],
  },
}

export default function StreamingCostsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">تكلفة بث مباريات كرة القدم مع Koora Live</h1>
            <p className="text-xl text-gray-300 text-center mb-6">
              مشاهدة مجانية بالكامل لجميع المباريات مع كورة لايف بث مباشر
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
              src="/streaming-costs.png"
              alt="تكلفة بث مباريات كرة القدم"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">لماذا Koora Live مجاني بالكامل؟</h2>
            <p className="text-lg mb-4">
              يوفر <strong>Koora Live</strong> مشاهدة مجانية بالكامل لجميع مباريات كرة القدم. مع{" "}
              <strong>كورة لايف بث مباشر</strong>، لا تحتاج لدفع أي رسوم أو اشتراكات.
            </p>

            <div className="bg-[#1DB954] p-6 rounded-lg mb-6 text-center">
              <h3 className="text-2xl font-bold mb-2">مشاهدة مجانية 100%</h3>
              <p className="text-lg">جميع المباريات • جميع البطولات • بدون رسوم</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">بدون اشتراك</h3>
                <p>لا تحتاج لإنشاء حساب أو دفع رسوم شهرية</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">بدون إعلانات مزعجة</h3>
                <p>مشاهدة نظيفة بدون إعلانات تقطع المتعة</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">جودة عالية</h3>
                <p>بث بجودة HD و 4K مجاناً</p>
              </div>
            </div>
          </section>

          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">ابدأ المشاهدة المجانية الآن</h2>
            <p className="text-lg mb-6">
              استمتع بمشاهدة مجانية لجميع مباريات كرة القدم مع <strong>كورة لايف بث مباشر</strong>
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1DB954] text-white px-8 py-4 rounded-lg text-xl hover:bg-green-600 transition-colors"
            >
              شاهد مجاناً الآن
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
            headline: "تكلفة بث مباريات كرة القدم مع Koora Live",
            description: "مشاهدة مجانية بالكامل لجميع مباريات كرة القدم مع كورة لايف بث مباشر",
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
