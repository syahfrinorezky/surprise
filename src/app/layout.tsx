import { righteous, poppins, inter } from "@/style/font";
import "../style/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} ${poppins.variable} ${inter.variable} antialiased`}>
        <div className="font-secondary">{children}</div>
      </body>
    </html>
  );
}
