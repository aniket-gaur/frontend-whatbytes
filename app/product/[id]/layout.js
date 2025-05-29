"use client";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <html lang="en">
      <body>
        <Navbar onSearch={setSearchTerm} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
