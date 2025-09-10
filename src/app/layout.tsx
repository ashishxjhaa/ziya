import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SplashLayout } from "@/components/SplashLayout";
import { AnimatedLayout } from "@/components/AnimatedLayout";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden antialiased`}
      >
        <SplashLayout>
          <AnimatedLayout>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
            >
             {children}
            </ThemeProvider>
          </AnimatedLayout>
        </SplashLayout>
      </body>
    </html>
  );
}
