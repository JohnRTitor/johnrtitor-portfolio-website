import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JohnRTitor (Masum Reza) - Portfolio",
  description: "Personal portfolio website of Masum Reza, a Web3 and React developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistMono.variable} antialiased`}>
        {" "}
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
