import "./globals.css";

export const metadata = {
  title: "mogul",
  description: "모두의 굴, mogul",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
