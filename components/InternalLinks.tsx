import Link from 'next/link'
import { ArrowRight, Play, Calendar, Trophy, Smartphone, Star } from 'lucide-react'

interface InternalLink {
  title: string
  href: string
  description: string
  icon: React.ReactNode
}

interface InternalLinksProps {
  title?: string
  links: InternalLink[]
  className?: string
}

export default function InternalLinks({ 
  title = "صفحات ذات صلة", 
  links, 
  className = "" 
}: InternalLinksProps) {
  return (
    <section className={`bg-gray-900 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Star className="w-5 h-5 text-green-400 ml-2" />
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-green-400"
          >
            <div className="flex items-start space-x-3">
              <div className="text-green-400 group-hover:text-green-300 transition-colors">
                {link.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors mb-1">
                  {link.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {link.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// Predefined link sets for different page types
export const streamingLinks: InternalLink[] = [
  {
    title: "بث مباشر مجاني",
    href: "/free-football-streaming",
    description: "شاهد مباريات كرة القدم مجاناً بجودة عالية",
    icon: <Play className="w-5 h-5" />
  },
  {
    title: "بث بجودة HD",
    href: "/hd-football-streaming",
    description: "استمتع بمشاهدة المباريات بأعلى جودة ممكنة",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    title: "تطبيق الجوال",
    href: "/mobile-app",
    description: "حمل التطبيق وشاهد المباريات في أي مكان",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    title: "جدول المباريات",
    href: "/football-schedule",
    description: "تابع مواعيد جميع المباريات المهمة",
    icon: <Calendar className="w-5 h-5" />
  }
]

export const newsLinks: InternalLink[] = [
  {
    title: "أخبار كرة القدم",
    href: "/football-news",
    description: "آخر أخبار وتطورات عالم كرة القدم",
    icon: <Play className="w-5 h-5" />
  },
  {
    title: "ملخصات المباريات",
    href: "/football-highlights",
    description: "شاهد أهم لحظات المباريات",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    title: "توقعات المباريات",
    href: "/football-predictions",
    description: "تحليلات وتوقعات خبراء كرة القدم",
    icon: <Star className="w-5 h-5" />
  },
  {
    title: "الدوري السعودي",
    href: "/saudi-pro-league",
    description: "تابع أخبار ومباريات الدوري السعودي",
    icon: <Calendar className="w-5 h-5" />
  }
]

export const guideLinks: InternalLink[] = [
  {
    title: "دليل البث المباشر",
    href: "/football-streaming-guide",
    description: "تعلم كيفية مشاهدة المباريات بأفضل طريقة",
    icon: <Play className="w-5 h-5" />
  },
  {
    title: "حل مشاكل البث",
    href: "/streaming-troubleshooting",
    description: "حلول لمشاكل البث الشائعة",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    title: "جودة البث",
    href: "/streaming-quality",
    description: "نصائح لتحسين جودة المشاهدة",
    icon: <Star className="w-5 h-5" />
  },
  {
    title: "أمان البث",
    href: "/streaming-security",
    description: "كيفية المشاهدة بأمان وحماية",
    icon: <Smartphone className="w-5 h-5" />
  }
]