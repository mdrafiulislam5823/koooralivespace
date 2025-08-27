import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "دليل مشاهدة كرة القدم السعودية - كورة لايف | كل ما تحتاج معرفته",
  description:
    "دليل شامل لمشاهدة مباريات كرة القدم السعودية والعالمية مجاناً. تعرف على الدوري السعودي، الفرق، اللاعبين، والمزيد مع كورة لايف.",
  keywords: "كرة القدم السعودية, الدوري السعودي, مشاهدة مباريات, كورة لايف, الهلال, النصر, الاتحاد, الأهلي",
  openGraph: {
    title: "دليل مشاهدة كرة القدم السعودية - كورة لايف",
    description: "دليل شامل لمشاهدة مباريات كرة القدم السعودية والعالمية مجاناً",
    type: "article",
    locale: "ar_SA",
    images: [
      {
        url: "/saudi-football-guide.png",
        width: 1200,
        height: 630,
        alt: "دليل كرة القدم السعودية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دليل مشاهدة كرة القدم السعودية - كورة لايف",
    description: "دليل شامل لمشاهدة مباريات كرة القدم السعودية والعالمية مجاناً",
  },
  alternates: {
    canonical: "https://koooralive.space/guide",
  },
}

const teams = [
  { name: "الهلال", city: "الرياض", founded: "1957", titles: 18, logo: "/al-hilal-saudi-football-club-logo.png" },
  { name: "النصر", city: "الرياض", founded: "1955", titles: 9, logo: "/al-nassr-saudi-football-club-logo.png" },
  { name: "الاتحاد", city: "جدة", founded: "1927", titles: 8, logo: "/al-ittihad-saudi-football-club-logo.png" },
  { name: "الأهلي", city: "جدة", founded: "1937", titles: 3, logo: "/al-ahli-saudi-football-club-logo.png" },
  { name: "الشباب", city: "الرياض", founded: "1947", titles: 6, logo: "/al-shabab-saudi-football-club-logo.png" },
  { name: "الفتح", city: "الأحساء", founded: "1958", titles: 2, logo: "/al-fateh-saudi-football-club-logo.png" },
]

const faqData = [
  {
    question: "كيف يمكنني مشاهدة مباريات الدوري السعودي مجاناً؟",
    answer:
      "يمكنك مشاهدة جميع مباريات الدوري السعودي مجاناً من خلال موقع كورة لايف. نوفر بث مباشر عالي الجودة لجميع المباريات مع تعليق عربي.",
  },
  {
    question: "ما هي أفضل الفرق في الدوري السعودي؟",
    answer:
      "الهلال والنصر هما أكثر الفرق نجاحاً في تاريخ الدوري السعودي، يليهما الاتحاد والأهلي والشباب. هذه الفرق تتنافس بقوة على اللقب كل موسم.",
  },
  {
    question: "متى يبدأ موسم الدوري السعودي؟",
    answer:
      "يبدأ موسم الدوري السعودي عادة في شهر أغسطس وينتهي في شهر مايو من العام التالي، مع استراحة شتوية قصيرة في ديسمبر ويناير.",
  },
  {
    question: "هل يمكنني مشاهدة المباريات على الهاتف المحمول؟",
    answer:
      "نعم، موقع كورة لايف متوافق تماماً مع الهواتف المحمولة والأجهزة اللوحية. يمكنك مشاهدة المباريات بجودة عالية من أي مكان.",
  },
  {
    question: "ما هي جودة البث المتاحة؟",
    answer: "نوفر بث بجودة HD و Full HD حسب سرعة الإنترنت لديك. يتم ضبط الجودة تلقائياً لضمان أفضل تجربة مشاهدة.",
  },
]

export default function GuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "دليل مشاهدة كرة القدم السعودية - كورة لايف",
    description: "دليل شامل لمشاهدة مباريات كرة القدم السعودية والعالمية مجاناً",
    image: "https://koooralive.space/saudi-football-guide.png",
    author: {
      "@type": "Organization",
      name: "كورة لايف",
    },
    publisher: {
      "@type": "Organization",
      name: "كورة لايف",
      logo: {
        "@type": "ImageObject",
        url: "https://koooralive.space/logo.png",
      },
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://koooralive.space/guide",
    },
    articleSection: "Sports",
    inLanguage: "ar-SA",
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">دليل مشاهدة كرة القدم السعودية</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              دليلك الشامل لمشاهدة مباريات الدوري السعودي والبطولات العالمية مجاناً مع أفضل جودة بث
            </p>
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src="/saudi-football-stadium-with-green-field-and-crowd.png"
                alt="ملعب كرة القدم السعودي"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">مرحباً بك في عالم كرة القدم السعودية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>
                كرة القدم السعودية تشهد نهضة حقيقية في السنوات الأخيرة، مع انضمام نجوم عالميين للدوري السعودي وتطوير
                البنية التحتية الرياضية. الدوري السعودي للمحترفين أصبح واحداً من أقوى الدوريات في آسيا والشرق الأوسط.
              </p>
              <p>
                مع كورة لايف، يمكنك متابعة جميع مباريات الدوري السعودي والبطولات العالمية بجودة عالية ومجاناً. نوفر لك
                تجربة مشاهدة متميزة مع تعليق عربي احترافي وإحصائيات مفصلة.
              </p>
            </CardContent>
          </Card>

          {/* Teams Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">أبرز فرق الدوري السعودي</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right p-4 font-semibold">الفريق</th>
                      <th className="text-right p-4 font-semibold">المدينة</th>
                      <th className="text-right p-4 font-semibold">تأسس</th>
                      <th className="text-right p-4 font-semibold">الألقاب</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50">
                        <td className="p-4">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className="relative w-8 h-8">
                              <Image
                                src={team.logo || "/placeholder.svg"}
                                alt={`شعار ${team.name}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="font-semibold">{team.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-muted-foreground">{team.city}</td>
                        <td className="p-4 text-muted-foreground">{team.founded}</td>
                        <td className="p-4">
                          <Badge variant="secondary" className="font-semibold">
                            {team.titles} لقب
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Features Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">مميزات كورة لايف</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">بث مباشر عالي الجودة</h3>
                      <p className="text-muted-foreground">
                        نوفر بث مباشر بجودة HD و Full HD لجميع المباريات مع استقرار تام في الإشارة
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">تعليق عربي احترافي</h3>
                      <p className="text-muted-foreground">تعليق عربي من أفضل المعلقين الرياضيين مع تحليل فني متخصص</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">متوافق مع جميع الأجهزة</h3>
                      <p className="text-muted-foreground">
                        شاهد المباريات على الكمبيوتر، الهاتف المحمول، أو التابلت بنفس الجودة
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">إحصائيات مفصلة</h3>
                      <p className="text-muted-foreground">احصائيات شاملة للمباريات واللاعبين والفرق مع تحديث مباشر</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">مجاني بالكامل</h3>
                      <p className="text-muted-foreground">
                        جميع المباريات والخدمات متاحة مجاناً بدون اشتراكات أو رسوم خفية
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">تحديثات فورية</h3>
                      <p className="text-muted-foreground">
                        تحديثات فورية للنتائج والأهداف مع إشعارات للمباريات المهمة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Watch Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">كيفية مشاهدة المباريات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">اختر المباراة</h3>
                  <p className="text-muted-foreground">
                    تصفح قائمة المباريات المتاحة واختر المباراة التي تريد مشاهدتها
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">اضغط شاهد مباشرة</h3>
                  <p className="text-muted-foreground">اضغط على زر "شاهد مباشرة" الأخضر للانتقال إلى صفحة البث</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">استمتع بالمشاهدة</h3>
                  <p className="text-muted-foreground">استمتع بمشاهدة المباراة بأفضل جودة مع تعليق عربي احترافي</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">الأسئلة الشائعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{faq.answer}</p>
                  {index < faqData.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Statistics Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">إحصائيات الدوري السعودي</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">18</div>
                  <div className="text-muted-foreground">فريق مشارك</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">306</div>
                  <div className="text-muted-foreground">مباراة في الموسم</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2.8M</div>
                  <div className="text-muted-foreground">مشاهد شهرياً</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">45+</div>
                  <div className="text-muted-foreground">دولة تتابع الدوري</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">ابدأ مشاهدة مباريات كرة القدم الآن</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                انضم إلى ملايين المشاهدين واستمتع بأفضل تجربة مشاهدة لمباريات كرة القدم السعودية والعالمية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  شاهد المباريات الآن
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  تواصل معنا
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
