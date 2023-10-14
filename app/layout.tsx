import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontNova, fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "font-sans max-h-screen bg-black antialiased selection:bg-success box-border",
          fontSans.variable,
          fontNova.variable
        )}
      >
        {/* <div className="absolute overflow-hidden bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute overflow-hidden left-0 right-0 top-[-10%] h-[100vh] w-[100vw] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,rgba(0,218,106,0.28),#000)]"></div>
 */}
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative w-full h-full">
            <div className="flex flex-col gap-4">
              <Navbar />
              <main className="w-full px-6">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
