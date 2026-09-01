import RaiseSection from "@/content/home/raise";
import FeatureSections from "@/content/home/features";

export function HomeContent() {
  return (
    <main className="bg-background text-foreground">
      <RaiseSection />
      <FeatureSections />
    </main>
  );
}

export default HomeContent;
