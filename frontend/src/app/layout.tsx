import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ApolloWrapper from "@/lib/apollo-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Web App",
  description: "Welcome to Blog Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ApolloWrapper>{children}</ApolloWrapper>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
