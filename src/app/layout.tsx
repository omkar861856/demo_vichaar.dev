import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../../providers";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/ui/sidebar";
import { CardContent } from "@/components/ui/Card1";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); 

export const metadata: Metadata = {
  title: "vichar.dev dashboard",
  description: "Social media for devs",
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
        <Providers>
          <div className="parentLayout w-full lg:w-11/12">
            <header className="header border-r-2 border-black"><Navbar /></header>
            <div className="left-side"><Sidebar /></div>
            <main className="main p-5">{children}</main>
            <div className="right-side hidden lg:block">
              <CardContent className="w-full h-60 sticky top-[40px]">
                right side
              </CardContent>
            </div>
            <footer className="footer text-center">
              Made with ❤ in India and in harmony with 🕊🌳✨ (Nature)
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
