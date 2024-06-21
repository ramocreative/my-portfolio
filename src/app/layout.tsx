import Navbar from "@/components/Navbar";
import "./globals.css";
import Template from "./template";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Ramo Creative",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Template>{children}</Template>
        <Footer />
      </body>
    </html>
  );
}
