"use client";
import { client } from "@/api/client";
import { ApolloProvider } from "@apollo/client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloProvider client={client}>
      <body className={inter.className}>{children}</body>
    </ApolloProvider>
  );
}
