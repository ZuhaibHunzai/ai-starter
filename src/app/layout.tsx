import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import bk from "../../public/assets/BK_Light.png";
import bk1 from "../../public/assets/BK_Light2.png";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Starter",
  description: "................................",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-[#111116]  relative  ">
        <Toaster position="top-center" />
        <Providers>
          <div className="">
            <Image
              src={bk}
              width={400}
              height={300}
              alt="img"
              className="absolute  hidden lg:block top-2/4"
            />
            <Image
              src={bk}
              width={400}
              height={300}
              alt="img"
              className=" hidden lg:block absolute  md:top-52 left-3/4 h-72 w-72 rounded-full"
            />
            <Image
              src={bk1}
              width={400}
              height={100}
              alt="img"
              className="  hidden  lg:block absolute top-3/4  left-2/3	 h-64 w-64 rounded-full"
            />
            <Header />

            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
