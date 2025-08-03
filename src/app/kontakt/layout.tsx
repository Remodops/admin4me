import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – admin4me",
  description: "So erreichen Sie uns: E-Mail, Telefon, Adresse. IT-Administration und Support in Moringen und Umgebung.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 