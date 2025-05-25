import { righteous, inter, poppins } from "@/style/font";

import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "antialiased",
          righteous.variable,
          inter.variable,
          poppins.variable
        )}>
        <div className="min-h-screen flex items-center justify-center bg-stone-900 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
