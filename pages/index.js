import Head from "next/head";
import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import VoxelDogLoader from "../components/DevDog/blender-dog";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ayush's portfolio website" />
        <meta name="author" content="Ayush Soni" />
        <meta name="author" content="ayushsoni1010" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Ayush Soni" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ayushsoni1010" />
        <meta name="twitter:creator" content="@ayushsoni1010" />
        <meta
          name="twitter:image"
          content="https://ayushsoni1010.com/profile.jpg"
        />
        <meta property="og:site_name" content="Ayush Soni" />
        <meta name="og:title" content="Ayush Soni" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ayushsoni1010.com/developer.png"
        />
        <title>Ayush Soni | Portfolio</title>
      </Head>
      <Box>
        <Header />
        <Hero />
      </Box>
    </div>
  );
}
