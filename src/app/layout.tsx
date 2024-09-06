import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Sample",
  description: "Next Sample: main features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <Sidebar />
        <div className="bg-gray-100 pl-0 md:ml-64 min-h-screen">
          <Navbar />
          <div className="p-6 bg-gray-100">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
