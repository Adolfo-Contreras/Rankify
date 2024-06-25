import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import {Noto_Sans_JP} from 'next/font/google'

export const metadata: Metadata = {
  title: "Rankify",
  description: "Rankify is a web application that helps you rank your songs in Spotify.",
};

const notoSansJP = Noto_Sans_JP({subsets: ['latin'], weight: ['400', '700']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={notoSansJP.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
