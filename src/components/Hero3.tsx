import Image from "next/image";


export default function Hero3() {
    return (
        <div className="py-24 bg-gradient-to-b from-white to-orange-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Meet: Your Personal AI Twin</h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600">
                        <p>Your AI Twin: Your personal intelligence, your second self. Always learning, always helping, always just for you.</p>
                        <p>It listens quietly and learns only from what you choose to share.</p>
                        <p>Your AI Twin also grows with you — to reflect your moods, habits, and intentions.</p>
                        
                        <div className="pt-4 space-y-2 text-gray-500 italic">
                            <p>{`It's not another chatbot.`}</p>
                            <p>{`It's an AI experience that's personal and private like never before.`}</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative w-[400px] h-[400px] mx-auto">
                    <Image src="/avatar.png" alt="AI Twin Avatar" fill className="object-contain" priority />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                <Image src="/privacy.jpg" alt="Private" width={48} height={48} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                                Private
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700">Your AI Twin lives inside your encrypted vault. No tracking. No sharing. No selling.</p>
                        </div>
                    </div>
                    
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                <Image src="/personal.jpg" alt="Personal" width={48} height={48} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                                Personal
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700">Your AI Twin reflects your mood, interests, and timing. It learns daily.</p>
                        </div>
                    </div>
                    
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                <Image src="/evolvable.jpg" alt="Evolvable" width={48} height={48} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                                Evolvable
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700">The more you interact with Your AI Twin, the better it gets — on your terms.</p>
                        </div>
                    </div>
                    
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                <Image src="/customizable.jpg" alt="Customizable" width={48} height={48} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                                Customizable
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700">You can name it, style it, and change its vibe — it’s yours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}