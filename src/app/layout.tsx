import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sirowich Physics Project 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="tracking-tighter">
        {children}
        <div className="mt-20 ml-20 mr-20 border-t-[1px] mb-20 border-t-gray-300 block pt-2 text-sm text-gray-400">
          <a href="https://github.com/willyl3e/physics">See the Github repository</a>
        </div>
      </body>
    </html>
  );
}
