import PageLayout from "@/components/layouts/PageLayout";
import Hero from "@/components/Hero";
import Home from "@/components/Home";

/**
 * Landing page component
 * Client component for scroll restoration and interactivity
 */
export default function Landing() {
  return (
    <PageLayout>
      <Hero />
      <Home />
    </PageLayout>
  );
}
