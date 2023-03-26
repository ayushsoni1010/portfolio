import { useRouter } from "next/router";
import { profiles } from "../utils/profiles";
import Seo from "../components/Seo";

const MultiProfiles = () => {
  const router = useRouter();
  profiles.filter((element) => {
    if (element.name === router.query.slug) {
      router.push(element.link);
    }
  });

  return <Seo title="Profiles" />;
};

export default MultiProfiles;
