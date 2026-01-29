import {
  Hero,
  WeAreHere,
  Stats,
  ConveyorBelt,
  ServicesPreview,
  WhyChooseUs,
  CTABanner,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ConveyorBelt />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <CTABanner />
      <WeAreHere />
    </>
  );
}
