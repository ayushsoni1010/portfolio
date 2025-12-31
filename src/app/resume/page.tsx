import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or view Ayush Soni's resume",
};

/**
 * Resume page component
 * Server component for optimal performance
 */
const Resume = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="https://ayushsoni1010.com/resume/resume.pdf"
        width="100%"
        height="100%"
        title="Ayush Soni Resume"
      />
    </div>
  );
};

export default Resume;


