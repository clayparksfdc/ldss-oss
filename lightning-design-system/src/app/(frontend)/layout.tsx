import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { DynamicSidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { getNavigation } from "@/lib/navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightning Design System 2 - Salesforce UX",
  description: "The Lightning Design System helps you create the world's best enterprise app experiences.",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get navigation from file-based content
  const navigation = getNavigation();

  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} antialiased bg-white`} id="frontend-app">
        {/* Top header bar */}
        <Header />
        <div className="flex min-h-[calc(100vh-36px)] bg-white">
          <DynamicSidebar navigation={navigation} />
          <div className="flex-1 flex flex-col bg-white overflow-auto">
            <main className="flex-1 px-4 sm:px-6 md:px-12 py-0 bg-white">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
