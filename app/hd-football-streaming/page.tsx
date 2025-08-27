import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Wifi, Settings, Play, Download, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "بث مباريات كرة القدم بجودة HD - Koora Live | كورة لايف",
  description:
    "شاهد مباريات كرة القدم بجودة HD و 4K مع Koora Live. أفضل جودة بث مباشر مجاني مع كورة لايف بث مباشر بدون تقطيع.",
  keywords: "بث HD, جودة عالية, Koora Live, كورة لايف, كورة لايف بث مباشر, 4K streaming, بث مباشر عالي الجودة",
  openGraph: {
    title: "بث مباريات كرة القدم بجودة HD - Koora Live",
    description: "أفضل جودة بث مباشر مع كورة لايف بث مباشر",
    images: ["/hd-streaming-quality.png"],
  },
}

const qualityOptions = [
  {
    name: "4K Ultra HD",
    resolution: "3840×2160",
    bitrate: "25 Mbps",
    description: "أعلى جودة متاحة مع Koora Live",
    recommended: true,
    devices: ["تلفزيون ذكي", "كمبيوتر قوي", "PlayStation 5"],
  },
  {
    name: "Full HD",
    resolution: "1920×1080",
    bitrate: "8 Mbps",
    description: "جودة ممتازة للمشاهدة العادية",
    recommended: true,
    devices: ["جميع الأجهزة", "هاتف ذكي", "تابلت"],
  },
  {
    name: "HD",
    resolution: "1280×720",
    bitrate: "5 Mbps",
    description: "جودة جيدة للإنترنت المتوسط",
    recommended: false,
    devices: ["هاتف", "إنترنت بطيء"],
  },
]

const technicalRequirements = [
  {
    quality: "4K Ultra HD",
    internet: "25 Mbps+",
    device: "تلفزيون 4K أو شاشة عالية الدقة",
    browser: "Chrome, Safari, Edge (أحدث إصدار)",
    ram: "8 GB+",
  },
  {
    quality: "Full HD",
    internet: "8 Mbps+",
    device: "أي جهاز حديث",
    browser: "أي متصفح حديث",
    ram: "4 GB+",
  },
  {
    quality: "HD",
    internet: "5 Mbps+",
    device: "أي جهاز",
    browser: "أي متصفح",
    ram: "2 GB+",
  },
]

