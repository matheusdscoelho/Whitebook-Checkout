import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/Query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar/Navbar";
import StyledComponentsRegistry from "@/lib/Registry";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "White-Book Checkout",
  description: "White-Book checkout app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${dmSans.variable} font-work-sans`}>
        <StyledComponentsRegistry>
          <QueryProvider>
            <Navbar />
            <main>{children}</main>
            <ToastContainer />
          </QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
