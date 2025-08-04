import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt & Beratung – admin4me Moringen",
  description: "Kontaktieren Sie admin4me für professionellen IT-Support in Moringen. Telefon: 05554-7249 063. Kostenlose Beratung über unser Kontaktformular anfragen!",
  keywords: "IT-Support Kontakt, admin4me Moringen, EDV-Beratung, IT-Service Telefon, Computer-Reparatur Moringen, Netzwerk-Support",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 