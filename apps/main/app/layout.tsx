import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@repo/ui/components/themeProvider";
import { ClerkProvider } from "@clerk/nextjs";

import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Typing Speed Test | Improve Your WPM with Fast & Free Online Typing Test",
  description:
    "Test your typing speed & accuracy with our free online typing test. Improve WPM and boost productivity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <Nav />
            <div className="h-16 w-full"></div>

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
