import './globals.css'; // Import your global CSS file
import React from "react";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
