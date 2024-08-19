/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter'});
export const metadata: Metadata = {
  title: "Raduno",
  description: "Events and everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
