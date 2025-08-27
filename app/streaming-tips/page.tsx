import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "نصائح مشاهدة مباريات كرة القدم | Koora Live - أفضل النصائح للبث المباشر",
  description:
    "نصائح احترافية لمشاهدة مباريات كرة القدم مع كورة لايف. تحسين جودة البث، اختيار الجهاز المناسب، ونصائح تقنية لأفضل تجربة مشاهدة.",
  keywords: "نصائح مشاهدة المباريات, كورة لايف, Koora Live, تحسين البث المباشر, نصائح تقنية, مشاهدة مباريات كرة القدم",
  openGraph: {
    title: "نصائح مشاهدة مباريات كرة القدم | Koora Live",
    description: "نصائح احترافية لأفضل تجربة مشاهدة مباريات كرة القدم",
    images: ["/streaming-tips.png"],
  },
}

export default function StreamingTipsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">
              نصائح مشاهدة مباريات كرة القدم | <span className="text-[#1DB954]">Koora Live</span>
            </h1>
            <div className="text-center mb-6">
              <Link href="/" className="text-[#1DB954] hover:underline text-lg font-semibold">
                العودة إلى الصفحة الرئيسية - كورة لايف
              </Link>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed">
              احصل على أفضل تجربة مشاهدة مع <strong>كورة لايف (Koora Live)</strong> من خلال هذه النصائح الاحترافية. تعلم
              كيفية تحسين جودة البث المباشر والاستمتاع بمباريات الدوري السعودي والبطولات العالمية بأفضل طريقة ممكنة مع{" "}
              <strong>Koora Live</strong>.
            </p>

            <div className="text-center bg-[#1DB954] text-black p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">طبق النصائح واستمتع بالمشاهدة</h2>
              <Link
                href="/"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                ابدأ المشاهدة - Koora Live
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
