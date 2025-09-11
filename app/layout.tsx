import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excolutus – Coming Soon",
  description: "Refined Innovation in Technology",
  icons: {
    icon: "/favicon.png",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
      
      </head>
      <body className="h-full m-0 font-sans text-[#1E1E2F]">
        {children}
      </body>
    </html>
  );
}
