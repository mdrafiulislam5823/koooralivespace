import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Trophy, Users } from "lucide-react"

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

interface MatchInfoProps {
  match: Match
}

export function MatchInfo({ match }: MatchInfoProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-primary" />
            Match Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Competition</span>
            <Badge variant="outline">{match.competition}</Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Status</span>
            <Badge variant={match.status === "live" ? "default" : "secondary"}>{match.status.toUpperCase()}</Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              Time
            </span>
            <span className="text-card-foreground">{match.startTime}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center">
            <Users className="h-5 w-5 mr-2 text-primary" />
            Teams
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
            <span className="font-semibold text-secondary-foreground">{match.homeTeam}</span>
            <span className="text-2xl font-bold text-primary">{match.homeScore !== null ? match.homeScore : "-"}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
            <span className="font-semibold text-secondary-foreground">{match.awayTeam}</span>
            <span className="text-2xl font-bold text-primary">{match.awayScore !== null ? match.awayScore : "-"}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Live Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-secondary rounded-lg p-4 overflow-y-auto">
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="font-semibold text-primary">Fan1:</span>
                <span className="text-secondary-foreground">Great goal! 🔥</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-semibold text-primary">FootballLover:</span>
                <span className="text-secondary-foreground">What a match!</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-semibold text-primary">SportsFan:</span>
                <span className="text-secondary-foreground">Incredible save by the keeper</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-muted-foreground text-sm">Chat feature coming soon...</div>
        </CardContent>
      </Card>
    </div>
  )
}
