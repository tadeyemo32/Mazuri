"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import Card from "@/components/ui/Card";
import { CTABanner } from "@/components/sections";
import { Target, Eye, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver sustainable energy solutions that power economic growth while maintaining the highest standards of safety, environmental stewardship, and community engagement.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Africa's most trusted energy company, recognized for excellence in operations, innovation in technology, and commitment to a sustainable future.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, Safety, Excellence, Innovation, and Sustainability guide everything we do. We believe in creating value for all stakeholders.",
  },
];

const team = [
  {
    name: "Adaeze Okonkwo",
    role: "Chief Executive Officer",
    image: "/team/ceo.jpg",
    bio: "25+ years in energy sector leadership",
  },
  {
    name: "Emmanuel Mensah",
    role: "Chief Operations Officer",
    image: "/team/coo.jpg",
    bio: "Former Shell executive with global experience",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Chief Financial Officer",
    image: "/team/cfo.jpg",
    bio: "Expert in energy finance and investments",
  },
  {
    name: "David Nkomo",
    role: "Chief Technology Officer",
    image: "/team/cto.jpg",
    bio: "Pioneer in digital oilfield technologies",
  },
];

const timeline = [
  {
    year: "2000",
    title: "Foundation",
    description: "Mazuri was founded in Lagos, Nigeria with a vision to transform Africa's energy landscape.",
  },
  {
    year: "2005",
    title: "First Major Discovery",
    description: "Discovered significant offshore oil reserves in the Niger Delta region.",
  },
  {
    year: "2010",
    title: "Regional Expansion",
    description: "Expanded operations to Ghana, Cameroon, and Equatorial Guinea.",
  },
  {
    year: "2015",
    title: "Refinery Launch",
    description: "Launched our state-of-the-art refinery with 200,000 bpd capacity.",
  },
  {
    year: "2020",
    title: "Sustainability Commitment",
    description: "Announced ambitious carbon reduction targets and invested in renewable energy.",
  },
  {
    year: "2024",
    title: "Continental Leader",
    description: "Became Africa's largest independent oil company by production volume.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0d2137] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                About Mazuri Energy
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                Over two decades in Africa&apos;s energy sector, with a focus on safety, sustainability and community.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div className="aspect-[4/3] bg-[#f7f8fa] rounded-lg border border-gray-100 overflow-hidden flex items-center justify-center">
                <span className="text-[#0d2137] font-bold text-4xl">Est. 2000</span>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d2137] mb-6">
                  Our story
                </h2>
                <div className="space-y-4 text-[#4a5568]">
                  <p>
                    Mazuri was born from a vision to create an African energy company
                    that could compete on the global stage while remaining deeply
                    committed to the communities we serve.
                  </p>
                  <p>
                    Starting with a small team of passionate engineers and geologists,
                    we have grown into one of the continent&apos;s most respected energy
                    companies, employing over 2,500 professionals across 15 countries.
                  </p>
                  <p>
                    Our journey has been marked by significant discoveries, technological
                    innovations, and an unwavering commitment to operating responsibly.
                    Today, we continue to push boundaries while never losing sight of
                    our core values.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2137] mb-2">
              Mission, vision & values
            </h2>
            <p className="text-[#4a5568] max-w-xl mx-auto text-sm">
              The foundation of how we operate
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full text-center">
                  <div className="w-12 h-12 bg-[#0d2137]/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-[#e5a00d]" />
                  </div>
                  <h3 className="font-semibold text-[#0d2137] mb-2">{value.title}</h3>
                  <p className="text-[#4a5568] text-sm">{value.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2137] mb-2">
              Leadership
            </h2>
            <p className="text-[#4a5568] max-w-xl mx-auto text-sm">
              Senior team driving Mazuri Energy
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="text-center">
                  <div className="w-24 h-24 bg-[#0d2137]/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-semibold text-[#0d2137]">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#0d2137] mb-0.5">{member.name}</h3>
                  <p className="text-[#e5a00d] text-sm mb-1">{member.role}</p>
                  <p className="text-[#4a5568] text-sm">{member.bio}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2137] mb-2">
              Milestones
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-14 h-14 bg-[#0d2137] text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                  {item.year}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-[#0d2137]">{item.title}</h3>
                  <p className="text-[#4a5568] text-sm mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0d2137]">Awards & recognition</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Best Oil Company - Africa",
              "Safety Excellence",
              "Sustainability Leader",
              "Employer of Choice",
            ].map((award) => (
              <StaggerItem key={award}>
                <div className="text-center p-4 bg-[#f7f8fa] rounded-lg border border-gray-100">
                  <Award className="w-8 h-8 text-[#e5a00d] mx-auto mb-2" />
                  <p className="text-sm text-[#0d2137]">{award}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
