"use client";
import React, { useState } from "react";
import { Globe2, X, ChevronLeft, ChevronRight, BookOpenText } from "lucide-react";
import Slide from "@/components/Slide";

interface Partner {
  id: number;
  name: string;
  country: string;
  logoUrl: string;
}

interface CSRImage {
  id: number;
  url: string;
  alt: string;
}

const csrImages: CSRImage[] = [
  {
    id: 1,
    url: "/csr/1.jpg",
    alt: "Medical camp registration",
  },
  {
    id: 2,
    url: "/csr/2.jpg",
    alt: "People waiting in line",
  },
  {
    id: 3,
    url: "/csr/3.jpg",
    alt: "Doctor consultation",
  },
  {
    id: 4,
    url: "/csr/4.jpeg",
    alt: "Camp entrance",
  },
  {
    id: 5,
    url: "/csr/5.jpeg",
    alt: "Medical camp banner",
  },
];
const csrImages2: CSRImage[] = [
  {
    id: 1,
    url: "/csr/6.jpg",
    alt: "Medical camp registration",
  },
  {
    id: 2,
    url: "/csr/7.jpg",
    alt: "People waiting in line",
  },
  {
    id: 3,
    url: "/csr/8.jpg",
    alt: "Doctor consultation",
  },
  {
    id: 4,
    url: "/csr/9.jpg",
    alt: "Camp entrance",
  },
 
];

interface ImageModalProps {
  image: CSRImage | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function ImageModal({ image, onClose, onPrevious, onNext }: ImageModalProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

function CSRImageCard({
  image,
  onClick,
}: {
  image: CSRImage;
  onClick: () => void;
}) {
  return (
    <Slide>
    <div
      className="relative aspect-[4.5/3] rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
    </div>
    </Slide>
  );
}

function CSRPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handlePrevious = () => {
    setSelectedImageIndex((current) =>
      current !== null
        ? (current - 1 + csrImages.length) % csrImages.length
        : null
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((current) =>
      current !== null ? (current + 1) % csrImages.length : null
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex justify-center mt-2 mb-4">
            <BookOpenText className="w-12 h-12 text-primary" />
          </div>
          <Slide>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6 text-center">
              Corporate Social Responsibility
            </h1>
          </Slide>
          <Slide delay={0.2}>
          <p className="text-lg mt-2 text-gray-600">
            At Silkroute, corporate social responsibility is at the heart of our
            mission, reflecting our commitment to uplifting communities and
            creating a meaningful impact beyond fashion. We actively organize
            relief camps and social initiatives to support the underprivileged,
            ensuring access to essential resources and opportunities for a
            better future. Rooted in ethical values and sustainability, we
            strive to empower artisans, promote fair trade, and contribute to
            social welfare while maintaining our dedication to high-quality
            craftsmanship. By blending tradition with responsibility, we
            continue to build a brand that values people, the planet, and
            purposeful change.
          </p>
          </Slide>
        </div>

        <div className="mb-20">
          <Slide>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Eye Check Up Camp
          </h2>
          </Slide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrImages.map((image, index) => (
              <CSRImageCard
                key={image.id}
                image={image}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="mb-20">
          <Slide>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
           Other Activities
          </h2>
          </Slide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrImages2.map((image, index) => (
              <CSRImageCard
                key={image.id}
                image={image}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <ImageModal
        image={
          selectedImageIndex !== null ? csrImages[selectedImageIndex] : null
        }
        onClose={() => setSelectedImageIndex(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}

export default CSRPage;
