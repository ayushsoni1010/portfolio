import React from "react";
import { VStack, Button } from "@chakra-ui/react";
import BaseText from "../components/Wrapper/BaseText";
import BaseLayout from "../components/Wrapper/BaseLayout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { profiles } from "../utils/profiles";

const Links = () => {
  return (
    <React.Fragment>
      <Seo title="Links" />
      <header>
        <Header />
      </header>

      <main>
        <BaseLayout>
          <BaseText
            firstTitle="Links"
            secondTitle="Connect"
            textIcon="https://ik.imagekit.io/ayushsoni1010/Website/notion?updatedAt=1669666487240"
            leftSpacing="4"
          />
          <VStack
            spacing={4}
            width={{ base: "sm", lg: "sm", md: "sm", sm: "auto", xs: "auto" }}
            margin={"auto"}
            marginTop={10}
          >
            {profiles.map((item) => {
              return (
                <Button
                  width={"full"}
                  key={item.name}
                  as="a"
                  target="_blank"
                  href={item.link}
                  textAlign={"center"}
                >
                  {item.title}
                </Button>
              );
            })}
          </VStack>
        </BaseLayout>
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Links;
