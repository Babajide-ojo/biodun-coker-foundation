import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Biodun Coker</title>
        <meta
          name="description"
          content="This is the official website of Biodun Coker."
        />
        <meta
          name="google-site-verification"
          content="NCLoMCFqZFLXngXOBzvIjr_vTTz9Sc6Lv1S-6KIEV1Q"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
