// app/layout.js
import { CartProvider } from "./context/context";
import "./globals.css";

export const metadata = {
  title: "Redux Cart",
  description: "Using Redux in Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
