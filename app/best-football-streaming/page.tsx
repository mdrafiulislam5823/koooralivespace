import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Shield, Zap, Users, Award, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "أفضل مواقع بث مباريات كرة القدم - Koora Live | كورة لايف",
  description:
    "اكتشف أفضل مواقع بث مباريات كرة القدم مع Koora Live. مقارنة شاملة لأفضل منصات كورة لايف بث مباشر بجودة عالية ومجاناً.",
  keywords: "أفضل مواقع البث, Koora Live, كورة لايف, كورة لايف بث مباشر, مواقع مشاهدة المباريات, بث مباشر مجاني",
  openGraph: {
    title: "أفضل مواقع بث مباريات كرة القدم - Koora Live",
    description: "دليل شامل لأفضل مواقع بث المباريات مع كورة لايف بث مباشر",
    images: ["/best-streaming-platforms.png"],
  },
}

const streamingPlatforms = [
  {
    name: "Koora Live - كورة لايف",
    rating: 5,
    features: ["بث مباشر مجاني", "جودة HD", "بدون إعلانات مزعجة", "دعم عربي"],
    pros: ["الأفضل للدوري السعودي", "سرعة عالية", "واجهة سهلة"],
    cons: ["يتطلب اتصال إنترنت قوي"],
    price: "مجاني",
    recommended: true,
  },
  {
    name: "منصة البث التقليدية",
    rating: 3,
    features: ["بث محدود", "جودة متوسطة", "إعلانات كثيرة", "دعم محدود"],
    pros: ["متاح على التلفزيون"],
    cons: ["مكلف", "جودة منخفضة", "إعلانات مزعجة"],
    price: "50 ريال/شهر",
    recommended: false,
  },
]

const comparisonFeatures = [
  { feature: "الجودة", kooraLive: "HD/4K", others: "SD/HD" },
  { feature: "السعر", kooraLive: "مجاني", others: "30-100 ريال" },
  { feature: "الإعلانات", kooraLive: "قليلة", others: "كثيرة" },
  { feature: "الدعم العربي", kooraLive: "ممتاز", others: "محدود" },
  { feature: "سرعة التحميل", kooraLive: "فائقة", others: "متوسطة" },
  { feature: "التوافق", kooraLive: "جميع الأجهزة", others: "محدود" },
]

