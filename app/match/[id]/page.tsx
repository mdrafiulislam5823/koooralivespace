import { MatchPlayer } from "@/components/match-player"
import { MatchInfo } from "@/components/match-info"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  homeTeamArabic: string
  awayTeamArabic: string
  homeScore: number | null
  awayScore: number | null
  status: "live" | "upcoming" | "finished"
  startTime: string
  competition: string
  competitionArabic: string
  streamUrl?: string
  venue?: string
  venueEnglish?: string
  date?: string
  homeTeamFlag?: string
  awayTeamFlag?: string
}

const getMatchData = (id: string): Match | null => {
  const matches: Record<string, Match> = {
    "1": {
      id: "1",
      homeTeam: "Al Hilal",
      awayTeam: "Al Nassr",
      homeTeamArabic: "الهلال",
      awayTeamArabic: "النصر",
      homeScore: 2,
      awayScore: 1,
      status: "live" as const,
      startTime: "15:30",
      competition: "Saudi Pro League",
      competitionArabic: "دوري روشن السعودي",
      streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      venue: "استاد الملك فهد",
      venueEnglish: "King Fahd Stadium",
      date: "2025-12-20",
      homeTeamFlag: "/al-hilal-saudi-football-club-logo.png",
      awayTeamFlag: "/al-nassr-saudi-football-club-logo.png",
    },
    "2": {
      id: "2",
      homeTeam: "Al Ittihad",
      awayTeam: "Al Ahli",
      homeTeamArabic: "الاتحاد",
      awayTeamArabic: "الأهلي",
      homeScore: 0,
      awayScore: 0,
      status: "live" as const,
      startTime: "20:00",
      competition: "Saudi Pro League",
      competitionArabic: "دوري روشن السعودي",
      streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      venue: "استاد الأمير عبدالله الفيصل",
      venueEnglish: "Prince Abdullah Al-Faisal Stadium",
      date: "2025-12-20",
      homeTeamFlag: "/al-ittihad-saudi-football-club-logo.png",
      awayTeamFlag: "/al-ahli-saudi-football-club-logo.png",
    },
  }

  return matches[id] || null
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const match = getMatchData(id)

  if (!match) {
    return {
      title: "المباراة غير موجودة - كورة لايف",
      description: "المباراة المطلوبة غير موجودة",
    }
  }

  const isLive = match.status === "live"
  const statusText = isLive ? "مباشر" : match.status === "upcoming" ? "قادمة" : "انتهت"
  const scoreText = match.homeScore !== null ? `${match.homeScore}-${match.awayScore}` : ""

  return {
    title: `${match.homeTeamArabic} مقابل ${match.awayTeamArabic} ${scoreText} - ${statusText} | كورة لايف`,
    description: `شاهد مباراة ${match.homeTeamArabic} مقابل ${match.awayTeamArabic} ${statusText} في ${match.competitionArabic} على كورة لايف`,
    keywords: `${match.homeTeamArabic}, ${match.awayTeamArabic}, ${match.competitionArabic}, مباراة مباشرة, كورة لايف, ${match.homeTeam}, ${match.awayTeam}`,
    openGraph: {
      title: `${match.homeTeamArabic} مقابل ${match.awayTeamArabic} ${scoreText} - ${statusText}`,
      description: `شاهد مباراة ${match.homeTeamArabic} مقابل ${match.awayTeamArabic} ${statusText} في ${match.competitionArabic}`,
      type: "article",
      locale: "ar_SA",
      images: [
        {
          url: `/og-match-${match.id}.jpg`,
          width: 1200,
          height: 630,
          alt: `${match.homeTeamArabic} مقابل ${match.awayTeamArabic}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${match.homeTeamArabic} مقابل ${match.awayTeamArabic} ${scoreText} - ${statusText}`,
      description: `شاهد مباراة ${match.homeTeamArabic} مقابل ${match.awayTeamArabic} ${statusText} في ${match.competitionArabic}`,
    },
    alternates: {
      canonical: `/match/${match.id}`,
    },
  }
}

export default async function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const match = getMatchData(id)

  if (!match) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${match.homeTeamArabic} مقابل ${match.awayTeamArabic}`,
    alternateName: `${match.homeTeam} vs ${match.awayTeam}`,
    description: `مباراة ${match.homeTeamArabic} مقابل ${match.awayTeamArabic} في ${match.competitionArabic}`,
    startDate: `${match.date}T${match.startTime}:00+03:00`,
    location: {
      "@type": "Place",
      name: match.venue,
      alternateName: match.venueEnglish,
      address: {
        "@type": "PostalAddress",
        addressCountry: "SA",
        addressLocality: "الرياض",
      },
    },
    competitor: [
      {
        "@type": "SportsTeam",
        name: match.homeTeamArabic,
        alternateName: match.homeTeam,
        logo: `https://koooralive.space${match.homeTeamFlag}`,
      },
      {
        "@type": "SportsTeam",
        name: match.awayTeamArabic,
        alternateName: match.awayTeam,
        logo: `https://koooralive.space${match.awayTeamFlag}`,
      },
    ],
    sport: "كرة القدم",
    eventStatus: match.status === "live" ? "https://schema.org/EventScheduled" : "https://schema.org/EventScheduled",
    organizer: {
      "@type": "Organization",
      name: match.competitionArabic,
      alternateName: match.competition,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <article>
            <header className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {match.homeTeamArabic} مقابل {match.awayTeamArabic}
              </h1>
              <p className="text-muted-foreground">
                {match.competitionArabic} - {match.venue}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <section className="lg:col-span-3" aria-label="مشغل المباراة">
                <MatchPlayer match={match} />
              </section>
              <aside className="lg:col-span-1" aria-label="معلومات المباراة">
                <MatchInfo match={match} />
              </aside>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
