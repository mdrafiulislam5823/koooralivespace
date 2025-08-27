import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, Settings, Smartphone, Monitor, Wifi } from "lucide-react"

export const metadata: Metadata = {
  title: "دليل بث مباريات كرة القدم الشامل - Koora Live | كورة لايف",
  description:
    "دليل شامل لبث مباريات كرة القدم مع Koora Live. تعلم كيفية المشاهدة بأفضل جودة مع كورة لايف بث مباشر خطوة بخطوة.",
  keywords: "دليل البث, كيفية المشاهدة, Koora Live, كورة لايف, كورة لايف بث مباشر, شرح المشاهدة, دليل المستخدم",
  openGraph: {
    title: "دليل بث مباريات كرة القدم الشامل - Koora Live",
    description: "دليل شامل للمشاهدة مع كورة لايف بث مباشر",
    images: ["/streaming-guide-tutorial.png"],
  },
}

const guideSteps = [
  {
    step: 1,
    title: "الوصول إلى الموقع",
    description: "ادخل إلى موقع Koora Live من أي متصفح",
    details: ["افتح المتصفح المفضل لديك", "اكتب عنوان الموقع", "انتظر تحميل الصفحة الرئيسية"],
    icon: Monitor,
  },
  {
    step: 2,
    title: "اختيار المباراة",
    description: "تصفح المباريات المتاحة واختر ما تريد مشاهدته",
    details: ["تصفح قائمة المباريات الحية", "اقرأ معلومات المباراة", "تحقق من جودة البث المتاحة"],
    icon: Play,
  },
  {
    step: 3,
    title: "ضبط الإعدادات",
    description: "اختر الجودة المناسبة وضبط الصوت",
    details: ["اختر جودة البث (HD/4K)", "ضبط مستوى الصوت", "فعل وضع ملء الشاشة إذا رغبت"],
    icon: Settings,
  },
  {
    step: 4,
    title: "بدء المشاهدة",
    description: "استمتع بمشاهدة المباراة بأفضل جودة",
    details: ["اضغط زر التشغيل", "استمتع بالبث المباشر", "استخدم أزرار التحكم حسب الحاجة"],
    icon: BookOpen,
  },
]

const deviceGuides = [
  {
    device: "الكمبيوتر والتلفزيون الذكي",
    icon: Monitor,
    requirements: ["متصفح حديث (Chrome, Safari, Edge)", "إنترنت 8+ Mbps للـ HD", "شاشة HD أو أعلى"],
    steps: [
      "افتح المتصفح وادخل إلى Koora Live",
      "اختر المباراة من الصفحة الرئيسية",
      'اضغط "شاهد مباشرة" باللون الأخضر',
      "اختر الجودة المناسبة من إعدادات المشغل",
      "استمتع بالمشاهدة بملء الشاشة",
    ],
  },
  {
    device: "الهاتف والتابلت",
    icon: Smartphone,
    requirements: ["متصفح الهاتف أو التطبيق", "إنترنت Wi-Fi مستقر", "مساحة تخزين كافية"],
    steps: [
      "افتح متصفح الهاتف أو التطبيق",
      "ادخل إلى موقع Koora Live",
      "اختر المباراة المطلوبة",
      'اضغط "شاهد مباشرة"',
      "استخدم الوضع الأفقي للمشاهدة الأمثل",
    ],
  },
]

const troubleshooting = [
  {
    problem: "البث لا يعمل أو يتقطع",
    solutions: [
      "تحقق من سرعة الإنترنت (يجب أن تكون 5+ Mbps)",
      "أغلق التطبيقات الأخرى التي تستهلك الإنترنت",
      "جرب تحديث الصفحة أو إعادة تشغيل المتصفح",
      "اختر جودة أقل إذا كان الإنترنت بطيء",
    ],
  },
  {
    problem: "الصوت لا يعمل",
    solutions: [
      "تأكد من أن الصوت غير مكتوم في المشغل",
      "تحقق من إعدادات الصوت في الجهاز",
      "جرب تحديث الصفحة",
      "تأكد من أن المتصفح لديه إذن تشغيل الصوت",
    ],
  },
  {
    problem: "الجودة منخفضة",
    solutions: [
      "تحقق من سرعة الإنترنت",
      "اختر جودة أعلى من إعدادات المشغل",
      "استخدم اتصال Wi-Fi بدلاً من بيانات الهاتف",
      "أغلق التطبيقات الأخرى",
    ],
  },
]

