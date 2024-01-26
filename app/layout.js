import "./globals.css";

export const metadata = {
  title: "The Garden Theme",
  description: "A greenish color theme for your digital workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
