import Image from "next/image";


export default function Hero2() {
  return (
    <div className="py-24 bg-gradient-to-b from-transparent to-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
                What You Get with Ziya
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 group transform transition-transform duration-1300 hover:scale-105">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="w-24 h-24 flex-shrink-0 relative">
                            <Image src="/icon1.png" alt="Meet the AI that evolves with you." fill className="object-contain" priority />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Meet the AI that evolves with you.</h3>
                            <p className="text-gray-600 leading-relaxed">Your Personal AI Twin reflects your digital rhythm, learns from your patterns and is always private, tailored to you and always in your control.</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 group transform transition-transform duration-1300 hover:scale-105">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="w-24 h-24 flex-shrink-0 relative">
                            <Image src="/icon2.png" alt="watch tonight" fill className="object-contain" priority />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">What should I watch tonight? Which book should I read next?</h3>
                            <p className="text-gray-600 leading-relaxed">Our Recommendation Engine suggests cross-platform content - from YouTube and Spotify to Coursera and Apple Podcasts, based on your preferences. No generic algorithm, just you and what you like.</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 group transform transition-transform duration-1300 hover:scale-105">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="w-24 h-24 flex-shrink-0 relative">
                            <Image src="/icon3.png" alt="You're already generating value." fill className="object-contain" priority />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">{`You're already generating value. Now you get to keep it.`}</h3>
                            <p className="text-gray-600 leading-relaxed">Every swipe, like and tap in your apps generates value. With Ziya, every Connection, Refresh and Referral earns you Ziya Drops — a currency you can finally benefit from.</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 group transform transition-transform duration-1300 hover:scale-105">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="w-24 h-24 flex-shrink-0 relative">
                            <Image src="/icon4.png" alt="Your data stays encrypted" fill className="object-contain" priority />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Your data stays encrypted, anonymous and revocable.</h3>
                            <p className="text-gray-600 leading-relaxed">{`Ziya's tech stack uses blind compute and zero knowledge proof — which means even we can't access what you share. You are in control of what your AI twin can see, and what you want it to forget.`}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-16">
                <p className="text-lg text-gray-600 mb-6">{`You've already shared this data with Discord, Twitter, Reddit etc. Ziya allows you to benefit from it.`}</p>
                
                <button className="cursor-pointer px-8 py-3 rounded-full bg-[#FF4F00] text-white font-extrabold hover:shadow-[0_0_30px_5px_rgba(255,79,0,0.3)] transition-all duration-300 group">Build Your Personal AI Twin 
                    <span className="inline-block align-middle transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right ml-1"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}