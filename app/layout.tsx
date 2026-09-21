import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "HM Facial Aesthetics Clinic", description: "Healthier You. Brighter Tomorrow." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
