import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SplashLayout } from "@/components/SplashLayout";
import { AnimatedLayout } from "@/components/AnimatedLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziya - Health & fitness with AI",
  description: "AI-powered health and fitness app to track workouts, monitor nutrition, and keep your progress on track.",
  icons: {
    icon: "/logo.png"

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashLayout>
          <AnimatedLayout>
            {children}
          </AnimatedLayout>
        </SplashLayout>
      </body>
    </html>
  );
}
