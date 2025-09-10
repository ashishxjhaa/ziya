import Image from "next/image";


export default function Hero4() {
    return (
        <div className="py-24 bg-gradient-to-b from-white to-orange-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Built for Privacy. Secured by Design.</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        At Ziya, your data is never mined, sold, or tracked. 
                        <br />
                        Everything you connect is encrypted, anonymised, and entirely under your control — from the first tap to the last insight.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-5 md:mx-50 lg:mx-40 mb-16">
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4">
                                <Image src="/lock-icon.svg" alt="End-to-End Encryption" width={48} height={48} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">End-to-End Encryption</h3>
                            <p className="text-gray-600">Every connection is locked with bank-grade encryption. Only you hold the key.</p>
                        </div>
                    </div>
                    
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4">
                                <Image src="/shield-icon.svg" alt="Zero-Knowledge Tech" width={48} height={48} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Zero-Knowledge Tech</h3>
                            <p className="text-gray-600">Your AI Twin learns from your actions without ever seeing your data — thanks to zkTLS and blind compute.</p>
                        </div>
                    </div>
                    
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4">
                                <Image src="/user-icon.svg" alt="Full User Control" width={48} height={48} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Full User Control</h3>
                            <p className="text-gray-600">You decide what to share. You can disconnect or delete your vault at any time.</p>
                        </div>
                    </div>
                    
                    <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4">
                                <Image src="/compliance-icon.svg" alt="Built for Compliance" width={48} height={48} className="object-contain" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Built for Compliance</h3>
                                <p className="text-gray-600">{`Fully aligned with global privacy standards like GDPR and India's DPDP Act.`}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{`You're not the product.`}</h3>
                        <p className="text-lg text-gray-600 mb-6">With Ziya, you go from being used to being in charge.</p>
                        <a className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors duration-300 cursor-pointer group" href="#">View Full Privacy Policy<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></a>
                    </div>
                </div>
            </div>
    )
}