import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tab Scheduler – Open Browser Tabs Automatically",
  description: "Schedule browser tabs to open at designated times. Perfect for standups, meetings, and time-blocked work sessions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96f12f96-cf9a-4e9e-ba97-ec59ab243138"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
