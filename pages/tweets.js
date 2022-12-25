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
      <Seo title="Tweets | Ayush Soni" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Tweets"
              secondTitle="Twitter"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/notion?ik-sdk-version=javascript-1.4.3&updatedAt=1669666487240"
            />
            <Box my="14">
              <iframe
                id="wallsio-iframe"
                src="https://my.walls.io/t5wvj?nobackground=1&amp;show_header=0"
                style={{
                  border: 0,
                  height: "800px",
                  width: "100%",
                }}
                loading="lazy"
                title="My social wall"
              ></iframe>
            </Box>
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
