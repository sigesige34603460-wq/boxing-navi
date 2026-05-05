import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ボクシングナビ | 試合速報・選手情報・観戦ガイド",
    template: "%s | ボクシングナビ",
  },
  description: "ボクシングの試合速報、選手プロフィール、初心者向け観戦ガイド、DAZNでの視聴方法まで。井上尚弥など国内外のボクシング情報を毎日更新。",
  keywords: ["ボクシング", "井上尚弥", "試合速報", "DAZN", "ボクシング観戦", "ボクシング初心者"],
  openGraph: {
    siteName: "ボクシングナビ",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6023646963661694"
          crossOrigin="anonymous"
        />
        {/* GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3GNPCVC9LP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3GNPCVC9LP');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
