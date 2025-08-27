import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ك</span>
              </div>
              <span className="text-xl font-bold text-foreground">كورة لايف</span>
            </div>
            <p className="text-muted-foreground text-sm">
              منصة البث المباشر الأولى لمباريات كرة القدم في المملكة العربية السعودية
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">روابط سريعة</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                المباريات المباشرة
              </Link>
              <Link
                href="/upcoming"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                المباريات القادمة
              </Link>
              <Link
                href="/highlights"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                أهداف المباريات
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">الدعم</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                من نحن
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                اتصل بنا
              </Link>
              <Link
                href="/privacy"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                سياسة الخصوصية
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">تواصل معنا</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>البريد الإلكتروني: info@koooralive.space</p>
              <p>الهاتف: +966 11 123 4567</p>
              <p>الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 كورة لايف. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
