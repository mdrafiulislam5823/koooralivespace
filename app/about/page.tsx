import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import Breadcrumb, { BreadcrumbStructuredData } from '@/components/Breadcrumb'
import InternalLinks, { streamingLinks } from '@/components/InternalLinks'

export const metadata: Metadata = {
  title: "من نحن - كورة لايف | منصة البث المباشر الأولى للدوري السعودي",
  description: "تعرف على كورة لايف، منصة البث المباشر الأولى لمباريات كرة القدم في المملكة العربية السعودية. نقدم بث مباشر مجاني بجودة HD للدوري السعودي والدوريات العالمية مع تعليق عربي احترافي. انضم لملايين المشجعين واستمتع بأفضل تجربة مشاهدة كرة القدم.",
  keywords: "من نحن, كورة لايف, عن الموقع, البث المباشر, كرة القدم السعودية",
  openGraph: {
    title: "من نحن - كورة لايف",
    description: "تعرف على كورة لايف، منصة البث المباشر الأولى لمباريات كرة القدم",
    locale: "ar_SA",
  },
}

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'من نحن' }
  ]

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Koora Live كورة لايف",
    "alternateName": "كورة لايف",
    "url": "https://koooralive.space",
    "logo": "https://koooralive.space/logo.png",
    "description": "منصة البث المباشر الأولى لمباريات كرة القدم في المملكة العربية السعودية",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "name": "المملكة العربية السعودية"
    },
    "areaServed": {
      "@type": "Country",
      "name": "المملكة العربية السعودية"
    },
    "serviceType": "البث المباشر لمباريات كرة القدم",
    "knowsAbout": ["كرة القدم", "الدوري السعودي", "البث المباشر", "الرياضة"]
  }

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">من نحن</h1>
            <p className="text-xl text-muted-foreground">
              منصة البث المباشر الأولى لمباريات كرة القدم في المملكة العربية السعودية
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  نسعى لأن نكون المنصة الرائدة في بث مباريات كرة القدم مباشرة، مع التركيز على الدوري السعودي والدوريات
                  العالمية، وتوفير تجربة مشاهدة استثنائية لجماهير كرة القدم في المملكة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">مهمتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  تقديم خدمة بث مباشر عالية الجودة لمباريات كرة القدم، مع واجهة سهلة الاستخدام وتجربة مشاهدة مميزة تلبي
                  احتياجات عشاق الكرة السعودية.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">خدماتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• بث مباشر لمباريات الدوري السعودي</li>
                  <li>• تغطية شاملة للدوريات العالمية</li>
                  <li>• أهداف ومقاطع مميزة من المباريات</li>
                  <li>• تحديثات فورية للنتائج والأخبار</li>
                  <li>• واجهة سهلة ومتجاوبة مع جميع الأجهزة</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">قيمنا</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• الجودة في البث والخدمة</li>
                  <li>• الشفافية والمصداقية</li>
                  <li>• التطوير المستمر</li>
                  <li>• خدمة العملاء المتميزة</li>
                  <li>• الابتكار في التكنولوجيا</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-primary text-center">فريق العمل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                يضم فريق كورة لايف مجموعة من المتخصصين في مجال التكنولوجيا والإعلام الرياضي، نعمل بشغف لتقديم أفضل تجربة
                مشاهدة لعشاق كرة القدم في المملكة العربية السعودية.
              </p>
            </CardContent>
          </Card>
          
          <InternalLinks 
            title="استكشف المزيد من خدماتنا"
            links={streamingLinks}
            className="mt-12"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
