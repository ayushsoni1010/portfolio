import { VStack, Button } from "@chakra-ui/react";
import BaseText from "@/components/Wrapper/BaseText";
import BaseLayout from "@/components/Wrapper/BaseLayout";
import PageLayout from "@/components/layouts/PageLayout";
import { profiles } from "@/utils/profiles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "Connect with Ayush Soni on various platforms and social media",
};

/**
 * Links page component
 * Server component for optimal performance
 */
const Links = () => {
  return (
    <PageLayout>
      <BaseLayout>
        <BaseText
          firstTitle="Links"
          secondTitle="Connect"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/notion?updatedAt=1669666487240"
          leftSpacing={4}
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
    </PageLayout>
  );
};

export default Links;
