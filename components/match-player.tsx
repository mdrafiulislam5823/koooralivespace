"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

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

interface MatchPlayerProps {
  match: Match
}

export function MatchPlayer({ match }: MatchPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      if (!match.streamUrl) {
        setHasError(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [match.streamUrl])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleMute = () => {
    setIsMuted(!isMuted)
  }

  if (isLoading) {
    return (
      <Card className="bg-card border-border">
        <div className="aspect-video bg-secondary flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-card-foreground">Loading stream...</p>
          </div>
        </div>
      </Card>
    )
  }

  if (hasError || !match.streamUrl) {
    return (
      <Card className="bg-card border-border">
        <div className="aspect-video bg-secondary flex items-center justify-center">
          <div className="text-center">
            <div className="text-destructive text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Stream Unavailable</h3>
            <p className="text-muted-foreground">The stream URL is invalid or the match is not currently available.</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-border overflow-hidden">
      <div className="relative aspect-video bg-black group">
        <video
          className="w-full h-full object-cover"
          src={match.streamUrl}
          autoPlay
          muted={isMuted}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-black/50 hover:bg-black/70 text-white border-none"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="bg-black/50 hover:bg-black/70 text-white border-none"
              onClick={handleMute}
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>

            <Button size="lg" variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-none">
              <Maximize className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Live Indicator */}
        {match.status === "live" && (
          <div className="absolute top-4 left-4">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              LIVE
            </div>
          </div>
        )}

        {/* Match Score Overlay */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">
          <div className="text-center">
            <div className="text-sm opacity-80">{match.competition}</div>
            <div className="font-bold">
              {match.homeTeam} {match.homeScore !== null ? match.homeScore : ""} -{" "}
              {match.awayScore !== null ? match.awayScore : ""} {match.awayTeam}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
