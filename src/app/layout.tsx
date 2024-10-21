import type { Metadata } from "next";
// import { Ubuntu } from "next/font/google"; // Importing the font correctly
import "./globals.css"; // Importing global CSS styles
import Header from "@/components/header";

// Loading the Ubuntu font family from Google Fonts
// const ubuntu = Ubuntu({ weight:'300',subsets:['latin'],variable:'--font_ubuntu' });

export const metadata: Metadata = {
  title: "My Next App", // Updated title for a more descriptive name
  description: "This is my awesome Next.js app", // Updated description for clarity
};

// RootLayout component that wraps the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // React type for the children prop
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
    
      <body className={""
        // ubuntu.className
        }>
      <Header></Header>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
