import "./globals.css";
import ScrollContext from "components/SmoothScroll";
import Navbar from "components/navbar";

export const metadata = {
  title: "Autones",
  description: "Tractari auto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-accent">
        <Navbar />
        <ScrollContext>{children}</ScrollContext>
      </body>
    </html>
  );
}
