import { useEffect } from "react";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

const MultiProfiles = ({ profile }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(profile.link);
  }, [profile, router]);

  return <Seo title={`${profile.title} | Profiles`} />;
};

export async function getStaticPaths() {
  const { profiles } = require("../utils/profiles");

  const paths = profiles.map((data) => ({
    params: {
      slug: data.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { profiles } = require("../utils/profiles");

  let profile = {};
  profiles.map((element) => {
    if (slug === element.name) {
      profile = {
        title: element.title,
        link: element.link,
        slug: element.name,
      };
    }
  });

  return {
    props: {
      profile,
    },
  };
}

export default MultiProfiles;
