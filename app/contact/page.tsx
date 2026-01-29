"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building2,
  Globe,
} from "lucide-react";

const offices = [
  {
    city: "Lagos",
    country: "Nigeria",
    address: "15 Marina Road, Lagos Island",
    phone: "+234 800 123 4567",
    email: "lagos@mazuri.com",
    type: "Headquarters",
  },
  {
    city: "Accra",
    country: "Ghana",
    address: "23 Independence Ave, Accra",
    phone: "+233 302 123 456",
    email: "accra@mazuri.com",
    type: "Regional Office",
  },
  {
    city: "Douala",
    country: "Cameroon",
    address: "45 Boulevard de la Liberté",
    phone: "+237 233 123 456",
    email: "douala@mazuri.com",
    type: "Regional Office",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Partnership Opportunity",
  "Career Information",
  "Media Request",
  "Investor Relations",
  "Technical Support",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0d2137] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Contact
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                Enquiries, partnerships or general information — we&apos;re here to help.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideIn direction="left">
              <Card className="p-8">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-xl font-bold text-[#0d2137] mb-6">Send a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Full Name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Company (Optional)"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                        <div className="w-full">
                          <label className="block text-[#0d2137] text-sm font-medium mb-1.5">
                            Inquiry type
                          </label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded px-4 py-2.5 text-[#0d2137] text-[15px] focus:outline-none focus:border-[#0d2137] focus:ring-1 focus:ring-[#0d2137]"
                          >
                            <option value="">Select inquiry type</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Textarea
                        label="Your Message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#0d2137] mb-2">Message sent</h3>
                    <p className="text-[#4a5568] mb-6 text-sm">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </Card>
            </SlideIn>

            {/* Contact Info */}
            <SlideIn direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-[#0d2137] mb-4">Get in touch</h2>
                  <p className="text-[#4a5568] mb-6 text-sm">
                    Our team is available to assist you with any questions or
                    requirements. Reach out through any of the channels below.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0d2137]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#e5a00d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
<p className="text-[#0d2137]">+234 800 123 4567</p>
                    <p className="text-[#4a5568] text-xs">Mon–Fri 8am–6pm WAT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0d2137]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#e5a00d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d2137] mb-1">Email</h3>
                      <p className="text-[#0d2137]">info@mazurienergy.com</p>
                      <p className="text-[#4a5568] text-xs">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0d2137]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-[#e5a00d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d2137] mb-1">Online support</h3>
                      <p className="text-[#0d2137]">support.mazurienergy.com</p>
                      <p className="text-[#4a5568] text-xs">24/7 support portal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0d2137]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#e5a00d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d2137] mb-1">Business hours</h3>
                      <p className="text-[#0d2137]">Mon–Fri 8:00–18:00</p>
                      <p className="text-[#4a5568] text-xs">Emergency line 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0d2137] mb-2">
              Our offices
            </h2>
            <p className="text-[#4a5568] max-w-xl mx-auto text-sm">
              Locations across Africa
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <StaggerItem key={office.city}>
                <Card className="h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-[#e5a00d]" />
                    <span className="text-xs text-[#e5a00d] font-medium uppercase tracking-wider">
                      {office.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0d2137] mb-0.5">{office.city}</h3>
                  <p className="text-[#4a5568] text-sm mb-3">{office.country}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#4a5568] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4a5568]">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#4a5568]" />
                      <span className="text-[#0d2137]">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#4a5568]" />
                      <span className="text-[#0d2137]">{office.email}</span>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-[21/9] flex items-center justify-center">
                <div className="text-center text-[#4a5568] text-sm">
                  <MapPin className="w-10 h-10 text-[#e5a00d] mx-auto mb-2" />
                  <p>Map</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0d2137] mb-2">FAQ</h2>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <StaggerContainer className="space-y-3">
              {[
                {
                  q: "What services does Mazuri Energy offer?",
                  a: "Exploration & production, refining & processing, distribution & logistics, and consulting & advisory.",
                },
                {
                  q: "Where does Mazuri Energy operate?",
                  a: "We operate in 15 countries in Africa, with headquarters in Lagos and regional offices in Accra and Douala.",
                },
                {
                  q: "How can I become a partner or supplier?",
                  a: "Use the contact form or email partnerships@mazurienergy.com to discuss opportunities.",
                },
                {
                  q: "What are Mazuri Energy's sustainability initiatives?",
                  a: "We focus on carbon reduction, renewable energy and community development where we operate.",
                },
              ].map((faq, index) => (
                <StaggerItem key={index}>
                  <Card hover={false}>
                    <h3 className="font-semibold text-[#0d2137] text-sm mb-1">{faq.q}</h3>
                    <p className="text-[#4a5568] text-sm">{faq.a}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
