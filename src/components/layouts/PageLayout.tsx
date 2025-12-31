import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

/**
 * Shared page layout component for consistent structure across pages
 * Reduces code duplication and ensures consistent Header/Footer rendering
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}

