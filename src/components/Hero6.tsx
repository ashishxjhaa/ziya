import Image from "next/image";
import { FaApple, FaGooglePlay, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";


export default function Hero6() {
    return (
        <div className="relative py-24 overflow-hidden min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Personal AI Twin?</h2>
                        <p className="text-xl text-white/90 mb-8">Your digital life deserves more than scrolls and ads.<br />With Ziya, you reflect, grow, and earn — on your terms.</p>
                        
                        <div className="block lg:hidden mb-8">
                            <div className="relative mx-auto max-w-[320px]">
                                <div>
                                    <div className="z-0 w-full h-full absolute top-0 left-0 p-[8px]">
                                        <div className="rounded-[24px] w-full h-full"></div>
                                    </div>
                                    <Image src="/phoneicon.png" alt="Ziya App Preview" width={320} height={650} className="w-full h-auto relative z-10" priority />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-center lg:justify-start">
                            <a className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg transition-transform hover:-translate-y-1 hover:bg-gray-900" href="#">
                                <FaApple className="mr-2 w-8 h-8" />
                                <div className="flex flex-col leading-none">
                                    <span className="text-xs">Download on the</span>
                                    <span className="font-semibold  text-sm sm:text-xl">App Store</span>
                                </div>
                            </a>
                            
                            <a className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg transition-transform hover:-translate-y-1 hover:bg-gray-900" href="#">
                                <FaGooglePlay className="mr-2 w-8 h-8" />
                                <div className="flex flex-col leading-none">
                                    <span className="text-xs">Get it on</span>
                                    <span className="font-semibold text-sm sm:text-xl">Google Play</span>
                                </div>
                            </a>
                        </div>
                        
                        <div className="flex text-black items-start justify-center lg:justify-start mt-6 text-sm px-4 lg:px-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock w-4 h-4 md:mr-1 flex-shrink-0 mt-0.5"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> 
                            <span className="italic text-center lg:text-left">Your AI Twin is 100% Private. Own Your Data. Unlock its True Potential.</span>
                        </div>
                    </div>
                    
                    <div className="relative mx-auto max-w-[320px] hidden lg:block">
                        <div>
                            <div className="z-0 w-full h-full absolute top-0 left-0 p-[8px]">
                                <div className="rounded-[40px] w-full h-full"></div>
                            </div>
                            <Image src="/phoneicon.png" alt="Ziya App Preview" width={320} height={650} className="w-full h-auto relative z-10" priority />
                        </div>
                    </div>
                </div>
                        
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/70">
                            <a className="hover:text-white transition-colors" href="#">
                                Privacy Policy
                            </a>
                            <a className="hover:text-white transition-colors" href="#">
                                Terms of Use
                            </a>
                            <a className="hover:text-white transition-colors" href="#">
                                Contact
                            </a>
                            
                            <div className="flex items-center gap-4">
                                <a className="hover:text-white transition-colors" href="#">
                                    <RiTwitterXLine className="h-5 w-5" />
                                </a>
                                
                                <a className="hover:text-white transition-colors" href="#">
                                    <FaLinkedin className="h-5 w-5" />
                                </a>
                                
                                <a className="hover:text-white transition-colors" href="#">
                                    <IoLogoInstagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/70 mt-4">
                            <p>© 2025 Ziya. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}