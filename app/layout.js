import localFont from "next/font/local";
import "./globals.css";
import {ReactLenis} from './utils/lenis'


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
  title: "Ochi Clone - By Sathwik",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
      <body
        className={`  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
