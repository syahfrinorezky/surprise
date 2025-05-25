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
        {children}
      </body>
    </html>
  );
}
