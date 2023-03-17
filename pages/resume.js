import { Fragment, useEffect } from "react";
import Seo from "../components/Seo";

const Resume = () => {
  useEffect(() => {
    const url = `${window.location.href}/resume.pdf`;
    window.location = url;
    return () => {
      url;
    };
  }, []);
  return (
    <Fragment>
      <Seo title="Resume | Ayush Soni" />
    </Fragment>
  );
};

export default Resume;
