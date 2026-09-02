import { Figtree } from "next/font/google";
import "./globals.css";
import Background from "../components/ui/Background";
import { Toaster } from "sonner";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ariel Martinez",
  description: "Portfolio 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${figtree.className} antialiased`}>
        <Background>
          {children}
          <Toaster />
        </Background>
      </body>
    </html>
  );
}
