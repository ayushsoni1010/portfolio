import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Home from "../components/Home";
import Footer from "../components/Footer";
import BaseLayout from "../components/Wrapper/BaseLayout";

export default function Landing() {
  return (
    <React.Fragment>
      <Seo title="Portfolio | Ayush Soni" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <Hero />
          <Home />
        </main>
        <footer>
          <BaseLayout>
            <Footer />
          </BaseLayout>
        </footer>
      </Box>
    </React.Fragment>
  );
}
