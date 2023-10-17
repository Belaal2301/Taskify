import { Providers } from "./components/providers";
import { Toaster, toast } from "sonner";
import Header from "./components/header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Taskify",
  description: "Create, organize, and prioritize tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={openSans.className}>
        <Header />
        <Providers>
          {children}
          </Providers>
        <Toaster />
      </body>
    </html>
  );
}
