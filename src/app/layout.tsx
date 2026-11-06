import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileBar } from "@/components/mobile-bar";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  verification: { google: "PWc5EJfIDbUglRYIyeozijrn9mJuDf--Ux6kGl-VPps" },
  openGraph: { type: "website", locale: "id_ID", siteName: site.name },
  twitter: { card: "summary_large_image" },
  title: {
    template: `%s | ${site.name}`,
    default: `${site.name}, konsultan pajak Jabodetabek`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${montserrat.variable} ${jakarta.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <Header />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
