import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "تطبيق كورة لايف للجوال | Koora Live - حمل التطبيق الآن",
  description:
    "حمل تطبيق Koora Live كورة لايف للجوال واستمتع بمشاهدة مباريات كرة القدم في أي مكان. متوفر قريباً على أندرويد و iOS",
  keywords: "تطبيق كورة لايف, Koora Live app, تطبيق مشاهدة المباريات, تطبيق كرة القدم, APK",
  openGraph: {
    title: "تطبيق كورة لايف للجوال | Koora Live",
    description: "حمل تطبيق كورة لايف واستمتع بمشاهدة المباريات في أي مكان",
    images: ["/koora-live-app-preview.png"],
  },
}

export default function MobileApp() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "Koora Live",
            description: "تطبيق مشاهدة مباريات كرة القدم المباشرة",
            operatingSystem: "Android, iOS",
            applicationCategory: "Sports",
            author: {
              "@type": "Organization",
              name: "Koora Live",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "SAR",
            },
          }),
        }}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            تطبيق كورة لايف للجوال
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            حمل تطبيق{" "}
            <Link href="/" className="text-green-400 hover:text-green-300">
              Koora Live كورة لايف
            </Link>{" "}
            واستمتع بمشاهدة مباريات كرة القدم في أي مكان وأي وقت
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/koora-live-app-preview.png"
              alt="تطبيق كورة لايف للجوال"
              width={600}
              height={400}
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={85}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">لماذا تطبيق Koora Live؟</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                مشاهدة مباشرة لجميع المباريات بجودة HD
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                إشعارات فورية لبداية المباريات والأهداف
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                واجهة سهلة الاستخدام باللغة العربية
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                مجاني تماماً بدون إعلانات مزعجة
              </li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">مميزات التطبيق</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "البث المباشر", description: "شاهد جميع المباريات مباشرة بجودة عالية", icon: "📺" },
              { title: "الإشعارات الذكية", description: "تنبيهات فورية للمباريات والأهداف", icon: "🔔" },
              { title: "الملخصات", description: "ملخصات شاملة لجميع المباريات", icon: "⚽" },
              { title: "الجداول والنتائج", description: "تحديث فوري لجميع النتائج والترتيب", icon: "📊" },
              { title: "الأخبار", description: "آخر أخبار كرة القدم والأندية", icon: "📰" },
              { title: "المفضلة", description: "تابع فرقك المفضلة بسهولة", icon: "❤️" },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">دليل تطبيق كورة لايف الشامل</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              يأتي تطبيق <strong>Koora Live كورة لايف</strong> للجوال ليوفر لك تجربة مشاهدة مثالية لمباريات كرة القدم.
              صُمم التطبيق خصيصاً للمستخدمين العرب مع واجهة سهلة ومميزات متقدمة.
            </p>

            <h3 className="text-2xl font-bold text-green-400 mb-4">إعلان هام: قريباً على متاجر التطبيقات</h3>
            <div className="bg-green-900/20 border border-green-600 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-green-400 mb-3">🚀 التطبيق قيد التطوير النهائي</h4>
              <p className="text-gray-300 mb-4">
                نحن نعمل بجد لإطلاق تطبيق <strong>Koora Live</strong> قريباً جداً! التطبيق سيكون متوفراً على:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Google Play Store</strong> - لأجهزة الأندرويد
                </li>
                <li>
                  <strong>Apple App Store</strong> - لأجهزة الآيفون والآيباد
                </li>
                <li>
                  <strong>ملف APK مباشر</strong> - للتحميل المباشر
                </li>
              </ul>
              <p className="text-green-400 font-bold mt-4">📅 موعد الإطلاق المتوقع: مارس 2025</p>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">مواصفات التطبيق التقنية</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-green-600">
                  <tr>
                    <th className="px-6 py-3 text-right">المواصفة</th>
                    <th className="px-6 py-3 text-right">أندرويد</th>
                    <th className="px-6 py-3 text-right">iOS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-bold">الحد الأدنى للنظام</td>
                    <td className="px-6 py-4">Android 7.0</td>
                    <td className="px-6 py-4">iOS 12.0</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">حجم التطبيق</td>
                    <td className="px-6 py-4">45 MB</td>
                    <td className="px-6 py-4">52 MB</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">الذاكرة المطلوبة</td>
                    <td className="px-6 py-4">2 GB RAM</td>
                    <td className="px-6 py-4">2 GB RAM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">مساحة التخزين</td>
                    <td className="px-6 py-4">100 MB</td>
                    <td className="px-6 py-4">120 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">مميزات حصرية في التطبيق</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">وضع عدم الاتصال</h4>
                <p className="text-gray-300">حفظ الملخصات لمشاهدتها لاحقاً بدون إنترنت</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">التحكم الصوتي</h4>
                <p className="text-gray-300">تحكم في التطبيق بالأوامر الصوتية باللغة العربية</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">الوضع الليلي</h4>
                <p className="text-gray-300">واجهة مريحة للعين في الإضاءة المنخفضة</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-3">المشاركة السريعة</h4>
                <p className="text-gray-300">شارك الأهداف والملخصات مع الأصدقاء فوراً</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">كيفية تحميل التطبيق</h3>
            <p className="text-gray-300 mb-4">عند إطلاق التطبيق، ستتمكن من تحميله بسهولة:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
              <li>ادخل إلى متجر التطبيقات على جهازك</li>
              <li>ابحث عن "Koora Live" أو "كورة لايف"</li>
              <li>اضغط على "تحميل" أو "Install"</li>
              <li>انتظر انتهاء التحميل والتثبيت</li>
              <li>افتح التطبيق واستمتع بالمشاهدة</li>
            </ol>

            <h3 className="text-2xl font-bold text-green-400 mb-4">الأسئلة الشائعة حول التطبيق</h3>
            <div className="space-y-6 mb-8">
              {[
                {
                  question: "هل التطبيق مجاني؟",
                  answer: "نعم، تطبيق Koora Live مجاني تماماً ولا يحتوي على أي رسوم خفية.",
                },
                {
                  question: "هل يعمل التطبيق بدون إنترنت؟",
                  answer: "البث المباشر يحتاج إنترنت، لكن يمكنك حفظ الملخصات لمشاهدتها لاحقاً بدون إنترنت.",
                },
                {
                  question: "ما هي سرعة الإنترنت المطلوبة؟",
                  answer: "للجودة العادية: 2 Mbps، للجودة العالية HD: 5 Mbps، للجودة الفائقة 4K: 15 Mbps.",
                },
                {
                  question: "هل يدعم التطبيق الكروم كاست؟",
                  answer: "نعم، يمكنك عرض المباريات على التلفزيون باستخدام Chromecast أو AirPlay.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-400 mb-3">{faq.question}</h4>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-4">ابق على اطلاع بموعد الإطلاق</h3>
            <p className="text-gray-300 mb-4">
              لا تفوت إطلاق تطبيق{" "}
              <Link href="/" className="text-green-400 hover:text-green-300">
                كورة لايف
              </Link>
              ! تابعنا للحصول على آخر التحديثات:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <h5 className="font-bold text-green-400 mb-2">الموقع الرسمي</h5>
                <p className="text-sm text-gray-300">تحديثات يومية على الموقع</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <h5 className="font-bold text-green-400 mb-2">وسائل التواصل</h5>
                <p className="text-sm text-gray-300">تابعنا على تويتر وفيسبوك</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <h5 className="font-bold text-green-400 mb-2">النشرة الإخبارية</h5>
                <p className="text-sm text-gray-300">اشترك للحصول على التحديثات</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">استعد لتجربة مشاهدة جديدة</h2>
          <p className="text-xl text-gray-300 mb-6">
            تطبيق <strong>Koora Live كورة لايف</strong> قادم قريباً ليغير طريقة مشاهدتك لكرة القدم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              تابع الموقع الآن
            </Link>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              اشترك في التحديثات
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
