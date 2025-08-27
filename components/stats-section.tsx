import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Play, Calendar } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      title: "المباريات المباشرة",
      value: "12",
      description: "مباراة تُبث الآن",
      icon: Play,
      color: "text-primary",
    },
    {
      title: "المشاهدون النشطون",
      value: "125,430",
      description: "مشاهد متصل الآن",
      icon: Users,
      color: "text-green-500",
    },
    {
      title: "المباريات القادمة",
      value: "28",
      description: "خلال الأسبوع القادم",
      icon: Calendar,
      color: "text-blue-500",
    },
    {
      title: "نمو المشاهدات",
      value: "+45%",
      description: "مقارنة بالشهر الماضي",
      icon: TrendingUp,
      color: "text-orange-500",
    },
  ]

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">إحصائيات المنصة</h2>
          <p className="text-muted-foreground">أرقام حية من منصة كورة لايف</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
