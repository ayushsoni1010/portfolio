import { redirect } from "next/navigation";
import { profiles } from "@/utils/profiles";

/**
 * Generate static params for profile redirects
 * Optimized for Next.js 16 App Router
 */
export async function generateStaticParams() {
  return profiles.map((data) => ({
    slug: data.name,
  }));
}

/**
 * Multi-profile redirect page
 * Redirects to external profile links based on slug
 * Uses Next.js 16 async params pattern
 */
const MultiProfiles = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const profile = profiles.find((p) => p.name === slug);

  if (profile) {
    redirect(profile.link);
  }

  return null;
};

export default MultiProfiles;
