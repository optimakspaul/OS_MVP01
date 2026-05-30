import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimaks MVP01",
  description: "Optimaks MVP01 app foundation",
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
