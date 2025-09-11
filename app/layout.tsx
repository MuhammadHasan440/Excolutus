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
    <html lang="en">
      <body
        className="min-h-screen flex flex-col font-sans text-[#1E1E2F] 
                   bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      >
        <main className="flex-grow flex flex-col justify-center items-center px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
