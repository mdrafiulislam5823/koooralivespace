import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Shield, Star, Users, Zap, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "مشاهدة مباريات كرة القدم مجاناً - Koora Live | كورة لايف",
  description:
    "شاهد مباريات كرة القدم مجاناً بجودة عالية مع Koora Live. أفضل موقع كورة لايف بث مباشر مجاني بدون اشتراك أو رسوم.",
  keywords: "مشاهدة مجانية, بث مجاني, Koora Live, كورة لايف, كورة لايف بث مباشر, مباريات مجانية, بدون اشتراك",
  openGraph: {
    title: "مشاهدة مباريات كرة القدم مجاناً - Koora Live",
    description: "أفضل موقع بث مجاني مع كورة لايف بث مباشر",
    images: ["/free-streaming-concept.png"],
  },
}

const freeFeatures = [
  {
    icon: Gift,
    title: "مجاني 100%",
    description: "لا توجد رسوم اشتراك أو رسوم خفية",
    highlight: true,
  },
  {
    icon: Shield,
    title: "آمن وموثوق",
    description: "حماية كاملة للمستخدمين بدون برامج ضارة",
    highlight: false,
  },
  {
    icon: Star,
    title: "جودة عالية",
    description: "بث HD و 4K مجاناً",
    highlight: true,
  },
  {
    icon: Users,
    title: "بدون تسجيل",
    description: "شاهد فوراً بدون إنشاء حساب",
    highlight: false,
  },
  {
    icon: Zap,
    title: "سرعة فائقة",
    description: "تحميل سريع وبث مستقر",
    highlight: true,
  },
  {
    icon: CheckCircle,
    title: "بدون إعلانات مزعجة",
    description: "مشاهدة مريحة بأقل إعلانات ممكنة",
    highlight: false,
  },
]

const competitorComparison = [
  {
    platform: "Koora Live - كورة لايف",
    price: "مجاني",
    quality: "HD/4K",
    ads: "قليلة",
    registration: "غير مطلوب",
    coverage: "شاملة",
    rating: 5,
  },
  {
    platform: "المنصات المدفوعة",
    price: "50-200 ريال/شهر",
    quality: "HD",
    ads: "بدون إعلانات",
    registration: "مطلوب",
    coverage: "محدودة",
    rating: 3,
  },
  {
    platform: "المواقع المجانية الأخرى",
    price: "مجاني",
    quality: "SD/HD",
    ads: "كثيرة جداً",
    registration: "أحياناً",
    coverage: "متغيرة",
    rating: 2,
  },
]

