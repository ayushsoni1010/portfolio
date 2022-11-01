import { Box } from "@chakra-ui/react";
import React from "react";
import BaseLayout from "../Wrapper/BaseLayout";
import BaseText from "../Wrapper/BaseText";
import BaseTimelineCard from "../Wrapper/BaseTimelineCard";

const Timeline = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <BaseText
          firstTitle="Featured"
          secondTitle="Timeline"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/featured-timeline_mfh--P4f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667325001664"
        />
        <Box>
          <BaseTimelineCard />
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Timeline;
