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
    className="blender-dog"
    m="auto"
    mt={{ md: "-120px", lg: "-120px", sm: "0px", xs: "0px" }}
    w={{
      md: 600,
      lg: 600,
      sm: 400,
      xs: 300,
    }}
    h={{
      md: 640,
      lg: 640,
      sm: 400,
      xs: 300,
    }}
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
