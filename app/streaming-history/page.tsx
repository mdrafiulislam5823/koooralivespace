import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تاريخ بث مباريات كرة القدم | Koora Live - تطور البث الرياضي",
  description:
    "تعرف على تاريخ وتطور بث مباريات كرة القدم مع كورة لايف. من البث التلفزيوني التقليدي إلى البث المباشر عبر الإنترنت والتقنيات الحديثة.",
  keywords: "تاريخ بث المباريات, كورة لايف, Koora Live, تطور البث الرياضي, تاريخ كرة القدم, البث المباشر, تطور التقنية",
  openGraph: {
    title: "تاريخ بث مباريات كرة القدم | Koora Live",
    description: "رحلة عبر تاريخ وتطور بث مباريات كرة القدم",
    images: ["/streaming-history.png"],
  },
}

export default function StreamingHistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">
              تاريخ بث مباريات كرة القدم | <span className="text-[#1DB954]">Koora Live</span>
            </h1>
            <div className="text-center mb-6">
              <Link href="/" className="text-[#1DB954] hover:underline text-lg font-semibold">
                العودة إلى كورة لايف - الرئيسية
              </Link>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed">
              اكتشف رحلة تطور بث مباريات كرة القدم من البدايات المتواضعة إلى عصر <strong>كورة لايف (Koora Live)</strong>
              والبث المباشر عالي الجودة. تعرف على كيف غيرت التقنيات الحديثة طريقة مشاهدة مباريات الدوري السعودي
              والبطولات العالمية مع <strong>Koora Live</strong>.
            </p>

            <div className="text-center bg-[#1DB954] text-black p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">اختبر مستقبل البث مع كورة لايف</h2>
              <Link
                href="/"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                شاهد المباريات الآن - Koora Live
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