export default function FreeFootballStreamingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "مشاهدة مباريات كرة القدم مجاناً - Koora Live",
    description: "دليل شامل للمشاهدة المجانية مع كورة لايف بث مباشر",
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
              مشاهدة مباريات كرة القدم مجاناً
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              استمتع بأفضل المباريات مجاناً مع <span className="text-[#1DB954] font-bold">Koora Live</span> - كورة لايف
              بث مباشر
            </p>
            <Image
              src="/free-streaming-concept.png"
              alt="مشاهدة مباريات كرة القدم مجاناً - Koora Live"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Free Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              لماذا <span className="text-[#1DB954]">Koora Live</span> الأفضل للمشاهدة المجانية؟
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {freeFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900 border-gray-800 ${feature.highlight ? "border-[#1DB954] ring-2 ring-[#1DB954]/20" : ""}`}
                >
                  <CardContent className="p-6 text-center">
                    <feature.icon
                      className={`w-12 h-12 mx-auto mb-4 ${feature.highlight ? "text-[#1DB954]" : "text-gray-400"}`}
                    />
                    <h3 className="font-bold mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              مقارنة <span className="text-[#1DB954]">Koora Live</span> مع المنافسين
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-[#1DB954] text-black">
                  <tr>
                    <th className="p-4 text-right">المنصة</th>
                    <th className="p-4 text-center">السعر</th>
                    <th className="p-4 text-center">الجودة</th>
                    <th className="p-4 text-center">الإعلانات</th>
                    <th className="p-4 text-center">التسجيل</th>
                    <th className="p-4 text-center">التغطية</th>
                    <th className="p-4 text-center">التقييم</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((platform, index) => (
                    <tr key={index} className={`border-b border-gray-800 ${index === 0 ? "bg-[#1DB954]/10" : ""}`}>
                      <td className={`p-4 font-semibold ${index === 0 ? "text-[#1DB954]" : ""}`}>
                        {platform.platform}
                      </td>
                      <td className="p-4 text-center">{platform.price}</td>
                      <td className="p-4 text-center">{platform.quality}</td>
                      <td className="p-4 text-center">{platform.ads}</td>
                      <td className="p-4 text-center">{platform.registration}</td>
                      <td className="p-4 text-center">{platform.coverage}</td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < platform.rating ? "fill-[#1DB954] text-[#1DB954]" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Watch Free */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              كيفية المشاهدة المجانية مع <span className="text-[#1DB954]">Koora Live</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1DB954] text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-bold mb-2">ادخل إلى الموقع</h3>
                  <p className="text-gray-300 text-sm">زر موقع Koora Live مباشرة</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1DB954] text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-bold mb-2">اختر المباراة</h3>
                  <p className="text-gray-300 text-sm">تصفح المباريات المتاحة</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1DB954] text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-bold mb-2">اضغط "شاهد مباشرة"</h3>
                  <p className="text-gray-300 text-sm">بدء المشاهدة فوراً</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1DB954] text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-bold mb-2">استمتع بالمشاهدة</h3>
                  <p className="text-gray-300 text-sm">مشاهدة مجانية بجودة عالية</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">دليل شامل للمشاهدة المجانية مع Koora Live</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                في عصر الاشتراكات المكلفة والرسوم الشهرية، يبرز <strong>Koora Live - كورة لايف</strong> كالحل الأمثل
                للمشاهدة المجانية. مع <strong>كورة لايف بث مباشر</strong>، يمكنك الاستمتاع بجميع مباريات كرة القدم بجودة
                عالية ومجاناً تماماً، بدون أي رسوم أو اشتراكات.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">لماذا المشاهدة المجانية مع Koora Live؟</h3>

              <ul className="list-disc list-inside space-y-3 mb-6">
                <li>
                  <strong>توفير المال:</strong> لا حاجة لدفع رسوم اشتراك شهرية مكلفة
                </li>
                <li>
                  <strong>سهولة الوصول:</strong> مشاهدة فورية بدون تسجيل أو إنشاء حساب
                </li>
                <li>
                  <strong>جودة ممتازة:</strong> بث HD و 4K مجاناً
                </li>
                <li>
                  <strong>تغطية شاملة:</strong> جميع مباريات الدوري السعودي والبطولات العالمية
                </li>
                <li>
                  <strong>مرونة كاملة:</strong> شاهد متى وأين تريد
                </li>
                <li>
                  <strong>بدون التزامات:</strong> لا توجد عقود أو فترات اشتراك
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">
                كيف يمكن لـ Koora Live تقديم خدمة مجانية عالية الجودة؟
              </h3>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <p className="mb-4">
                  <strong>Koora Live - كورة لايف</strong> يعتمد على نموذج عمل مبتكر يجمع بين:
                </p>
                <ul className="space-y-2">
                  <li>
                    • <strong>إعلانات غير مزعجة:</strong> عدد قليل من الإعلانات المختارة بعناية
                  </li>
                  <li>
                    • <strong>شراكات استراتيجية:</strong> تعاون مع منصات البث الرسمية
                  </li>
                  <li>
                    • <strong>تقنية متقدمة:</strong> خوادم قوية وتقنية ضغط فعالة
                  </li>
                  <li>
                    • <strong>حجم المستخدمين:</strong> ملايين المشاهدين يقللون التكلفة الفردية
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">
                مقارنة التكاليف: Koora Live vs المنصات المدفوعة
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-[#1DB954]/10 border border-[#1DB954]">
                  <CardHeader>
                    <CardTitle className="text-[#1DB954]">Koora Live - مجاني</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">0 ريال</div>
                    <ul className="text-sm space-y-1">
                      <li>✓ جميع المباريات</li>
                      <li>✓ جودة HD/4K</li>
                      <li>✓ بدون تسجيل</li>
                      <li>✓ جميع الأجهزة</li>
                      <li>✓ دعم عربي</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>المنصات المدفوعة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">50-200 ريال/شهر</div>
                    <ul className="text-sm space-y-1">
                      <li>✓ مباريات محدودة</li>
                      <li>✓ جودة HD</li>
                      <li>✗ يتطلب تسجيل</li>
                      <li>✓ معظم الأجهزة</li>
                      <li>✗ دعم محدود</li>
                    </ul>
                    <div className="mt-4 text-red-400 text-sm">التكلفة السنوية: 600-2400 ريال</div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">نصائح لأفضل تجربة مشاهدة مجانية</h3>

              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li>
                  <strong>استخدم إنترنت مستقر:</strong> للحصول على أفضل جودة بث
                </li>
                <li>
                  <strong>أغلق التطبيقات الأخرى:</strong> لتوفير موارد الجهاز
                </li>
                <li>
                  <strong>استخدم متصفح محدث:</strong> لأفضل أداء وأمان
                </li>
                <li>
                  <strong>فعل مانع الإعلانات المناسب:</strong> لتجربة أفضل (لكن دع بعض الإعلانات لدعم الموقع)
                </li>
                <li>
                  <strong>شارك مع الأصدقاء:</strong> كلما زاد عدد المستخدمين، تحسنت الخدمة
                </li>
              </ol>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">الأسئلة الشائعة حول المشاهدة المجانية</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-bold mb-2">هل المشاهدة مجانية حقاً؟</h4>
                  <p className="text-gray-300">
                    نعم، <strong>Koora Live - كورة لايف</strong> مجاني 100% بدون رسوم خفية أو اشتراكات.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-bold mb-2">هل أحتاج لإنشاء حساب؟</h4>
                  <p className="text-gray-300">لا، يمكنك المشاهدة فوراً بدون تسجيل أو إنشاء حساب.</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-bold mb-2">ما هي جودة البث المجاني؟</h4>
                  <p className="text-gray-300">نقدم جودة HD و 4K مجاناً، تماماً مثل المنصات المدفوعة.</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-bold mb-2">هل الموقع آمن؟</h4>
                  <p className="text-gray-300">
                    نعم، <strong>كورة لايف بث مباشر</strong> آمن تماماً ولا يحتوي على برامج ضارة.
                  </p>
                </div>
              </div>

              <div className="bg-[#1DB954]/10 border border-[#1DB954] rounded-lg p-6 mb-6">
                <h4 className="font-bold text-[#1DB954] mb-3">لماذا نقدم خدمة مجانية؟</h4>
                <p>
                  نؤمن في <strong>Koora Live - كورة لايف</strong> أن كرة القدم حق للجميع. هدفنا هو جعل أفضل المباريات
                  متاحة لكل محبي الكرة في العالم العربي، بغض النظر عن قدرتهم المالية. مع{" "}
                  <strong>كورة لايف بث مباشر</strong>، نحقق هذا الحلم يومياً.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                لا تدع التكاليف المرتفعة تمنعك من متابعة مبارياتك المفضلة. مع <strong>Koora Live - كورة لايف</strong>،
                تحصل على أفضل تجربة مشاهدة مجانية بجودة عالية. <strong>كورة لايف بث مباشر</strong> يضمن لك الوصول إلى
                جميع المباريات المهمة بدون أي تكلفة. ابدأ المشاهدة الآن واستمتع بكرة القدم كما يجب أن تكون - مجانية
                للجميع.
              </p>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold px-8 py-3">
                  ابدأ المشاهدة المجانية الآن
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
