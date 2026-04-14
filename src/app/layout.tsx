import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AuraEngine from "@/components/AuraEngine";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Himanshi Gupta | Redefining Healthcare Experience",
  description: "Elite Ayurvedic Physician dedicated to modern medical innovation and care.",
  authors: [{ name: "Karann Mishra" }, { name: "AURXON" }],
  creator: "AURXON",
  publisher: "Dr. Himanshi Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-cyan-500/30`.trim()}>
        <ThemeProvider>
          <div className="noise-overlay" />
          <SmoothScroll>
            <AuraEngine />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>

    </html>
  );
}
