import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excolutus – Coming Soon",
  description: "Refined Innovation in Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 font-sans text-[#1E1E2F]">
        {children}
      </body>
    </html>
  );
}
