import { Righteous, Inter, Poppins } from "next/font/google";
import "./globals.css";

export const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
