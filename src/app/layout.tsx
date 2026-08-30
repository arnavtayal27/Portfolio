import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnav Tayal — Cloud & DevOps Engineer | AWS, Kubernetes & Cloud Infrastructure",
  description: "Arnav Tayal is a Cloud & DevOps Engineer specializing in AWS, Kubernetes, Docker, CI/CD, Terraform, GitOps, cloud automation and cost optimization.",
  openGraph: {
    title: "Arnav Tayal | Cloud & DevOps Engineer",
    description: "AWS · Kubernetes · Docker · CI/CD | Infrastructure · Automation · GitOps",
    url: "https://arnavtayal.co.in",
    siteName: "Arnav Tayal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnav Tayal, Cloud & DevOps Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-[#0f1115] text-[#eceff4] selection:bg-cyan-900/40`}
      >
        <div className="min-h-screen flex flex-col font-sans">
          {/* Header/Nav will go here */}
          <main className="flex-grow">
            {children}
          </main>
          {/* Footer will go here */}
        </div>
      </body>
    </html>
  );
}
