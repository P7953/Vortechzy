import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://vortechzy.com"), // Placeholder URL, can be updated
  title: {
    default: "Vortechzy",
    template: "%s | Vortechzy",
  },
  description: "Vortechzy pioneers the future of digital experiences with cutting-edge technology and sophisticated design. A new capability for your jobs-to-be-done.",
  keywords: ["Software Development", "Web Development", "UI/UX Design", "AI Services", "Digital Products", "Vortechzy", "Web Agency", "App Development"],
  authors: [{ name: "Vortechzy", url: "https://vortechzy.com" }],
  creator: "Vortechzy",
  publisher: "Vortechzy",
  openGraph: {
    title: "Vortechzy",
    description: "Vortechzy pioneers the future of digital experiences with cutting-edge technology and sophisticated design.",
    url: "https://vortechzy.com",
    siteName: "Vortechzy",
    images: [
      {
        url: "/logo.png", // Or a specific OG image pathway
        width: 1200,
        height: 630,
        alt: "Vortechzy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortechzy",
    description: "Vortechzy pioneers the future of digital experiences with cutting-edge technology and sophisticated design.",
    images: ["/logo.png"],
    creator: "@vortechzy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
