import "./globals.css";
import ScrollContext from "components/SmoothScroll";

export const metadata = {
  title: "Autones",
  description: "Tractari auto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollContext>{children}</ScrollContext>
      </body>
    </html>
  );
}
