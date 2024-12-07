import { Fragment } from "react";
import Seo from "../components/Seo";

const Resume = () => {
  return (
    <Fragment>
      <Seo title="Resume" />
      <div style={{ height: "100vh" }}>
        <iframe
          src="https://ayushsoni1010.com/resume/resume.pdf"
          width="100%"
          height="100%"
        />
      </div>
    </Fragment>
  );
};

export default Resume;
