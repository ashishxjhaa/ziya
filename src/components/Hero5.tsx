


export default function Hero5() {
    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-black">{`You're Not Alone in This Shift`}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Thousands of people are starting to reflect, grow, and reclaim their digital lives — one insight at a time. Banza is a movement toward privacy, personalization, and purpose.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                        <span className="text-yellow-400 text-2xl">✨</span>
                    </div>
                    <div className="text-lg mb-4 text-gray-900">My AI Twin showed me a side of my patterns I never saw before.</div>
                    <p className="text-sm text-gray-600">—- Arjun, 20, Delhi</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                        <span className="text-yellow-400 text-2xl">✨</span>
                    </div>
                    <div className="text-lg mb-4 text-gray-900">The first app that respects me, gets me and is kinda working for me?</div>
                    <p className="text-sm text-gray-600">—- Raj, 23, Bangalore</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                        <span className="text-yellow-400 text-2xl">✨</span>
                    </div>
                    <div className="text-lg mb-4 text-gray-900">{`Cross-app reccos that actually vibe with me. Ziya's legit.`}</div>
                    <p className="text-sm text-gray-600">—- Yash, 21, Pune</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                        <span className="text-yellow-400 text-2xl">✨</span>
                    </div>
                    <div className="text-lg mb-4 text-gray-900">{`I connect, learn, and earn. It's just built different.`}</div>
                    <p className="text-sm text-gray-600">—- Lisa, 22, Mumbai</p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                    <span className="text-4xl mb-2 block">🔁</span>
                    <div className="text-3xl font-bold mb-1 text-gray-600">15,000+</div>
                    <div className="text-gray-600">Users signed up</div>
                </div>
                
                <div className="text-center">
                    <span className="text-4xl mb-2 block">🧠</span>
                    <div className="text-3xl font-bold mb-1 text-gray-600">85%</div>
                    <div className="text-gray-600">users understand habits better</div>
                </div>
                
                <div className="text-center">
                    <span className="text-4xl mb-2 block">🪙</span>
                    <div className="text-3xl font-bold mb-1 text-gray-600">250K</div>
                    <div className="text-gray-600">worth of Ziya Drops distributed</div>
                </div>
            </div>
            
            <div className="text-center">
                <button className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 group hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer">
                    Join the movement. Build Your Personal AI Twin 
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </span>
                </button>
            </div>
        </div> 
    )
}