import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import InternalLinks, { streamingLinks } from '@/components/InternalLinks'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-green-400 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-white mb-4">
              الصفحة غير موجودة
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              عذراً، الصفحة التي تبحث عنها غير متوفرة. ربما تم نقلها أو حذفها.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/" className="flex items-center">
                <Home className="w-5 h-5 ml-2" />
                العودة للرئيسية
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/football-streaming-guide" className="flex items-center">
                <Search className="w-5 h-5 ml-2" />
                دليل المشاهدة
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="text-right">
            <h3 className="text-xl font-semibold text-white mb-6">
              الصفحات الأكثر زيارة
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-right">
              <Link 
                href="/free-football-streaming" 
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-green-400" />
                  <span className="text-white group-hover:text-green-400">
                    بث مجاني للمباريات
                  </span>
                </div>
              </Link>
              
              <Link 
                href="/hd-football-streaming" 
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-green-400" />
                  <span className="text-white group-hover:text-green-400">
                    بث بجودة HD
                  </span>
                </div>
              </Link>
              
              <Link 
                href="/saudi-pro-league" 
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-green-400" />
                  <span className="text-white group-hover:text-green-400">
                    الدوري السعودي
                  </span>
                </div>
              </Link>
              
              <Link 
                href="/football-news" 
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-green-400" />
                  <span className="text-white group-hover:text-green-400">
                    أخبار كرة القدم
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Related Links */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <InternalLinks 
              title="قد يهمك أيضاً"
              links={streamingLinks}
            />
          </div>
        </div>
      </section>
    </div>
  )
}