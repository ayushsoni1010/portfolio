import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Seo from "../components/SEO";

export default function Home() {
  return (
    <React.Fragment>
      <Seo title="Portfolio | Ayush Soni" />
      <Box>
        <Header />
        <Hero />
      </Box>
    </React.Fragment>
  );
}
