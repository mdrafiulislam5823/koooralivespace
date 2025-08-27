import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function MatchCardSkeleton() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 bg-muted rounded animate-pulse"></div>
          <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse flex-1">
              <div className="w-8 h-8 bg-muted rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
                <div className="h-3 w-16 bg-muted rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse px-4">
              <div className="h-8 w-8 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-4 bg-muted rounded animate-pulse"></div>
              <div className="h-8 w-8 bg-muted rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse flex-1">
              <div className="flex-1 space-y-2 text-left rtl:text-right">
                <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
                <div className="h-3 w-16 bg-muted rounded animate-pulse"></div>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="text-center">
            <div className="h-4 w-32 bg-muted rounded animate-pulse mx-auto"></div>
          </div>
        </div>
        <div className="h-10 w-full bg-muted rounded animate-pulse"></div>
      </CardContent>
    </Card>
  )
}

export function MatchGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <MatchCardSkeleton key={i} />
      ))}
    </div>
  )
}
