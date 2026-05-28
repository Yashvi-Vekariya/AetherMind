import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AetherMind | Cognitive AI Operating Interface",
  description: "Autonomous Cognitive Enterprise Intelligence Infrastructure"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

