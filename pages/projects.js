import React from "react";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";
import Seo from "../components/Seo";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <React.Fragment>
      <Seo title="Projects" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Projects"
              secondTitle="Softwares"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/projects?ik-sdk-version=javascript-1.4.3&updatedAt=1669666353424"
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

export default Projects;
