import React from "react";
import { Box } from "@chakra-ui/react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";

const Blog = () => {
  return (
    <React.Fragment>
      <Box>
        <Seo title="About | Ayush Soni" />
        <Box>
          <header>
            <Header />
          </header>
        </Box>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Blogs"
              secondTitle="Content"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/682ec067-feb6-4dc2-938c-62ffa975eb39_eap6J1QJZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1669664202898"
            />
          </BaseLayout>
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export default Blog;
