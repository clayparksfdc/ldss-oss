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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var dark = document.documentElement.classList.contains('dark');
              var theme = dark ? 'dark' : 'light';
              document.querySelectorAll('.storybook-embed').forEach(function(embed){
                var btn = embed.querySelector('.storybook-theme-toggle');
                var iframe = embed.querySelector('iframe');
                if(!btn || !iframe) return;
                btn.setAttribute('data-theme', theme);
                embed.setAttribute('data-sb-dark', theme === 'dark' ? 'true' : 'false');
                var lightIcon = btn.querySelector('.storybook-theme-icon-light');
                var darkIcon = btn.querySelector('.storybook-theme-icon-dark');
                if(lightIcon) lightIcon.style.display = theme === 'light' ? '' : 'none';
                if(darkIcon) darkIcon.style.display = theme === 'dark' ? '' : 'none';
                var baseUrl = embed.getAttribute('data-storybook-url') || '';
                if(baseUrl){
                  var sep = baseUrl.indexOf('?')>=0 ? '&' : '?';
                  iframe.src = theme === 'dark' ? baseUrl + sep + 'globals=theme:dark;backgrounds.value:!hex(333333)' : baseUrl;
                }
              });
            })();`,
          }}
        />
      </body>
    </html>
  );
}
