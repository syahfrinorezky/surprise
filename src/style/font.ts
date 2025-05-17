import { Righteous, Poppins, Inter } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-righteous",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export { righteous, poppins, inter };
