import React from "react";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";

const Projects = () => {
  return (
    <React.Fragment>
      <Header />
      <BaseLayout>
        <BaseText
          firstTitle="Projects"
          secondTitle="Softwares"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/about_Ok4v5_qG0V.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666550607854"
        />
      </BaseLayout>
    </React.Fragment>
  );
};

export default Projects;
