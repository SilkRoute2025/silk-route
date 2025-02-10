"use client";
import React from 'react';
import { Globe2 } from 'lucide-react';
import Slide from '@/components/Slide';

interface Partner {
  id: number;
  name: string;
  country: string;
  logoUrl: string;
}

const partners: Record<string, Partner[]> = {
 
  "Italy": [
    {
      id: 1,
      name: "Sandro",
      logoUrl: "/logo/1.png",
      country: "France"
    },
    {
      id: 2,
      name: "Kookai",
      logoUrl: "/logo/2.svg",
      country: "France"
    },
    {
      id: 3,
      name: "Printemps",
      logoUrl: "/logo/3.svg",
      country: "France"
    },
    {
      id: 4,
      name: "Balmain",
      logoUrl: "/logo/4.svg",
      country: "France"
    },
    {
      id: 5,
      name: "Sandro",
      logoUrl: "/logo/5.svg",
      country: "France"
    },
    {
      id: 6,
      name: "Kookai",
      logoUrl: "/logo/6.svg",
      country: "France"
    },
    {
      id: 7,
      name: "Printemps",
      logoUrl: "/logo/7.svg",
      country: "France"
    },
    {
      id: 8,
      name: "Balmain",
      logoUrl: "/logo/8.svg",
      country: "France"
    },
    
  ],
  "United States": [
    {
      id: 9,
      name: "Jenny Yoo Collection",
      logoUrl: "/logo/9.png",
      country: "United States"
    },
    {
      id: 10,
      name: "Libertine",
      logoUrl: "/logo/10.svg",
      country: "United States"
    },
  
  ],
  "Germany": [
    {
      id: 11,
      name: "Zara",
      logoUrl: "/logo/11.avif",
      country: "Spain"
    },
    {
      id: 12,
      name: "Mango",
      logoUrl: "/logo/12.png",
      country: "Spain"
    },
  
  ],
  "Spain": [
    {
      id: 13,
      name: "Zara",
      logoUrl: "/logo/13.png",
      country: "Spain"
    },
    {
      id: 14,
      name: "Mango",
      logoUrl: "/logo/14.png",
      country: "Spain"
    },
  
  ],
  "Netherlands": [
    {
      id: 15,
      name: "Zara",
      logoUrl: "/logo/15.png",
      country: "Spain"
    },
  ],
  "Belgium": [
    {
      id: 15,
      name: "Zara",
      logoUrl: "/logo/16.webp",
      country: "Spain"
    },
  ]
};

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-full aspect-[3/2] relative overflow-hidden">
        <img
          src={partner.logoUrl}
          alt={`${partner.name} logo`}
          className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
}

function CountrySection({ country, partners }: { country: string; partners: Partner[] }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">{country}</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Globe2 className="w-12 h-12 text-primary" />
          </div>
                    <Slide>
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Partners</h1>
                    </Slide>
                    <Slide>
                    <p className="mt-4 text-xl text-gray-600">Hear directly from our satisfied customers</p>
                    </Slide>
                  </div>
        

        {Object.entries(partners).map(([country, countryPartners]) => (
          <CountrySection
            key={country}
            country={country}
            partners={countryPartners}
          />
        ))}
      </div>
    </div>
  );
}

export default page;