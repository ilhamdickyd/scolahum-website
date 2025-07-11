import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SCOLAH-UNAIR Mengajar",
  description: "An organization that operates in the fields of education and humanitarian efforts, committed to creating a positive impact for society.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-arp="">
      <body className={inter.className}>
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
