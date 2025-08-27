import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "جدول مباريات كرة القدم اليوم - Koora Live | كورة لايف",
  description:
    "تابع جدول مباريات كرة القدم اليوم والأسبوع القادم مع Koora Live. مواعيد المباريات المباشرة للدوري السعودي والدوريات العالمية مع كورة لايف بث مباشر.",
  keywords:
    "جدول المباريات, مواعيد المباريات, Koora Live, كورة لايف, كورة لايف بث مباشر, الدوري السعودي, مباريات اليوم",
  openGraph: {
    title: "جدول مباريات كرة القدم - Koora Live",
    description: "جدول شامل لمباريات كرة القدم مع Koora Live - كورة لايف بث مباشر",
    images: ["/football-schedule-calendar.png"],
  },
}

const todayMatches = [
  {
    id: 1,
    homeTeam: "الهلال",
    awayTeam: "النصر",
    time: "20:00",
    date: "اليوم",
    venue: "استاد الملك فهد",
    competition: "الدوري السعودي",
    status: "مباشر",
  },
  {
    id: 2,
    homeTeam: "الاتحاد",
    awayTeam: "الأهلي",
    time: "17:30",
    date: "اليوم",
    venue: "استاد الأمير عبدالله الفيصل",
    competition: "الدوري السعودي",
    status: "قريباً",
  },
  {
    id: 3,
    homeTeam: "الشباب",
    awayTeam: "الفتح",
    time: "15:00",
    date: "غداً",
    venue: "استاد الأمير فيصل بن فهد",
    competition: "الدوري السعودي",
    status: "قريباً",
  },
]

const weeklySchedule = [
  { day: "السبت", matches: 3, featured: "الهلال vs النصر" },
  { day: "الأحد", matches: 2, featured: "الاتحاد vs الأهلي" },
  { day: "الاثنين", matches: 1, featured: "الشباب vs الفتح" },
  { day: "الثلاثاء", matches: 2, featured: "التعاون vs ضمك" },
  { day: "الأربعاء", matches: 3, featured: "الفيصلي vs الرائد" },
  { day: "الخميس", matches: 1, featured: "أبها vs الباطن" },
  { day: "الجمعة", matches: 2, featured: "الوحدة vs الحزم" },
]

export default function FootballSchedulePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "جدول مباريات كرة القدم - Koora Live",
    description: "جدول شامل لمباريات كرة القدم مع كورة لايف بث مباشر",
    organizer: {
      "@type": "Organization",
      name: "Koora Live - كورة لايف",
      url: "https://koooralive.space",
    },
    location: {
      "@type": "Place",
      name: "المملكة العربية السعودية",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              جدول مباريات كرة القدم
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              تابع جميع مباريات كرة القدم مع <span className="text-[#1DB954] font-bold">Koora Live</span> - كورة لايف بث
              مباشر
            </p>
            <Image
              src="/football-schedule-calendar.png"
              alt="جدول مباريات كرة القدم - Koora Live"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Today's Matches */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              مباريات اليوم - <span className="text-[#1DB954]">Koora Live</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {todayMatches.map((match) => (
                <Card key={match.id} className="bg-gray-900 border-gray-800 hover:border-[#1DB954] transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          match.status === "مباشر" ? "bg-red-600" : "bg-[#1DB954]"
                        }`}
                      >
                        {match.status}
                      </span>
                      <span className="text-gray-400">{match.competition}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold mb-2">
                        {match.homeTeam} vs {match.awayTeam}
                      </div>
                      <div className="flex items-center justify-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {match.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {match.date}
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-gray-400 mt-2">
                        <MapPin className="w-4 h-4" />
                        {match.venue}
                      </div>
                    </div>
                    <Link href={`/match/${match.id}`}>
                      <Button className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold">
                        شاهد مباشرة مع كورة لايف
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Weekly Schedule */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              جدول الأسبوع - <span className="text-[#1DB954]">Koora Live</span>
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {weeklySchedule.map((day, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{day.day}</h3>
                    <div className="flex items-center justify-center gap-1 text-[#1DB954] mb-2">
                      <Users className="w-4 h-4" />
                      {day.matches} مباريات
                    </div>
                    <p className="text-gray-400 text-sm">{day.featured}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">دليل شامل لجدول مباريات كرة القدم مع Koora Live</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                يعتبر <strong>Koora Live - كورة لايف</strong> المصدر الأول والأكثر موثوقية لمتابعة جدول مباريات كرة
                القدم في المملكة العربية السعودية والعالم العربي. مع <strong>كورة لايف بث مباشر</strong>، يمكنك الحصول
                على أحدث المعلومات حول مواعيد المباريات والبطولات المختلفة.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">لماذا تختار Koora Live لمتابعة جدول المباريات؟</h3>

              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>جدول محدث لحظياً لجميع مباريات الدوري السعودي</li>
                <li>مواعيد دقيقة لمباريات البطولات العالمية</li>
                <li>إشعارات فورية قبل بداية المباريات</li>
                <li>معلومات شاملة عن الملاعب والفرق</li>
                <li>ربط مباشر لمشاهدة المباريات مع كورة لايف بث مباشر</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">كيفية استخدام جدول المباريات في Koora Live</h3>

              <ol className="list-decimal list-inside space-y-2 mb-6">
                <li>
                  ادخل إلى موقع <strong>Koora Live - كورة لايف</strong>
                </li>
                <li>اختر قسم "جدول المباريات" من القائمة الرئيسية</li>
                <li>حدد التاريخ أو البطولة التي تريد متابعتها</li>
                <li>اضغط على "شاهد مباشرة" لمشاهدة المباراة</li>
                <li>استمتع بمشاهدة أفضل جودة مع كورة لايف بث مباشر</li>
              </ol>

              <h3 className="text-2xl font-bold mb-4 text-[#1DB954]">البطولات المتاحة في جدول Koora Live</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">البطولات السعودية</h4>
                  <ul className="text-sm space-y-1">
                    <li>• الدوري السعودي للمحترفين</li>
                    <li>• كأس الملك</li>
                    <li>• كأس السوبر السعودي</li>
                    <li>• دوري الأمير محمد بن سلمان</li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">البطولات العالمية</h4>
                  <ul className="text-sm space-y-1">
                    <li>• دوري أبطال أوروبا</li>
                    <li>• الدوري الإنجليزي الممتاز</li>
                    <li>• الليجا الإسبانية</li>
                    <li>• دوري أبطال آسيا</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                مع <strong>Koora Live - كورة لايف</strong>، لن تفوتك أي مباراة مهمة. جدولنا الشامل يضمن لك متابعة جميع
                المباريات بأعلى جودة ومع أفضل تجربة مشاهدة. انضم إلى ملايين المشاهدين الذين يثقون في{" "}
                <strong>كورة لايف بث مباشر</strong> لمشاهدة مبارياتهم المفضلة.
              </p>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold px-8 py-3">
                  العودة إلى Koora Live الرئيسية
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
