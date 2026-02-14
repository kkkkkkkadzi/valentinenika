import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Игруля для любимого айпадкида",
  description:
    "Быстро заходи!!!",
  keywords: [
    "Игра на день святого валентина",
    "романтическая игра",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
