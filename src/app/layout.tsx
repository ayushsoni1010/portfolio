import { cookies } from "next/headers";
import Providers from "./providers";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://ayushsoni1010.com"),
  title: {
    default: "Ayush Soni",
    template: "%s | Ayush Soni",
  },
  description: "Hey! I am Ayush, a full-stack developer from India.",
  authors: [{ name: "Ayush Soni", url: "https://ayushsoni1010.com" }],
  creator: "ayushsoni1010",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushsoni1010.com",
    siteName: "Ayush Soni",
    title: "Ayush Soni",
    description: "Hey! I am Ayush, a full-stack developer from India.",
    images: [
      {
        url: "https://ayushsoni1010.com/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Soni",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@ayushsoni1010",
    creator: "@ayushsoni1010",
    title: "Ayush Soni",
    description: "Hey! I am Ayush, a full-stack developer from India.",
    images: ["https://ayushsoni1010.com/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers cookies={cookieHeader}>{children}</Providers>
      </body>
    </html>
  );
}
