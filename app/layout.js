import "./globals.css";
import ScrollContext from "components/SmoothScroll";

export const metadata = {
  title: "Autones",
  description: "Tractari auto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary">
        <ScrollContext>{children}</ScrollContext>
      </body>
    </html>
  );
}
