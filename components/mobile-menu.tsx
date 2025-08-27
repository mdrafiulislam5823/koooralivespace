"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Calendar, Play, Info, Phone, Shield, BookOpen } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "المباريات المباشرة", icon: Home },
    { href: "/upcoming", label: "المباريات القادمة", icon: Calendar },
    { href: "/highlights", label: "أهداف المباريات", icon: Play },
    { href: "/guide", label: "دليل المشاهدة", icon: BookOpen },
    { href: "/about", label: "من نحن", icon: Info },
    { href: "/contact", label: "اتصل بنا", icon: Phone },
    { href: "/privacy", label: "سياسة الخصوصية", icon: Shield },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="md:hidden bg-transparent">
          <Menu className="h-4 w-4" />
          <span className="sr-only">فتح القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-right">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ك</span>
              </div>
              <span className="text-xl font-bold text-foreground">كورة لايف</span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="mt-8 pt-8 border-t border-border">
          <Button className="w-full bg-primary hover:bg-primary/90">الملف الشخصي</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
