import Image from "next/image"


export default function Home() {
  return (
    <main className="min-h-screen bg-white max-w-7xl mx-auto">
      <div className=" px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:mb-32">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">
              Welcome To Our Website
            </h1>
            <p className="text-gray-600 text-lg md:text-3xl leading-relaxed max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard
            </p>
        
            <button className="bg-black hover:bg-gray-800 text-white rounded-none px-12 p-4 text-2xl">Contact US</button>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative aspect-square md:aspect-auto md:h-[600px]">
            <Image
              src="/hero.png"
              alt="Decorative curved pattern"
             height={500}
            width={500}
            
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}

