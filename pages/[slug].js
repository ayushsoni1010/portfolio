import { useEffect } from "react";
import { useRouter } from "next/router";
import { profiles } from "../utils/profiles";
import Seo from "../components/Seo";

const MultiProfiles = () => {
  const router = useRouter();

  useEffect(() => {
    let url;
    profiles.filter((element) => {
      const slug = router.query.slug;
      if (element.name === slug) {
        url = element.link;
        router.push(element.link);
      } else {
        router.replace("/404");
      }
    });
    // unmount
    return () => {
      if (!url) {
        router.replace("/");
      }
    };
  }, [router]);

  return <Seo title="Profiles" />;
};

export default MultiProfiles;