export default function BestFootballStreamingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "أفضل مواقع بث مباريات كرة القدم - Koora Live",
    description: "دليل شامل لأفضل مواقع بث المباريات مع كورة لايف بث مباشر",
    author: {
      "@type": "Person",
      name: "سامي الجابر",
      url: "https://koooralive.space/author/sami-aljaber",
    },
    publisher: {
      "@type": "Organization",
      name: "Koora Live - كورة لايف",
      logo: {
        "@type": "ImageObject",
        url: "https://koooralive.space/logo.png",
      },
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              أفضل مواقع بث مباريات كرة القدم
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              دليل شامل لأفضل منصات البث مع <span className="text-[#1DB954] font-bold">Koora Live</span> - كورة لايف بث
              مباشر
            </p>
            <Image
              src="/best-streaming-platforms.png"
              alt="أفضل مواقع بث مباريات كرة القدم - Koora Live"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Platform Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              مقارنة أفضل منصات البث - <span className="text-[#1DB954]">Koora Live</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {streamingPlatforms.map((platform, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900 border-gray-800 ${platform.recommended ? "border-[#1DB954] ring-2 ring-[#1DB954]/20" : ""}`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{platform.name}</CardTitle>
                      {platform.recommended && (
                        <div className="bg-[#1DB954] text-black px-3 py-1 rounded-full text-sm font-bold">الأفضل</div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < platform.rating ? "fill-[#1DB954] text-[#1DB954]" : "text-gray-600"}`}
                        />
                      ))}
                      <span className="mr-2 text-gray-400">({platform.rating}/5)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-[#1DB954]">المميزات:</h4>
                      <ul className="space-y-1">
                        {platform.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-[#1DB954]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-green-400">الإيجابيات:</h4>
                      <ul className="space-y-1">
                        {platform.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-300">
                            • {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-red-400">السلبيات:</h4>
                      <ul className="space-y-1">
                        {platform.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-300">
                            • {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#1DB954]">{platform.price}</span>
                      {platform.recommended && (
                        <Link href="/">
                          <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold">جرب الآن</Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              مقارنة تفصيلية - <span className="text-[#1DB954]">Koora Live</span> vs المنافسين
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-[#1DB954] text-black">
                  <tr>
                    <th className="p-4 text-right">المميزة</th>
                    <th className="p-4 text-center">Koora Live</th>
                    <th className="p-4 text-center">المنافسين</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="p-4 font-semibold">{item.feature}</td>
                      <td className="p-4 text-center text-[#1DB954] font-bold">{item.kooraLive}</td>
                      <td className="p-4 text-center text-gray-400">{item.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">لماذا يعتبر Koora Live أفضل موقع لبث مباريات كرة القدم؟</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                في عالم مليء بمواقع بث مباريات كرة القدم، يبرز <strong>Koora Live - كورة لايف</strong> كالخيار الأول
                والأفضل للمشاهدين العرب. مع <strong>كورة لايف بث مباشر</strong>، نقدم تجربة مشاهدة لا مثيل لها تجمع بين
                الجودة العالية والسهولة في الاستخدام.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">معايير اختيار أفضل موقع بث مباريات</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-6 h-6 text-[#1DB954]" />
                      <h4 className="font-bold">السرعة والأداء</h4>
                    </div>
                    <p className="text-gray-300">
                      <strong>Koora Live</strong> يوفر أسرع تحميل وأقل تأخير في البث المباشر
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-[#1DB954]" />
                      <h4 className="font-bold">الأمان والموثوقية</h4>
                    </div>
                    <p className="text-gray-300">
                      حماية كاملة للمستخدمين مع <strong>كورة لايف بث مباشر</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-[#1DB954]" />
                      <h4 className="font-bold">جودة البث</h4>
                    </div>
                    <p className="text-gray-300">
                      جودة HD و 4K مع <strong>Koora Live - كورة لايف</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-[#1DB954]" />
                      <h4 className="font-bold">تجربة المستخدم</h4>
                    </div>
                    <p className="text-gray-300">واجهة سهلة ومصممة خصيصاً للمستخدم العربي</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">مميزات حصرية في Koora Live</h3>

              <ul className="list-disc list-inside space-y-3 mb-6">
                <li>
                  <strong>بث مباشر مجاني:</strong> شاهد جميع المباريات بدون رسوم اشتراك
                </li>
                <li>
                  <strong>جودة عالية:</strong> بث بجودة HD و 4K لتجربة مشاهدة مثالية
                </li>
                <li>
                  <strong>دعم عربي كامل:</strong> واجهة وتعليق باللغة العربية
                </li>
                <li>
                  <strong>تغطية شاملة:</strong> جميع مباريات الدوري السعودي والبطولات العالمية
                </li>
                <li>
                  <strong>بدون إعلانات مزعجة:</strong> مشاهدة مريحة بدون انقطاع
                </li>
                <li>
                  <strong>متوافق مع جميع الأجهزة:</strong> هاتف، تابلت، كمبيوتر، تلفزيون ذكي
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">كيفية اختيار أفضل موقع بث لك</h3>

              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li>
                  <strong>حدد احتياجاتك:</strong> ما هي البطولات التي تريد متابعتها؟
                </li>
                <li>
                  <strong>اختبر الجودة:</strong> جرب <strong>Koora Live - كورة لايف</strong> مجاناً
                </li>
                <li>
                  <strong>تحقق من السرعة:</strong> تأكد من سرعة التحميل والاستقرار
                </li>
                <li>
                  <strong>قيم تجربة المستخدم:</strong> سهولة التنقل والاستخدام
                </li>
                <li>
                  <strong>اقرأ التقييمات:</strong> آراء المستخدمين الآخرين
                </li>
              </ol>

              <div className="bg-[#1DB954]/10 border border-[#1DB954] rounded-lg p-6 mb-6">
                <h4 className="font-bold text-[#1DB954] mb-3">نصيحة الخبراء:</h4>
                <p>
                  بعد تجربة العديد من مواقع البث، يبقى <strong>Koora Live - كورة لايف</strong> الخيار الأمثل للمشاهدين
                  العرب. مع <strong>كورة لايف بث مباشر</strong>، تحصل على أفضل تجربة مشاهدة مجانية وعالية الجودة.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                لا تضيع وقتك في البحث عن مواقع أخرى. <strong>Koora Live - كورة لايف</strong> يوفر كل ما تحتاجه لمشاهدة
                مبارياتك المفضلة بأفضل جودة ومجاناً. انضم إلى ملايين المشاهدين الذين اختاروا{" "}
                <strong>كورة لايف بث مباشر</strong> كمنصتهم المفضلة.
              </p>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold px-8 py-3">
                  جرب Koora Live الآن
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
