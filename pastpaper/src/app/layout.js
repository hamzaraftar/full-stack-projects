import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PaperVault",
  description:
    "Find past exam papers from a wide range of subjects, grades, and institutions on PaperVault. Our platform helps students easily access previous exam papers for study and practice, supporting effective exam preparation. Whether you are revising for upcoming tests or practicing with real questions, PaperVault provides a centralized, reliable source for past papers from top institutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          height={3}
          color="#0000FF"
          speed={100}
          showSpinner={false}
        />
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
