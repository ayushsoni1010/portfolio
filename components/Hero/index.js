import React from "react";
import dynamic from "next/dynamic";
import VoxelDogLoader from "../DevDog/voxel-dog";
import BaseLayout from "../../layouts/BaseLayout";
import { Box, Button } from "@chakra-ui/react";

const LazyVoxelDog = dynamic(() => import("../DevDog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Hero = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <Box>
          <Button>Hey I&apos;m </Button>
        </Box>
        <LazyVoxelDog />
      </BaseLayout>
    </React.Fragment>
  );
};

export default Hero;
