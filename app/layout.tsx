import type { Metadata } from "next";
import "./globals.css";
import "@/public/fonts/fonts.css";
import { Analytics } from "./components/Analytics";
export const metadata: Metadata = {
  title:
    "Upgrade.chat - Black Friday Sale | Up to 65% OFF + Up to $500 Cash Bonuses",
  description:
    "Don't miss our biggest deal ever! Get up to 65% OFF + Up to $500 Cash Bonuses this Black Friday. Limited time offer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
