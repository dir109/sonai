import "./globals.css";
import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  description: "",
  title: "Webmail Login | IONOS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
