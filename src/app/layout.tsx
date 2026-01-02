import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hani Mahdi - Data Scientist Portfolio",
  description: "Hani Mahdi - Computer Science student and aspiring Data Scientist passionate about machine learning and data analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
