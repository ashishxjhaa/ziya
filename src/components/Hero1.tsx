import Image from "next/image";



export default function Hero1() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">How Ziya Works</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ziya Works in four simple steps. You connect the apps you already use. Your AI Twin learns your vibe - privately. You get smarter insights, perosnal advices, and control over your valuable data.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-orange-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group">
                    <div className="md:text-center lg:block">
                        <div className="hidden lg:inline-flex items-center justify-center w-8 h-8 mb-4 bg-gray-100 group-hover:bg-orange-200 rounded-full transition-all duration-300">
                            <span className="text-gray-900 font-medium group-hover:text-orange-700">1</span>
                        </div>
                        <div className="flex md:block lg:block">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:h-32 flex-shrink-0 md:mx-auto lg:mx-auto md:mb-6">
                                <Image src="/1icon.png" alt="Connect" fill className="object-contain" priority />
                            </div>
                            <div className="ml-4 md:ml-0 flex-1">
                                <h3 className="text-xl text-gray-900 font-semibold mb-2 md:mb-3 group-hover:text-orange-600c transition-colors duration-300">Connect</h3>
                                <p className="text-gray-600 group-hover:text-gray-700">{`Connect your apps (Discord, Reddit, Twitter, etc.), refer your friends and accumulate Ziya Drops.`}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-orange-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group">
                    <div className="md:text-center lg:block">
                        <div className="hidden lg:inline-flex items-center justify-center w-8 h-8 mb-4 bg-gray-100 group-hover:bg-orange-200 rounded-full transition-all duration-300">
                            <span className="text-gray-900 font-medium group-hover:text-orange-700">2</span>
                        </div>
                        <div className="flex md:block lg:block">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:h-32 flex-shrink-0 md:mx-auto lg:mx-auto md:mb-6">
                                <Image src="/2icon.png" alt="Your AI Twin Learns" fill className="object-contain" priority />
                            </div>
                            <div className="ml-4 md:ml-0 flex-1">
                                <h3 className="text-xl text-gray-900 font-semibold mb-2 md:mb-3 group-hover:text-orange-600c transition-colors duration-300">Ziya Twin</h3>
                                <p className="text-gray-600 group-hover:text-gray-700">Your Personal AI Twin, learn from your consented digital activity - only what your apps ALREADY know about you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-orange-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group">
                    <div className="md:text-center lg:block">
                        <div className="hidden lg:inline-flex items-center justify-center w-8 h-8 mb-4 bg-gray-100 group-hover:bg-orange-200 rounded-full transition-all duration-300">
                            <span className="text-gray-900 font-medium group-hover:text-orange-700">3</span>
                        </div>
                        <div className="flex md:block lg:block">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:h-32 flex-shrink-0 md:mx-auto lg:mx-auto md:mb-6">
                                <Image src="/3icon.png" alt="Connect" fill className="object-contain" priority />
                            </div>
                            <div className="ml-4 md:ml-0 flex-1">
                                <h3 className="text-xl text-gray-900 font-semibold mb-2 md:mb-3 group-hover:text-orange-600c transition-colors duration-300">Unlock Value</h3>
                                <p className="text-gray-600 group-hover:text-gray-700">Get cross-platform recommendations, smarter insights with your AI Twin and get real rewards using Ziya Drops.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-orange-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group">
                    <div className="md:text-center lg:block">
                        <div className="hidden lg:inline-flex items-center justify-center w-8 h-8 mb-4 bg-gray-100 group-hover:bg-orange-200 rounded-full transition-all duration-300">
                            <span className="text-gray-900 font-medium group-hover:text-orange-700">4</span>
                        </div>
                        <div className="flex md:block lg:block">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:h-32 flex-shrink-0 md:mx-auto lg:mx-auto md:mb-6">
                                <Image src="/4icon.png" alt="Connect" fill className="object-contain" priority />
                            </div>
                            <div className="ml-4 md:ml-0 flex-1">
                                <h3 className="text-xl text-gray-900 font-semibold mb-2 md:mb-3 group-hover:text-orange-600c transition-colors duration-300">Control Everything</h3>
                                <p className="text-gray-600 group-hover:text-gray-700">Your data is encrypted, anonymous, and always revocable. You decide what your AI Twin sees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-full justify-center mt-12 inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors duration-300 cursor-pointer group">
                <span className="font-semibold">
                    Ready to bring your AI Twin to life?
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </button>
        </div>
    </div>
  )
}