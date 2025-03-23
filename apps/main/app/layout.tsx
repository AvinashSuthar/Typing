import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@repo/ui/components/themeProvider";
import {ClerkProvider} from "@clerk/nextjs";

import Nav from "@/components/Nav";
import Script from "next/script";
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
        "Online Typing Test | Avinash Suthar",
    description:
        "Test your typing speed & accuracy with our free online typing test. Improve WPM and boost productivity!",
    keywords:
        "Avinash Suthar, Software Developer, Typing test , Online Typing Test , Speed Test , typing speed, Learn Typing",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>

            <head>
                <link rel="canonical" href="https://typing.avinashsuthar.in" />

                {/* JSON-LD Schema.org for SEO */}
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Website",
                            name: "Your Typing Test Website",
                            url: "https://typing.avinashsuthar.in",
                            description: "Improve your typing speed with our free online typing test. Track progress, accuracy, and WPM.",
                            sameAs: [
                                "https://www.typingtest.com",
                                "https://www.speedtypingonline.com",
                                "https://onlinetyping.org",
                                "https://www.monkey-type.org",
                                "https://monkeytype.com",
                                "https://github.com/AvinashSuthar",
                                "https://www.linkedin.com/in/avinash-suthar-970a56230",
                                "https://www.instagram.com/avinashsutharr",
                                "https://x.com/avinash__suthar",
                            ],
                            author: {
                                "@type": "Person",
                                name: "Avinash Suthar",
                                url: "https://avinashsuthar.in",
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Online Typing Test",
                                url: "https://typing.avinashsuthar.in",
                            }
                        }),
                    }}
                />

                ̰
            </head>


            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                // disableTransitionOnChange
            >
                <Nav/>
                <div className="h-16 w-full"></div>

                {children}
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}
