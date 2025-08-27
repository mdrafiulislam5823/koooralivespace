import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "تقييمات بث مباريات كرة القدم | Koora Live - آراء المستخدمين",
  description:
    "اقرأ تقييمات وآراء المستخدمين حول بث مباريات كرة القدم مع Koora Live. تجارب حقيقية مع كورة لايف بث مباشر.",
  keywords: "تقييمات بث مباريات, Koora Live, كورة لايف, آراء المستخدمين, تجارب المشاهدة, كورة لايف بث مباشر, مراجعات",
  openGraph: {
    title: "تقييمات بث مباريات كرة القدم | Koora Live",
    description: "آراء وتقييمات المستخدمين حول كورة لايف بث مباشر",
    images: ["/streaming-reviews.png"],
  },
}

export default function StreamingReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">تقييمات وآراء المستخدمين حول Koora Live</h1>
            <p className="text-xl text-gray-300 text-center mb-6">تجارب حقيقية من مستخدمي كورة لايف بث مباشر</p>
            <div className="text-center mb-8">
              <Link
                href="/"
                className="inline-block bg-[#1DB954] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                العودة إلى كورة لايف الرئيسية
              </Link>
            </div>
          </header>

          <div className="mb-8">
            <Image
              src="/streaming-reviews.png"
              alt="تقييمات بث مباريات كرة القدم"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">تقييمات المستخدمين لـ Koora Live</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="text-[#1DB954] text-2xl">★★★★★</div>
                  <span className="mr-2 font-bold">أحمد من الرياض</span>
                </div>
                <p className="text-lg">
                  "أفضل موقع لمشاهدة مباريات الدوري السعودي! <strong>كورة لايف</strong>
                  يوفر جودة ممتازة وبث مستقر بدون تقطيع."
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="text-[#1DB954] text-2xl">★★★★★</div>
                  <span className="mr-2 font-bold">محمد من جدة</span>
                </div>
                <p className="text-lg">
                  "استخدم <strong>Koora Live</strong> منذ شهور وأنا راضي جداً. البث سريع والجودة عالية، وأهم شيء أنه
                  مجاني!"
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="text-[#1DB954] text-2xl">★★★★★</div>
                  <span className="mr-2 font-bold">سارة من الدمام</span>
                </div>
                <p className="text-lg">
                  "موقع رائع لمتابعة مباريات كرة القدم. <strong>كورة لايف بث مباشر</strong>
                  يعمل على جميع الأجهزة بسهولة."
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="text-[#1DB954] text-2xl">★★★★★</div>
                  <span className="mr-2 font-bold">خالد من المدينة</span>
                </div>
                <p className="text-lg">
                  "تجربة مشاهدة ممتازة مع <strong>Koora Live</strong>. لا أحتاج لمواقع أخرى بعد الآن!"
                </p>
              </div>
            </div>

            <div className="bg-[#1DB954] p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">تقييم عام: ★★★★★</h3>
              <p className="text-lg">أكثر من 100,000 مستخدم راضي عن خدمة كورة لايف</p>
            </div>
          </section>

          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">جرب Koora Live بنفسك</h2>
            <p className="text-lg mb-6">
              انضم لآلاف المستخدمين الراضين عن <strong>كورة لايف بث مباشر</strong>
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1DB954] text-white px-8 py-4 rounded-lg text-xl hover:bg-green-600 transition-colors"
            >
              ابدأ المشاهدة الآن
            </Link>
          </section>
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "تقييمات وآراء المستخدمين حول Koora Live",
            description: "تجارب حقيقية من مستخدمي كورة لايف بث مباشر",
            author: {
              "@type": "Organization",
              name: "Koora Live",
            },
          }),
        }}
      />
    </div>
  )
}
