import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

// eslint-disable-next-line react/display-name
export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={["-20px", "-60px", "-120px"]}
    mb={["-40px", "-140px", "-200px"]}
    w={{ base: [280, 480, 640], md: [280, 480, 640], sm: [280, 400, 600] }}
    h={{ base: [280, 480, 640], md: [280, 480, 640], sm: [280, 500, 600] }}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
