import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { SearchBar } from "@/components/search-bar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">ك</span>
          </div>
          <span className="text-2xl font-bold text-foreground">كورة لايف</span>
        </Link>

        <div className="hidden md:block flex-1 max-w-md mx-8">
          <SearchBar />
        </div>

        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            المباريات المباشرة
          </Link>
          <Link href="/upcoming" className="text-muted-foreground hover:text-primary transition-colors">
            المباريات القادمة
          </Link>
          <Link href="/highlights" className="text-muted-foreground hover:text-primary transition-colors">
            أهداف المباريات
          </Link>
          <Link href="/guide" className="text-muted-foreground hover:text-primary transition-colors">
            دليل المشاهدة
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            من نحن
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            اتصل بنا
          </Link>
          <Button variant="outline" size="sm">
            الملف الشخصي
          </Button>
        </nav>

        <MobileMenu />
      </div>

      <div className="md:hidden px-4 pb-4">
        <SearchBar />
      </div>
    </header>
  )
}
