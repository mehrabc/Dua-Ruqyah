import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import SearchSideBar from "@/components/SearchSideBar";
import SettingsSideBar from "@/components/SettingsSideBar"
import { RouteTransitionBar } from "@/components/RouteTransitionBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Duas's Excellence - Best Islamic Duas | duaruqyah.com",
  description: "Read the best Islamic duas for Dua's Excellence on Dua Ruqyah. Learn the importance of Masnoon Duas in Islam for a closer connection to Allah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen bg-background ">

        <SideBar />

        {/* Main Layout Area (to the right of left sidebar) */}
        <div className="lg:ml-[68px] flex flex-col min-h-screen">
          <NavBar />
          <div className="flex flex-1">

            <main className="flex-1 ">
              <RouteTransitionBar />
              {children}
            </main>
            <SettingsSideBar />
          </div>
        </div>
      </body>
    </html>
  );
}
