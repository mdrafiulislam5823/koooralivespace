import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سياسة الخصوصية - كورة لايف | حماية البيانات والأمان الرقمي",
  description: "سياسة الخصوصية وحماية البيانات في موقع كورة لايف للبث المباشر. نحن ملتزمون بحماية خصوصيتك وأمان بياناتك الشخصية وفقاً لأعلى معايير الأمان الرقمي. تعرف على كيفية جمع واستخدام وحماية معلوماتك أثناء استخدام منصة البث المباشر.",
  keywords: "سياسة الخصوصية, حماية البيانات, كورة لايف, الأمان",
  openGraph: {
    title: "سياسة الخصوصية - كورة لايف",
    description: "سياسة الخصوصية وحماية البيانات في موقع كورة لايف",
    locale: "ar_SA",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">سياسة الخصوصية</h1>
            <p className="text-xl text-muted-foreground">نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية</p>
            <p className="text-sm text-muted-foreground mt-2">آخر تحديث: ديسمبر 2025</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">مقدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  تحترم شركة كورة لايف خصوصية مستخدميها وتلتزم بحماية المعلومات الشخصية التي يتم جمعها من خلال موقعنا
                  الإلكتروني وخدماتنا. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">المعلومات التي نجمعها</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">المعلومات الشخصية</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• الاسم الكامل</li>
                      <li>• عنوان البريد الإلكتروني</li>
                      <li>• رقم الهاتف</li>
                      <li>• تاريخ الميلاد</li>
                      <li>• الموقع الجغرافي (اختياري)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">معلومات الاستخدام</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• عنوان IP الخاص بك</li>
                      <li>• نوع المتصفح والجهاز</li>
                      <li>• صفحات الموقع التي تزورها</li>
                      <li>• وقت ومدة الزيارة</li>
                      <li>• المباريات التي تشاهدها</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">كيف نستخدم معلوماتك</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• تقديم وتحسين خدماتنا</li>
                  <li>• إنشاء وإدارة حسابك</li>
                  <li>• إرسال التحديثات والإشعارات المهمة</li>
                  <li>• تخصيص المحتوى حسب اهتماماتك</li>
                  <li>• تحليل استخدام الموقع لتحسين الأداء</li>
                  <li>• الامتثال للمتطلبات القانونية</li>
                  <li>• منع الاحتيال وضمان الأمان</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">مشاركة المعلومات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• مع مقدمي الخدمات الموثوقين لتشغيل الموقع</li>
                  <li>• عند الحصول على موافقتك الصريحة</li>
                  <li>• للامتثال للقوانين والأنظمة</li>
                  <li>• لحماية حقوقنا وسلامة المستخدمين</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">حماية البيانات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">نتخذ تدابير أمنية متقدمة لحماية معلوماتك:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• تشفير البيانات أثناء النقل والتخزين</li>
                  <li>• استخدام خوادم آمنة ومحمية</li>
                  <li>• مراقبة مستمرة للأنشطة المشبوهة</li>
                  <li>• تحديث أنظمة الأمان بانتظام</li>
                  <li>• تدريب الموظفين على أفضل ممارسات الأمان</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">حقوقك</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">لديك الحق في:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• الوصول إلى معلوماتك الشخصية</li>
                  <li>• تصحيح أو تحديث معلوماتك</li>
                  <li>• حذف حسابك ومعلوماتك</li>
                  <li>• الاعتراض على معالجة بياناتك</li>
                  <li>• نقل بياناتك إلى خدمة أخرى</li>
                  <li>• سحب موافقتك في أي وقت</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">ملفات تعريف الارتباط (Cookies)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• ملفات تعريف ضرورية لتشغيل الموقع</li>
                  <li>• ملفات تحليلية لفهم استخدام الموقع</li>
                  <li>• ملفات وظيفية لحفظ تفضيلاتك</li>
                  <li>• يمكنك إدارة إعدادات ملفات تعريف الارتباط من متصفحك</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">التواصل معنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>البريد الإلكتروني: privacy@koooralive.space</p>
                  <p>الهاتف: +966 11 123 4567</p>
                  <p>العنوان: الرياض، المملكة العربية السعودية</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
