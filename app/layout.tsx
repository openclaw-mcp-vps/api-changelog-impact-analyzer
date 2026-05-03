import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Changelog Impact Analyzer — Catch Breaking Changes Before Production",
  description: "Scans your codebase for API usage, compares against changelog updates, and flags breaking changes before they hit production."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="caf9fbf1-2acc-408e-b336-71005eb1275b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
