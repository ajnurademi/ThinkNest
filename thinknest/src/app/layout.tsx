import { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/NavBar/app-sidebar";
import Header from "@/components/Header/Header"

export const metadata: Metadata = {
  title: "ThinkNest",
  description: "Your Brain's Best Friend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"
        />
      </head>
      <body>
        <SidebarProvider>
          <div className="grid grid-cols-[auto,1fr] w-full">
            <AppSidebar/>
            <main className="felx felx-col h-screen overflow-auto">
              <SidebarTrigger />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}


