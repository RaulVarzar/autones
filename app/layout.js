import "./globals.css";

export const metadata = {
  title: "Autones",
  description: "Tractari auto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-base-100">{children}</body>
    </html>
  );
}
