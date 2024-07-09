import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tailwind spotyfi",
  description: "aprendendo tailwind na prática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-800 text-zinc-50 h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-grow pb-56">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
