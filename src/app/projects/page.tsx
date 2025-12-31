import BaseLayout from "@/components/Wrapper/BaseLayout";
import BaseText from "@/components/Wrapper/BaseText";
import PageLayout from "@/components/layouts/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects and applications by Ayush Soni",
};

/**
 * Projects page component
 * Server component for optimal performance
 */
const Projects = () => {
  return (
    <PageLayout>
      <BaseLayout>
        <BaseText
          firstTitle="Projects"
          secondTitle="Softwares"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/projects?ik-sdk-version=javascript-1.4.3&updatedAt=1669666353424"
        />
      </BaseLayout>
    </PageLayout>
  );
};

export default Projects;
