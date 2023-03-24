import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Textarea,
  Input,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import { helpers } from "../helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const router = useRouter();

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPALTE_ID;
  const publicApiKey = process.env.EMAILJS_PUBLIC_KEY;

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    isError: false,
    errorNameMessage: "",
    errorEmailMessage: "",
    errorMessage: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = data;

    if (!data.name) {
      setError({
        ...error,
        isError: true,
        errorNameMessage: "Please enter your name",
      });
    }

    if (!data.email) {
      setError({
        ...error,
        isError: true,
        errorEmailMessage: "Please enter your email address",
      });
    }

    if (!data.message) {
      setError({
        ...error,
        isError: true,
        errorMessage: "Please enter your message",
      });
    }

    if (helpers.validEmail && name && email && message) {
      setError({
        isError: false,
        errorNameMessage: "",
        errorEmailMessage: "",
        errorMessage: "",
      });

      emailjs
        .sendForm(serviceId, templateId, form.current, publicApiKey)
        .then((res) => {
          if (res.status === 200) {
            helpers.alertToastHandling(
              "Thanks for reaching out, your message has been sent. I'll get back to you shortly :)"
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError({
        ...error,
        isError: true,
        errorEmailMessage: "Please enter a valid email",
      });
    }
  };

  const handleChangeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleChangeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handleChangeMessage = (e) => {
    setData({
      ...data,
      message: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <Seo title="Contact" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Contact"
              secondTitle="Freelancer"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/contact?ik-sdk-version=javascript-1.4.3&updatedAt=1669666339518"
              leftSpacing="4"
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
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={4}
              my="10"
              alignItems="center"
            >
              <GridItem>
                <Image
                  src="/contact.svg"
                  alt="contact-hero"
                  w="300px"
                  my={{ base: 10, lg: 10, md: 10, sm: 20, xs: 20 }}
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem
                maxW="md"
                mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
              >
                <Box borderRadius="10px" boxShadow="lg">
                  <form ref={form} onSubmit={sendEmail}>
                    <VStack p="10">
                      <FormControl
                        isRequired={error.isError}
                        isInvalid={error.isError}
                      >
                        <FormLabel htmlFor="Name">Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          value={data.name}
                          variant="filled"
                          placeholder="John Doe"
                          required
                          onChange={handleChangeName}
                        />
                        {error.isError ? (
                          <FormErrorMessage>
                            {error.errorNameMessage}
                          </FormErrorMessage>
                        ) : (
                          <p>{error.isError}</p>
                        )}
                      </FormControl>

                      <FormControl
                        isRequired={error.isError}
                        isInvalid={
                          error.isError && error.errorEmailMessage.length === 0
                        }
                      >
                        <FormLabel htmlFor="Email">Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          variant="filled"
                          placeholder="johndoe@gmail.com"
                          required
                          value={data.email}
                          onChange={handleChangeEmail}
                        />
                        {error.isError ? (
                          <FormErrorMessage>
                            {error.errorEmailMessage}
                          </FormErrorMessage>
                        ) : (
                          <></>
                        )}
                      </FormControl>

                      <FormControl
                        isRequired={error.isError}
                        isInvalid={
                          error.isError && error.errorMessage.length === 0
                        }
                      >
                        <FormLabel htmlFor="Message">Message</FormLabel>
                        <Textarea
                          name="message"
                          id="message"
                          variant="filled"
                          placeholder="Hey there! Let's connect"
                          required
                          value={data.message}
                          onChange={handleChangeMessage}
                        />
                        {error.isError ? (
                          <FormErrorMessage>
                            {error.errorMessage}
                          </FormErrorMessage>
                        ) : (
                          <></>
                        )}
                      </FormControl>

                      <Button
                        w="full"
                        my="4"
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        _focus={{ transform: "scale(1.02)" }}
                      >
                        Send email
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </GridItem>
            </Grid>
          </BaseLayout>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
