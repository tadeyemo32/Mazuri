import {
  Hero,
  WeAreHere,
  Stats,
  CertificationsPartners,
  ServicesPreview,
  WhyChooseUs,
  CTABanner,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <CertificationsPartners />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <CTABanner />
      <WeAreHere />
    </>
  );
}
