import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const WorkSans= localFont ({
src:[
{
  path:"./fonts/WorkSans-Black.ttf",
  weight:"900",
  style:"normal",

},
{
  path:"./fonts/WorkSans-ExtraBold.ttf",
  weight:"800",
  style:"normal",

},{
  path:"./fonts/WorkSans-Bold.ttf",
  weight:"700",
  style:"normal",

},{
  path:"./fonts/WorkSans-SemiBold.ttf",
  weight:"600",
  style:"normal",

},{
  path:"./fonts/WorkSans-Medium.ttf",
  weight:"500",
  style:"normal",

},{
  path:"./fonts/WorkSans-Regular.ttf",
  weight:"400",
  style:"normal",

},
],
variable:"--font-work-sans",
})

export const metadata: Metadata = {
  title: "pitchdekho",
  description: "Pitch dekho is a platform for startup founders to pitch their ideas and get feedback from investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={WorkSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
