import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderComponents from "@/components/HeaderComponents/HeaderComponents";
import FooterSectionComponents from "@/components/FooterSectionComponents/FooterSectionComponents";

const geistSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-geist-sans",
});
export const metadata: Metadata = {
  title: "arch - architecture",
  description: "architecture and design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <HeaderComponents />
        {children}
        <FooterSectionComponents />
      </body>
    </html>
  );
}
