import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import"./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/toast";
import { constructMetadata, generateOrganizationSchema } from "@/lib/seo/metadata";

const inter = Inter({
 subsets: ["latin"],
 variable:"--font-sans",
 display:"swap",
});

const jetbrainsMono = JetBrains_Mono({
 subsets: ["latin"],
 variable:"--font-mono",
 display:"swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-foreground`}>
 <ToastProvider>
 <Navbar />
 <main className="flex-1">{children}</main>
 <Footer />
 </ToastProvider>
 </body>
 </html>
 );
}
