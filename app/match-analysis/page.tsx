import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تحليل مباريات كرة القدم | Koora Live - تحليل احترافي للمباريات المباشرة",
  description:
    "تحليل احترافي لمباريات كرة القدم مع كورة لايف. إحصائيات مفصلة، تحليل تكتيكي، وتوقعات المباريات للدوري السعودي والبطولات العالمية.",
  keywords:
    "تحليل مباريات كرة القدم, كورة لايف, Koora Live, إحصائيات المباريات, تحليل تكتيكي, توقعات المباريات, تحليل الدوري السعودي",
  openGraph: {
    title: "تحليل مباريات كرة القدم | Koora Live",
    description: "تحليل احترافي وإحصائيات مفصلة لمباريات كرة القدم",
    images: ["/match-analysis.png"],
  },
}

export default function MatchAnalysisPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">
              تحليل مباريات كرة القدم | <span className="text-[#1DB954]">Koora Live</span>
            </h1>
            <div className="text-center mb-6">
              <Link href="/" className="text-[#1DB954] hover:underline text-lg font-semibold">
                العودة إلى كورة لايف - الصفحة الرئيسية
              </Link>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed">
              <strong>كورة لايف (Koora Live)</strong> يقدم تحليلاً احترافياً شاملاً لمباريات كرة القدم مع إحصائيات مفصلة
              وتحليل تكتيكي عميق لجميع مباريات الدوري السعودي والبطولات العالمية. منصة <strong>Koora Live</strong>
              تجمع بين البث المباشر والتحليل الاحترافي لتقديم تجربة مشاهدة متكاملة.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#1DB954]">أنواع التحليل في كورة لايف</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#1DB954]">التحليل التكتيكي</h3>
                <p>تحليل عميق لتكتيكات الفرق وخطط اللعب في مباريات الدوري السعودي.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#1DB954]">الإحصائيات المتقدمة</h3>
                <p>إحصائيات شاملة للاعبين والفرق مع مقارنات تفصيلية.</p>
              </div>
            </div>

            <div className="text-center bg-[#1DB954] text-black p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">شاهد وحلل مع كورة لايف</h2>
              <Link
                href="/"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                ابدأ المشاهدة والتحليل - Koora Live
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
