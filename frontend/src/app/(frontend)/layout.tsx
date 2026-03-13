import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { DynamicSidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import LegacyComponentScope from "@/components/LegacyComponentScope";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import StorybookThemeToggle from "@/components/markdown/StorybookThemeToggle";
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
  const navigation = getNavigation();

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              var dark = theme === 'dark' || (theme === 'system' || !theme) && window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.classList.toggle('dark', dark);
              document.documentElement.classList.toggle('light', !dark);
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className={`${inter.variable} antialiased`} id="frontend-app" style={{ backgroundColor: "var(--background)" }}>
        <ThemeProvider>
          <LegacyComponentScope />
          <StorybookThemeToggle />
          <Header />
          <div className="flex min-h-[calc(100vh-36px)]" style={{ backgroundColor: "var(--background)" }}>
            <DynamicSidebar navigation={navigation} />
            <div className="flex-1 flex flex-col overflow-auto" style={{ backgroundColor: "var(--background)" }}>
              <main className="flex-1 px-4 sm:px-6 md:px-12 py-0" style={{ backgroundColor: "var(--background)" }}>
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
