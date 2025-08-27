import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import Breadcrumb, { BreadcrumbStructuredData } from '@/components/Breadcrumb'
import InternalLinks, { guideLinks } from '@/components/InternalLinks'

export const metadata: Metadata = {
  title: "اتصل بنا - كورة لايف | الدعم الفني والاستفسارات والاقتراحات",
  description: "تواصل مع فريق كورة لايف للاستفسارات والدعم الفني والاقتراحات. نحن هنا لمساعدتك في حل أي مشاكل تقنية أو الإجابة على استفساراتك حول البث المباشر للدوري السعودي. فريق الدعم متاح 24/7 لضمان أفضل تجربة مشاهدة لك.",
  keywords: "اتصل بنا, تواصل, دعم فني, كورة لايف, استفسارات",
  openGraph: {
    title: "اتصل بنا - كورة لايف",
    description: "تواصل مع فريق كورة لايف للاستفسارات والدعم الفني",
    locale: "ar_SA",
  },
}

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'اتصل بنا' }
  ]

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "اتصل بنا - كورة لايف",
    "description": "تواصل مع فريق كورة لايف للاستفسارات والدعم الفني",
    "mainEntity": {
      "@type": "Organization",
      "name": "Koora Live كورة لايف",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"],
        "serviceType": "الدعم الفني والاستفسارات"
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">اتصل بنا</h1>
            <p className="text-xl text-muted-foreground">نحن هنا لمساعدتك، تواصل معنا في أي وقت</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground">info@koooralive.space</p>
                  <p className="text-muted-foreground">support@koooralive.space</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">الهاتف</h3>
                  <p className="text-muted-foreground">+966 11 123 4567</p>
                  <p className="text-muted-foreground">+966 11 123 4568 (الدعم الفني)</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">العنوان</h3>
                  <p className="text-muted-foreground">
                    الرياض، المملكة العربية السعودية
                    <br />
                    حي الملك فهد، طريق الملك فهد
                    <br />
                    مبنى كورة لايف، الطابق الخامس
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">ساعات العمل</h3>
                  <p className="text-muted-foreground">
                    الأحد - الخميس: 9:00 ص - 6:00 م<br />
                    الجمعة - السبت: 2:00 م - 8:00 م
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input id="name" placeholder="أدخل اسمك الكامل" />
                  </div>

                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                  </div>

                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" placeholder="أدخل رقم هاتفك" />
                  </div>

                  <div>
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input id="subject" placeholder="موضوع الرسالة" />
                  </div>

                  <div>
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="min-h-[120px]" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-primary text-center">الأسئلة الشائعة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">كيف يمكنني مشاهدة المباريات؟</h3>
                  <p className="text-muted-foreground">
                    يمكنك مشاهدة المباريات مباشرة من خلال الضغط على زر "شاهد مباشرة" في صفحة المباراة.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">هل الخدمة مجانية؟</h3>
                  <p className="text-muted-foreground">
                    نعم، نوفر مجموعة من المباريات مجاناً، مع خطط مدفوعة للمحتوى المميز.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">ما هي متطلبات النظام؟</h3>
                  <p className="text-muted-foreground">
                    يعمل الموقع على جميع المتصفحات الحديثة والأجهزة الذكية بسلاسة.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <InternalLinks 
            title="قد يهمك أيضاً"
            links={guideLinks}
            className="mt-12"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
