import "./globals.css";

export const metadata = {
  title: "Tech Startup",
  description: "A new capability for your jobs-to-be-done",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
