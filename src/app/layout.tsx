import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chewy&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
