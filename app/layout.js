import MainLayout from "@/components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Lugha Tausi Portfolio",
  description:
    "Meet the team and people behind Lugha Tausi. A Revolutionary Kiswahili Programming Language",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
