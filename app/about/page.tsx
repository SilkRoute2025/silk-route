"use client"
import React from 'react';
import { History, Award, Globe2, Factory, BadgeInfo } from 'lucide-react';
import Slide from '@/components/Slide';

interface FeatureSection {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
  image: string;
}

const features: FeatureSection[] = [
  {
    id: 1,
    title: "About SilkRoute",
    content: "Launched in 2004, SilkRoute is a premier export house renowned for its exquisite handcrafted textiles in the Indian state of West Bengal. We expertly blend traditional craftsmanship with modern design sensibilities, specializing in handloom weaving, hand embroidery, screen printing, hand painting, block printing, digital printing, and hand tie and dye to create timeless scarves and garments.",
    icon: <History className="w-6 h-6 text-primary" />,
    image: "/abtsr.jpg"
  },
  {
    id: 2,
    title: "Our Commitment to Excellence",
    content: " At SilkRoute, our dedication to quality is unwavering. We uphold strict in-house quality control standards, ensure prompt communication, and guarantee on-time delivery. This helped us establish a trusted partnership among 20+ global brands.",
    icon: <Award className="w-6 h-6 text-primary" />,
    image: "/excellence.jpg"
  },
  {
    id: 3,
    title: "A Reliable Export House Putting Customers First",
    content: "With an impressive annual export of 100,000+ pieces to over 10 countries, SilkRoute stands as a beacon of reliability and customer-centric service. We prioritize our clients’ needs by delivering exceptional quality and prompt service, ensuring every partnership is built on trust and excellence.",
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    image: "/map.jpg"
  },
  {
    id: 4,
    title: "Production",
    content: " Every masterpiece begins with the highest quality fabric, transformed through our meticulous production process. Our skilled artisans use a variety of techniques—from traditional handloom weaving to innovative digital printing—to craft premium scarves and garments that honor our cultural heritage while meeting modern fashion trends.",
    icon: <Factory className="w-6 h-6 text-primary" />,
    image: "/prod.jpg"
  }
];

function FeatureCard({ feature, isReversed }: { feature: FeatureSection; isReversed: boolean }) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 mb-20 last:mb-0`}>
      <div className="lg:w-1/2">
      <Slide delay={0.4}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </div>
        </Slide>
      </div>
      
      <div className="lg:w-1/2 flex flex-col justify-center">
      <Slide>
        <div className="flex items-center gap-3 mb-4">
          {feature.icon}
          <h2 className="text-2xl font-bold text-gray-900">{feature.title}</h2>
        </div>
        </Slide>
        <Slide delay={0.2}>
        <p className="text-lg text-gray-600 leading-relaxed">
          {feature.content}
        </p>
        </Slide>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
        <div className="flex justify-center mt-2 mb-4">
            <BadgeInfo className="w-12 h-12 text-primary" />
          </div>
          <Slide>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6 text-center">
            About Us
          </h1>
          </Slide>
          <Slide delay={0.2}>
          <p className="text-lg text-gray-600 text-center">
            Discover the story of Silkroute, where tradition meets innovation in textile craftsmanship.
          </p>
          </Slide>
        </div>

        <div>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;