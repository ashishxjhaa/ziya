import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";



export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-100 via-purple-100 to-indigo-200 overflow-hidden mx-4 md:mx-8 mt-8 rounded-3xl">
      <div className="absolute inset-0 opacity-30 bg-no-repeat bg-center bg-cover"></div>

      <div className="relative z-10 flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 text-center mb-6">
          Track Health with{" "}
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            Ziya 
          </span>
        </h1>

        <p className="text-md sm:text-xl text-gray-600 text-center max-w-3xl mb-12">
          Monitor health and fitness. Get Recommendations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#" className="flex items-center bg-black text-white px-5 py-2 sm:px-8 rounded-full shadow-lg hover:bg-gray-800">
            <FaApple className="mr-2 w-5 h-5 sm:w-6.5 sm:h-6.5" />
            <div>
              <div className="text-sm sm:text-base font-medium">Download on the</div>
              <div className="text-sm sm:text-base font-semibold">App Store</div>
            </div>
          </a>

          <a href="#" className="flex items-center bg-black text-white px-5 py-1.5 sm:px-8 sm:py-2 rounded-full shadow-lg hover:bg-gray-800">
            <FaGooglePlay className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <div className="text-sm sm:text-base font-medium">Download on the</div>
              <div className="text-sm sm:text-base font-semibold">Play Store</div>
            </div>
          </a>
        </div>

        <p className="text-md sm:text-xl text-gray-600 max-w-3xl mb-10">
          <span className="inline-flex items-center align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock w-4 h-4 sm:w-4.5 sm:h-4.5 mr-2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> 
          </span> 
          Chat your Progress with Ziya.
        </p>

        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center gap-6 mt-auto h-[200px] sm:h-[340px]">
          <div className="absolute left-[10%] top-[80px] sm:left-[20%] sm:top-[120px] -translate-x-1/4 z-5 rounded-[2rem] overflow-hidden shadow-xl w-[180px] h-[270px] sm:w-[240px] sm:h-[360px]">
            <Image
              src="/image1.png"
              alt="Screenshot 1"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 rounded-[2rem] overflow-hidden shadow-2xl w-[200px] h-[300px] sm:w-[280px] sm:h-[420px]">
            <Image
              src="/image3.png"
              alt="Screenshot 3"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="absolute right-[10%] top-[80px] sm:right-[20%] sm:top-[120px] translate-x-1/4 z-5 rounded-[2rem] overflow-hidden shadow-xl w-[180px] h-[270px] sm:w-[240px] sm:h-[360px]">
            <Image
              src="/image2.png"
              alt="Screenshot 2"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
