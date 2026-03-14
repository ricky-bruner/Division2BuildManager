import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Division 2 Build Planner",
  description: "Create and save your Division 2 builds",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#060b10] text-[#c8d8e8] font-rajdhani">
        {children}
      </body>
    </html>
  );
}
