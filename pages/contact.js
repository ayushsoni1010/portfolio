import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";
import Seo from "../components/Seo";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_9zkhwz8",
        e.target,
        "user_XUVi6Y9T6XwQDcIUhmykY"
      )
      .then((res) => {
        if (res.status === 200)
          alert("Thank You! Your message has been sent !");
        else alert("Error !");
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  const validEmail = () => {
    let valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let specials = /[*|\":<>[\]{}`\\()';&$]/;

    return valid.test(email) && !specials.test(email);
  };

  return (
    <React.Fragment>
      <Seo title="Contact | Ayush Soni" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Contact"
              secondTitle="Freelancer"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/contact_ohepgZrZ9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666637958913"
            />
            <Grid
              display={{
                base: "grid",
                md: "grid",
                lg: "grid",
                sm: "block",
                xs: "block",
              }}
              templateColumns={{
                md: "repeat(5, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={4}
              my="5"
            >
              <GridItem colSpan={2}>
                <Image
                  src="/contact.svg"
                  alt="Hero"
                  w="320px"
                  my="10"
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem
                colStart={3}
                colEnd={6}
                mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
              >
                <Box borderRadius="10px" pt="20" pb="20">
                  <form onSubmit={sendEmail}>
                    <VStack maxW="sm" mx="auto">
                      <FormControl>
                        <FormLabel htmlFor="Email">Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          variant="filled"
                          placeholder="Enter your name"
                          required
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="Email">Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          variant="filled"
                          placeholder="Enter your email"
                          required
                        />
                      </FormControl>

                      <Button
                        w="full"
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        _focus={{ transform: "scale(1.02)" }}
                      >
                        Send
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </GridItem>
            </Grid>
          </BaseLayout>
        </main>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
