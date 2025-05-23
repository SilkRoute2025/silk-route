import type { Metadata } from "next";
import { Geist, Geist_Mono, Golos_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Banner from "@/components/Banner";

const golos = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Silk Route",
  description: "Quality clothing, scarves and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en" suppressHydrationWarning>
        <NuqsAdapter>
          <Suspense>
            <body className={` ${golos.variable} antialiased relative`}>
              <Navbar />
              {children}
              <Banner />
              <Toaster />
              <Footer />
            </body>
          </Suspense>
        </NuqsAdapter>
      </html>
    </ReactLenis>
  );
}
