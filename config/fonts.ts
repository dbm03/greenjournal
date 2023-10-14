import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Fjalla_One,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontNova = Fjalla_One({
  subsets: ["latin"],
  variable: "--font-nova",
  weight: "400",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