export default function FootballStreamingGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "دليل بث مباريات كرة القدم مع Koora Live",
    description: "دليل شامل خطوة بخطوة لمشاهدة مباريات كرة القدم مع كورة لايف بث مباشر",
    image: "/streaming-guide-tutorial.png",
    totalTime: "PT5M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "جهاز كمبيوتر أو هاتف ذكي",
      },
      {
        "@type": "HowToSupply",
        name: "اتصال إنترنت مستقر",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "متصفح إنترنت حديث",
      },
    ],
    step: guideSteps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
      image: "/streaming-guide-tutorial.png",
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              دليل بث مباريات كرة القدم الشامل
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              تعلم كيفية المشاهدة بأفضل جودة مع <span className="text-[#1DB954] font-bold">Koora Live</span> - كورة لايف
              بث مباشر
            </p>
            <Image
              src="/streaming-guide-tutorial.png"
              alt="دليل بث مباريات كرة القدم - Koora Live"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Step by Step Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              دليل المشاهدة خطوة بخطوة مع <span className="text-[#1DB954]">Koora Live</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {guideSteps.map((step, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#1DB954] text-black rounded-full flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <step.icon className="w-8 h-8 text-[#1DB954] mt-1 flex-shrink-0" />
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="text-gray-300 text-sm">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Device Specific Guides */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">دليل المشاهدة حسب الجهاز</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {deviceGuides.map((guide, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <guide.icon className="w-8 h-8 text-[#1DB954]" />
                      <CardTitle className="text-xl">{guide.device}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-[#1DB954]">المتطلبات:</h4>
                      <ul className="space-y-1">
                        {guide.requirements.map((req, i) => (
                          <li key={i} className="text-gray-300 text-sm">
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-[#1DB954]">خطوات المشاهدة:</h4>
                      <ol className="space-y-2">
                        {guide.steps.map((step, i) => (
                          <li key={i} className="text-gray-300 text-sm">
                            <span className="text-[#1DB954] font-bold">{i + 1}.</span> {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">حل المشاكل الشائعة</h2>
            <div className="space-y-6">
              {troubleshooting.map((issue, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-400">{issue.problem}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-3 text-[#1DB954]">الحلول:</h4>
                    <ul className="space-y-2">
                      {issue.solutions.map((solution, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#1DB954] font-bold">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">دليل شامل لأفضل تجربة مشاهدة مع Koora Live</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                مشاهدة مباريات كرة القدم أصبحت أسهل من أي وقت مضى مع <strong>Koora Live - كورة لايف</strong>. هذا الدليل
                الشامل سيأخذك خطوة بخطوة لتحصل على أفضل تجربة مشاهدة مع <strong>كورة لايف بث مباشر</strong>، سواء كنت
                مبتدئاً أو خبيراً في عالم البث المباشر.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">لماذا تحتاج دليل للمشاهدة؟</h3>

              <ul className="list-disc list-inside space-y-3 mb-6">
                <li>
                  <strong>تحسين الجودة:</strong> احصل على أفضل جودة ممكنة حسب إمكانيات جهازك
                </li>
                <li>
                  <strong>توفير البيانات:</strong> تعلم كيفية مشاهدة بكفاءة أكبر
                </li>
                <li>
                  <strong>حل المشاكل:</strong> تجنب المشاكل الشائعة قبل حدوثها
                </li>
                <li>
                  <strong>استخدام جميع المميزات:</strong> استفد من كل ما يقدمه <strong>Koora Live</strong>
                </li>
                <li>
                  <strong>مشاهدة آمنة:</strong> تعلم أفضل الممارسات للمشاهدة الآمنة
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">إعداد الجهاز للمشاهدة المثلى</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Wifi className="w-6 h-6 text-[#1DB954]" />
                      <h4 className="font-bold">إعداد الإنترنت</h4>
                    </div>
                    <ul className="text-sm space-y-2">
                      <li>• سرعة 5+ Mbps للـ HD</li>
                      <li>• سرعة 25+ Mbps للـ 4K</li>
                      <li>• استخدم Wi-Fi بدلاً من البيانات</li>
                      <li>• تأكد من استقرار الاتصال</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Monitor className="w-6 h-6 text-[#1DB954]" />
                      <h4 className="font-bold">إعداد الجهاز</h4>
                    </div>
                    <ul className="text-sm space-y-2">
                      <li>• استخدم متصفح محدث</li>
                      <li>• أغلق التطبيقات غير المستخدمة</li>
                      <li>• تأكد من شحن البطارية (للهواتف)</li>
                      <li>• نظف ذاكرة التخزين المؤقت</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">نصائح متقدمة للمشاهدة</h3>

              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li>
                  <strong>استخدم وضع ملء الشاشة:</strong> للحصول على تجربة سينمائية
                </li>
                <li>
                  <strong>ضبط الجودة يدوياً:</strong> اختر الجودة المناسبة لسرعة إنترنتك
                </li>
                <li>
                  <strong>استخدم سماعات جيدة:</strong> لتجربة صوتية أفضل
                </li>
                <li>
                  <strong>تجنب المشاهدة في أوقات الذروة:</strong> إذا كان الإنترنت بطيء
                </li>
                <li>
                  <strong>احفظ الموقع في المفضلة:</strong> للوصول السريع
                </li>
              </ol>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">مميزات خاصة في Koora Live</h3>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    <strong>الجودة التكيفية:</strong> تتغير الجودة تلقائياً حسب سرعة الإنترنت
                  </li>
                  <li>
                    <strong>البث المتعدد:</strong> شاهد أكثر من مباراة في نفس الوقت
                  </li>
                  <li>
                    <strong>الإحصائيات المباشرة:</strong> تابع إحصائيات المباراة أثناء المشاهدة
                  </li>
                  <li>
                    <strong>التعليق العربي:</strong> تعليق باللغة العربية لجميع المباريات
                  </li>
                  <li>
                    <strong>الإشعارات:</strong> تنبيهات قبل بداية المباريات المهمة
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">الأسئلة الشائعة</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-bold mb-2">كم تستهلك المشاهدة من البيانات؟</h4>
                  <p className="text-gray-300">
                    جودة HD تستهلك حوالي 1.5 GB في الساعة، بينما 4K تستهلك 7 GB في الساعة.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-bold mb-2">هل يمكن المشاهدة على التلفزيون؟</h4>
                  <p className="text-gray-300">
                    نعم، يمكن المشاهدة على التلفزيون الذكي أو باستخدام Chromecast أو Apple TV.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-bold mb-2">ماذا لو كان الإنترنت بطيء؟</h4>
                  <p className="text-gray-300">
                    <strong>Koora Live</strong> يضبط الجودة تلقائياً، أو يمكنك اختيار جودة أقل يدوياً.
                  </p>
                </div>
              </div>

              <div className="bg-[#1DB954]/10 border border-[#1DB954] rounded-lg p-6 mb-6">
                <h4 className="font-bold text-[#1DB954] mb-3">نصيحة الخبراء:</h4>
                <p>
                  للحصول على أفضل تجربة مع <strong>Koora Live - كورة لايف</strong>، ننصح بإعداد الجهاز والإنترنت قبل
                  بداية المباراة بـ 10 دقائق. هذا يضمن عدم تفويت أي لحظة مهمة من المباراة.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                مع هذا الدليل الشامل، أصبحت جاهزاً للاستمتاع بأفضل تجربة مشاهدة مع{" "}
                <strong>Koora Live - كورة لايف</strong>.<strong>كورة لايف بث مباشر</strong> يوفر كل ما تحتاجه لمشاهدة
                مبارياتك المفضلة بأعلى جودة وأقل مشاكل. ابدأ المشاهدة الآن وطبق هذه النصائح للحصول على تجربة لا تُنسى.
              </p>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold px-8 py-3">
                  ابدأ المشاهدة مع Koora Live
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
