import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Autones",
  description: "Tractari auto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script
          src="https://kit.fontawesome.com/d2dc86f0b2.js"
          crossorigin="anonymous"
          async
        /> */}
        <Script src="https://kit.fontawesome.com/d2dc86f0b2.js"></Script>
      </head>
      <body className="bg-accent">{children}</body>
    </html>
  );
}
