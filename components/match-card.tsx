import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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

interface MatchCardProps {
  match: Match
}

export function MatchCard({ match }: MatchCardProps) {
  const isLive = match.status === "live"
  const isUpcoming = match.status === "upcoming"

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge
            variant={isLive ? "default" : "secondary"}
            className={`${
              isLive
                ? "bg-primary text-primary-foreground animate-pulse"
                : isUpcoming
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground"
            } font-medium`}
          >
            {isLive ? "مباشر" : isUpcoming ? "قادمة" : "انتهت"}
          </Badge>
          <div className="text-left rtl:text-right">
            <span className="text-sm text-muted-foreground block">{match.competitionArabic}</span>
            {match.venue && <span className="text-xs text-muted-foreground">{match.venue}</span>}
          </div>
        </div>
        {isLive && (
          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center space-x-1 rtl:space-x-reverse text-xs text-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>مباشر الآن</span>
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse flex-1">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border">
                <Image
                  src={match.homeTeamFlag || "/placeholder.svg"}
                  alt={`${match.homeTeamArabic} flag`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-card-foreground truncate">{match.homeTeamArabic}</div>
                <div className="text-xs text-muted-foreground truncate">{match.homeTeam}</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse px-4">
              {isLive || match.status === "finished" ? (
                <>
                  <div className="text-2xl font-bold text-primary text-center min-w-[2rem]">{match.homeScore}</div>
                  <div className="text-muted-foreground font-medium">-</div>
                  <div className="text-2xl font-bold text-primary text-center min-w-[2rem]">{match.awayScore}</div>
                </>
              ) : (
                <div className="text-lg text-muted-foreground font-medium px-4">مقابل</div>
              )}
            </div>

            <div className="flex items-center space-x-3 rtl:space-x-reverse flex-1">
              <div className="flex-1 min-w-0 text-left rtl:text-right">
                <div className="font-semibold text-card-foreground truncate">{match.awayTeamArabic}</div>
                <div className="text-xs text-muted-foreground truncate">{match.awayTeam}</div>
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border">
                <Image
                  src={match.awayTeamFlag || "/placeholder.svg"}
                  alt={`${match.awayTeamArabic} flag`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              {isUpcoming ? `تبدأ الساعة ${match.startTime}` : `بدأت الساعة ${match.startTime}`}
            </div>
          </div>
        </div>

        <Link href={`/match/${match.id}`} className="block">
          <Button className="w-full font-medium transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg">
            شاهد مباشرة
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
