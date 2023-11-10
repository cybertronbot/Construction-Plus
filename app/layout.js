import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: "400",
});

export const metadata = {
  title: "Construction Plus",
  description: "Crafting Excellence,One Project at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className,poppins.variable)}>{children}</body>
    </html>
  );
}