export default function HDFootballStreamingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "بث مباريات كرة القدم بجودة HD - Koora Live",
    description: "دليل شامل لمشاهدة المباريات بأعلى جودة مع كورة لايف بث مباشر",
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
              بث مباريات كرة القدم بجودة HD
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              استمتع بأعلى جودة مشاهدة مع <span className="text-[#1DB954] font-bold">Koora Live</span> - كورة لايف بث
              مباشر
            </p>
            <Image
              src="/hd-streaming-quality.png"
              alt="بث مباريات كرة القدم بجودة HD - Koora Live"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
              quality={85}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Quality Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              خيارات الجودة المتاحة في <span className="text-[#1DB954]">Koora Live</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {qualityOptions.map((option, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900 border-gray-800 ${option.recommended ? "border-[#1DB954] ring-2 ring-[#1DB954]/20" : ""}`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{option.name}</CardTitle>
                      {option.recommended && (
                        <div className="bg-[#1DB954] text-black px-3 py-1 rounded-full text-sm font-bold">مُوصى به</div>
                      )}
                    </div>
                    <div className="text-[#1DB954] font-mono text-lg">{option.resolution}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Wifi className="w-4 h-4 text-[#1DB954]" />
                          <span className="font-semibold">سرعة الإنترنت المطلوبة:</span>
                        </div>
                        <p className="text-gray-300">{option.bitrate}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Monitor className="w-4 h-4 text-[#1DB954]" />
                          <span className="font-semibold">الأجهزة المتوافقة:</span>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {option.devices.map((device, i) => (
                            <li key={i}>• {device}</li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-gray-400 text-sm">{option.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Requirements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">المتطلبات التقنية للمشاهدة بجودة عالية</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-[#1DB954] text-black">
                  <tr>
                    <th className="p-4 text-right">الجودة</th>
                    <th className="p-4 text-center">سرعة الإنترنت</th>
                    <th className="p-4 text-center">الجهاز</th>
                    <th className="p-4 text-center">المتصفح</th>
                    <th className="p-4 text-center">الذاكرة</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalRequirements.map((req, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="p-4 font-semibold text-[#1DB954]">{req.quality}</td>
                      <td className="p-4 text-center">{req.internet}</td>
                      <td className="p-4 text-center">{req.device}</td>
                      <td className="p-4 text-center">{req.browser}</td>
                      <td className="p-4 text-center">{req.ram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              مميزات البث عالي الجودة في <span className="text-[#1DB954]">Koora Live</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <Monitor className="w-12 h-12 text-[#1DB954] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">جودة 4K Ultra HD</h3>
                  <p className="text-gray-300 text-sm">أعلى جودة متاحة مع دقة 3840×2160 بكسل</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <Play className="w-12 h-12 text-[#1DB954] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">بث مباشر بدون تأخير</h3>
                  <p className="text-gray-300 text-sm">تقنية متقدمة لضمان البث المباشر بأقل تأخير</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <Settings className="w-12 h-12 text-[#1DB954] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">جودة تكيفية</h3>
                  <p className="text-gray-300 text-sm">تتكيف الجودة تلقائياً حسب سرعة الإنترنت</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-12 h-12 text-[#1DB954] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">متوافق مع جميع الأجهزة</h3>
                  <p className="text-gray-300 text-sm">هاتف، تابلت، كمبيوتر، تلفزيون ذكي</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 text-[#1DB954] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">تحميل سريع</h3>
                  <p className="text-gray-300 text-sm">بداية سريعة للبث بأقل من 3 ثوانِ</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <Wifi className="w-12 h-12 text-[#1DB954] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">توفير في البيانات</h3>
                  <p className="text-gray-300 text-sm">تقنية ضغط متقدمة لتوفير استهلاك الإنترنت</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">دليل شامل للمشاهدة بجودة HD مع Koora Live</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                تعتبر جودة البث من أهم العوامل التي تحدد تجربة مشاهدة مباريات كرة القدم. مع{" "}
                <strong>Koora Live - كورة لايف</strong>، نقدم أعلى جودة بث متاحة في العالم العربي.{" "}
                <strong>كورة لايف بث مباشر</strong> يضمن لك مشاهدة مبارياتك المفضلة بجودة HD و 4K Ultra HD بدون تقطيع أو
                تأخير.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">لماذا تختار البث عالي الجودة؟</h3>

              <ul className="list-disc list-inside space-y-3 mb-6">
                <li>
                  <strong>وضوح أكبر:</strong> رؤية تفاصيل اللعب والحركات بدقة عالية
                </li>
                <li>
                  <strong>ألوان حية:</strong> ألوان طبيعية وواقعية للملعب واللاعبين
                </li>
                <li>
                  <strong>تجربة سينمائية:</strong> شعور وكأنك في الملعب
                </li>
                <li>
                  <strong>تفاصيل دقيقة:</strong> رؤية أرقام اللاعبين وتعبيرات الوجوه
                </li>
                <li>
                  <strong>مشاهدة مريحة:</strong> أقل إجهاد للعين مع الجودة العالية
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">كيفية الحصول على أفضل جودة مع Koora Live</h3>

              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li>
                  <strong>تحقق من سرعة الإنترنت:</strong> تأكد من أن لديك سرعة كافية (8 Mbps للـ HD)
                </li>
                <li>
                  <strong>استخدم متصفح حديث:</strong> Chrome أو Safari أو Edge أحدث إصدار
                </li>
                <li>
                  <strong>أغلق التطبيقات الأخرى:</strong> لتوفير موارد الجهاز للبث
                </li>
                <li>
                  <strong>اتصل بشبكة Wi-Fi مستقرة:</strong> تجنب شبكات الهاتف المحمول للجودة العالية
                </li>
                <li>
                  <strong>اختر الجودة المناسبة:</strong> <strong>Koora Live</strong> يختار تلقائياً أو يمكنك التحكم يدوياً
                </li>
              </ol>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">مقارنة جودات البث المختلفة</h3>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-4">4K Ultra HD (الأفضل)</h4>
                <ul className="space-y-2 mb-4">
                  <li>• دقة: 3840×2160 بكسل</li>
                  <li>• أفضل للشاشات الكبيرة (+55 بوصة)</li>
                  <li>• يتطلب إنترنت سريع (25+ Mbps)</li>
                  <li>• تجربة سينمائية حقيقية</li>
                </ul>

                <h4 className="font-bold mb-4">Full HD (مُوصى به)</h4>
                <ul className="space-y-2 mb-4">
                  <li>• دقة: 1920×1080 بكسل</li>
                  <li>• مثالي لمعظم الشاشات</li>
                  <li>• يتطلب إنترنت متوسط (8+ Mbps)</li>
                  <li>• توازن مثالي بين الجودة والأداء</li>
                </ul>

                <h4 className="font-bold mb-4">HD (للإنترنت البطيء)</h4>
                <ul className="space-y-2">
                  <li>• دقة: 1280×720 بكسل</li>
                  <li>• مناسب للهواتف والتابلت</li>
                  <li>• يعمل مع إنترنت بطيء (5+ Mbps)</li>
                  <li>• جودة جيدة مع استهلاك أقل للبيانات</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">نصائح لتحسين جودة المشاهدة</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-[#1DB954]">للكمبيوتر والتلفزيون الذكي:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• استخدم كابل إيثرنت بدلاً من Wi-Fi</li>
                    <li>• أغلق التطبيقات غير المستخدمة</li>
                    <li>• تأكد من تحديث المتصفح</li>
                    <li>• استخدم وضع ملء الشاشة</li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-[#1DB954]">للهاتف والتابلت:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• اتصل بشبكة Wi-Fi قوية</li>
                    <li>• أغلق التطبيقات الأخرى</li>
                    <li>• استخدم الوضع الأفقي للمشاهدة</li>
                    <li>• تأكد من شحن البطارية</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#1DB954]/10 border border-[#1DB954] rounded-lg p-6 mb-6">
                <h4 className="font-bold text-[#1DB954] mb-3">تقنية حصرية في Koora Live:</h4>
                <p>
                  نستخدم تقنية الجودة التكيفية (Adaptive Bitrate) التي تضبط جودة البث تلقائياً حسب سرعة الإنترنت لديك.
                  هذا يضمن مشاهدة مستمرة بدون تقطيع مع أفضل جودة ممكنة في كل لحظة.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                مع <strong>Koora Live - كورة لايف</strong>، تحصل على أفضل تجربة مشاهدة بجودة HD و 4K مجاناً.
                <strong>كورة لايف بث مباشر</strong> يستخدم أحدث التقنيات لضمان وصول أعلى جودة إلى جهازك، مهما كانت سرعة
                الإنترنت لديك. جرب الآن واستمتع بمشاهدة مبارياتك المفضلة بجودة سينمائية.
              </p>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold px-8 py-3">
                  شاهد بجودة HD الآن
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
