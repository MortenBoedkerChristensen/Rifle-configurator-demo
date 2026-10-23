import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./homepage.css";

export const metadata: Metadata = {
  title: "SIGTE — jagt & optik",
  description:
    "Dansk jagtudstyr med konfigurator i 1:1 målestok. Vælg riffel, montage og kikkert — og se, om delene passer, før du køber.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
