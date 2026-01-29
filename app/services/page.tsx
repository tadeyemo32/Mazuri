"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CTABanner } from "@/components/sections";
import {
  Search,
  Factory,
  Truck,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "exploration",
    icon: Search,
    title: "Exploration & Production",
    description:
      "State-of-the-art geological surveys and advanced extraction technologies to discover and develop oil reserves with maximum efficiency and minimal environmental impact.",
    features: [
      "3D seismic imaging and analysis",
      "Advanced drilling technologies",
      "Enhanced oil recovery methods",
      "Real-time production monitoring",
      "Environmental impact assessments",
    ],
    stats: { projects: "50+", recovery: "45%", efficiency: "98%" },
  },
  {
    id: "refining",
    icon: Factory,
    title: "Refining & Processing",
    description:
      "World-class refineries equipped with cutting-edge technology to convert crude oil into high-quality petroleum products that meet international standards.",
    features: [
      "200,000 bpd refining capacity",
      "Multiple product streams",
      "Advanced desulfurization",
      "Quality control systems",
      "Waste minimization programs",
    ],
    stats: { capacity: "200K", products: "15+", purity: "99.9%" },
  },
  {
    id: "distribution",
    icon: Truck,
    title: "Distribution & Logistics",
    description:
      "Comprehensive supply chain solutions with extensive pipeline networks, storage facilities, and transportation fleets ensuring reliable delivery across the continent.",
    features: [
      "5,000+ km pipeline network",
      "Strategic storage terminals",
      "Modern tanker fleet",
      "Real-time tracking systems",
      "24/7 logistics support",
    ],
    stats: { pipelines: "5K+ km", terminals: "25+", fleet: "100+" },
  },
  {
    id: "consulting",
    icon: MessageSquare,
    title: "Consulting & Advisory",
    description:
      "Expert guidance on energy strategy, market analysis, operational optimization, and regulatory compliance to help partners navigate the complex energy landscape.",
    features: [
      "Market research and analysis",
      "Strategic planning",
      "Operational audits",
      "Regulatory compliance support",
      "Technology assessments",
    ],
    stats: { clients: "100+", countries: "15", success: "95%" },
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "Initial consultation to understand your needs and objectives",
    icon: Search,
  },
  {
    step: 2,
    title: "Analysis",
    description: "Comprehensive assessment and feasibility studies",
    icon: BarChart3,
  },
  {
    step: 3,
    title: "Planning",
    description: "Detailed project planning and resource allocation",
    icon: Clock,
  },
  {
    step: 4,
    title: "Execution",
    description: "Implementation with continuous monitoring and optimization",
    icon: Zap,
  },
  {
    step: 5,
    title: "Delivery",
    description: "Quality assurance and successful project handover",
    icon: CheckCircle,
  },
];

const industries = [
  "Power Generation",
  "Transportation",
  "Petrochemicals",
  "Manufacturing",
  "Aviation",
  "Maritime",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0d2137] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Services
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                Exploration, refining, distribution and advisory across the value chain.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-32"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <SlideIn direction={index % 2 === 0 ? "left" : "right"}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="w-12 h-12 bg-[#0d2137]/5 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-[#e5a00d]" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0d2137] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[#4a5568] mb-6 text-sm">
                        {service.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-[#e5a00d] flex-shrink-0" />
                            <span className="text-[#4a5568] text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact">
                        <Button className="gap-2">
                          Learn More
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </SlideIn>

                  {/* Stats Card */}
                  <SlideIn
                    direction={index % 2 === 0 ? "right" : "left"}
                    delay={0.2}
                  >
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <Card>
                        <h3 className="font-semibold text-[#0d2137] mb-6 text-center text-sm">
                            Key metrics
                          </h3>
                          <div className="grid grid-cols-3 gap-6">
                            {Object.entries(service.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold text-[#0d2137] mb-0.5">
                                  {value}
                                </div>
                                <div className="text-[#4a5568] text-xs capitalize">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                      </Card>
                    </div>
                  </SlideIn>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0d2137] mb-2">
              Our process
            </h2>
            <p className="text-[#4a5568] max-w-xl mx-auto text-sm">
              How we deliver projects
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-[#0d2137] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-6 h-6 text-[#e5a00d]" />
                    </div>
                    <h3 className="font-semibold text-[#0d2137] text-sm mb-1">{step.title}</h3>
                    <p className="text-[#4a5568] text-xs">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0d2137] mb-2">Industries served</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <StaggerItem key={industry}>
                <div className="bg-[#f7f8fa] border border-gray-100 rounded-lg p-4 text-center">
                  <Zap className="w-6 h-6 text-[#e5a00d] mx-auto mb-2" />
                  <p className="font-medium text-[#0d2137] text-sm">{industry}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Safety & Quality Section */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-2xl font-bold text-[#0d2137] mb-4">
                Safety & quality
              </h2>
              <p className="text-[#4a5568] mb-6 text-sm">
                Safety and quality are core to our operations. We maintain certifications including ISO 9001, ISO 14001 and API Q1.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["ISO 9001", "ISO 14001", "OHSAS 18001", "API Q1"].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-100">
                    <Shield className="w-5 h-5 text-[#e5a00d]" />
                    <span className="font-medium text-[#0d2137] text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <SlideIn direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "0", label: "Lost time incidents" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "100%", label: "Compliance" },
                  { value: "5M+", label: "Safe work hours" },
                ].map((item) => (
                  <Card key={item.label} className="text-center">
                    <div className="text-2xl font-bold text-[#0d2137] mb-0.5">{item.value}</div>
                    <p className="text-[#4a5568] text-xs">{item.label}</p>
                  </Card>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
