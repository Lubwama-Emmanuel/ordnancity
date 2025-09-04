import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ordnancity - Future Heritage Clothing | Ugandan Youth Culture",
  description:
    "Limited edition avant-garde streetwear documenting Ugandan youth culture. Eco-conscious craftsmanship, upcycled materials from Owino traders, cultural collaborations. Founded by Zoora and Atta in 2023.",
  keywords:
    "Ugandan fashion, youth culture, limited drops, upcycled clothing, Owino market, Kiira Studios, cultural collaborations, diaspora fashion, Kampala streetwear, eco-conscious fashion, Mbuya Collection",
  authors: [{ name: "Ordnancity" }],
  openGraph: {
    title: "Ordnancity - Future Heritage Clothing",
    description:
      "Limited edition avant-garde streetwear documenting Ugandan youth culture through eco-conscious craftsmanship",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
