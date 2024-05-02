"use client";
import { useEffect } from "react";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Themesetter from "@/Components/Theme/Themesetter";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <title>SME Health - Get Started</title>
        <meta name="theme-color" content="SME" />
        <link rel="icon" type="image/x-icon" href="/img/logo.jpg" />
      </head>
      <body>
        <Themesetter>{children}</Themesetter>
      </body>
    </html>
  );
}
