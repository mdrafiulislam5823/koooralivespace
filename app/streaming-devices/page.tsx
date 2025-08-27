import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "أجهزة بث مباريات كرة القدم | Koora Live - أفضل الأجهزة للمشاهدة",
  description:
    "دليل شامل لأفضل أجهزة بث مباريات كرة القدم مع كورة لايف. تعرف على أفضل الأجهزة الذكية، التلفزيونات، والهواتف لمشاهدة مباريات الدوري السعودي.",
  keywords: "أجهزة بث المباريات, كورة لايف, Koora Live, أجهزة ذكية, تلفزيون ذكي, مشاهدة المباريات, أجهزة البث المباشر",
  openGraph: {
    title: "أجهزة بث مباريات كرة القدم | Koora Live",
    description: "أفضل الأجهزة لمشاهدة مباريات كرة القدم بجودة عالية",
    images: ["/streaming-devices.png"],
  },
}

export default function StreamingDevicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">
              أجهزة بث مباريات كرة القدم | <span className="text-[#1DB954]">Koora Live</span>
            </h1>
            <div className="text-center mb-6">
              <Link href="/" className="text-[#1DB954] hover:underline text-lg font-semibold">
                العودة إلى كورة لايف الرئيسية
              </Link>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed">
              <strong>كورة لايف (Koora Live)</strong> متوافق مع جميع الأجهزة الذكية لضمان أفضل تجربة مشاهدة لمباريات كرة
              القدم. اكتشف أفضل الأجهزة للاستمتاع بمباريات الدوري السعودي والبطولات العالمية مع{" "}
              <strong>Koora Live</strong> بأعلى جودة ممكنة.
            </p>

            <div className="text-center bg-[#1DB954] text-black p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">ابدأ المشاهدة على جهازك المفضل</h2>
              <Link
                href="/"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                شاهد الآن - Koora Live
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
