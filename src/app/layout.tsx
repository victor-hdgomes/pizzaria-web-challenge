import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/theme-provider";
import { Providers } from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzaria - Peça a melhor pizza da cidade",
  description:
    "Peça pizzas deliciosas com entrega rápida na sua casa com a Pizza. Escolha entre diversos sabores e aproveite promoções exclusivas.",
  keywords: [
    "Pizza",
    "pizzaria online",
    "pedido de pizza",
    "entrega de pizza",
    "pizza gourmet",
    "sabores de pizza",
    "promoções de pizza",
    "pizza quente",
    "delivery de pizza",
  ],
  authors: [{ name: "Victor Hugo" }],
  creator: "Pizza",
  openGraph: {
    title: "Pizza - Peça a melhor pizza da cidade",
    description:
      "Descubra nossas pizzas irresistíveis e faça seu pedido online com entrega rápida e prática com a Pizza.",
    siteName: "Pizza",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
