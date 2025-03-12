"use client"
import Slide from "@/components/Slide"
import { Briefcase, ChevronLeft, ChevronRight, Globe, HandHelping, PaintBucket, Ribbon, Stamp, Volleyball, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"

type Props = {}

interface CSRImage {
  id: number;
  url: string;
  alt: string;
}

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

const Page = (props: Props) => {
  const features = [
    {
      icon: <Globe />,
      title: "Sourcing",
      desc: "We meticulously select premium raw materials, including natural fibers like wool, silk, cotton, and linen, to uphold our commitment to excellence.",
      image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/services%2FIMG_3812_(2).jpg?alt=media&token=176a7656-2362-47c1-9397-594007f61b92",
    },
    {
      icon: <HandHelping />,
      title: "Hand Skills",
      desc: "Our skilled artisans specialize in handloom weaving, intricate hand embroidery, block printing, screen printing, hand painting, digital printing, and hand tie and dye.",
      image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/services%2F2025021323130174.jpg?alt=media&token=6721c1b3-e426-4139-a1a9-ec266e7d9de0",
    },
    {
      icon: <Stamp />,
      title: "Printing",
      desc: "Specializing in screen printing, block printing, and digital printing, we craft intricate, high-quality designs that enhance scarves and garments with fine detailing and lasting durability.",
      image: "/services/3.jpg",
    },
    {
      icon: <Ribbon />,
      title: "Weaving",
      desc: "Our skilled artisans meticulously weave each piece, ensuring superior texture, durability, and intricate detailing that reflect the rich textile heritage of India.",
      image: "/services/4.jpg",
    },
    {
      icon: <Volleyball />,
      title: "Embroidery",
      desc: "Meticulously crafted by skilled artisans, our embroidery techniques range from intricate threadwork to exquisite embellishments, adding depth, texture, and sophistication.",
      image: "/services/5.jpg",
    },
    {
      icon: <PaintBucket />,
      title: "Dyeing",
      desc: " Specializing in hand tie and dye and precision color application, we transform high-quality fabrics into stunning scarves and garments that exude elegance and sustainability.",
      image: "/services/6.jpg",
    },
  ]

  const factory = [{
    id: 1,
    url: "/services/7.jpg",
    alt: "Medical camp registration",
  },
  {
    id: 2,
    url: "/services/8.jpg",
    alt: "People waiting in line",
  },
  {
    id: 3,
    url: "/services/9.jpg",
    alt: "Doctor consultation",
  },
  {
    id: 4,
    url: "/services/10.jpg",
    alt: "Camp entrance",
  },
  {
    id: 5,
    url: "/services/11.jpg",
    alt: "Medical camp banner",
  },
  {
    id: 6,
    url: "/services/12.jpg",
    alt: "Medical camp banner",
  },
  {
    id: 7,
    url: "/services/13.jpg",
    alt: "Medical camp banner",
  },
];

   const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
      null
    );
  
    const handlePrevious = () => {
      setSelectedImageIndex((current) =>
        current !== null
          ? (current - 1 + factory.length) % factory.length
          : null
      );
    };
  
    const handleNext = () => {
      setSelectedImageIndex((current) =>
        current !== null ? (current + 1) % factory.length : null
      );
    };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-5xl mx-auto sm:text-center">
          <div className="text-center mb-16">
            <div className="flex justify-center mt-2 mb-4">
              <Briefcase className="w-12 h-12 text-primary" />
              </div>
            <Slide>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl">Our Services</h1>
            </Slide>
            <Slide delay={0.2}>
            <p className="mt-4 text-lg text-gray-600">Our skilled artisans ensure every piece reflects our rich cultural heritage and commitment to excellence through rigorous quality control and meticulous attention to detail</p>
            </Slide>
          </div>
          <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"></div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <StyledWrapper key={idx}>
                <Slide delay={(idx * 0.1)+0.2}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="bg-white flex flex-col items-center justify-center space-y-3 p-6 border rounded-lg flip-card-front">
                      <div className="text-black ">{item.icon}</div>
                      <h4 className="text-lg text-gray-900 font-semibold">{item.title}</h4>
                      <p className="text-center text-gray-600">{item.desc}</p>
                    </div>
                    <div className="flip-card-back">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        layout="fill"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
                </Slide>
              </StyledWrapper>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-20 mt-16">
                <Slide>
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  Factory Overview
                </h2>
                </Slide>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {factory.map((image, index) => (
                    <CSRImageCard
                      key={image.id}
                      image={image}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
              <ImageModal
        image={
          selectedImageIndex !== null ? factory[selectedImageIndex] : null
        }
        onClose={() => setSelectedImageIndex(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  )
}

const StyledWrapper = styled.div`
  .flip-card {
    width: 100%;
    height: 250px;
    background-color: transparent;
    perspective: 1000px;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
  }

  .flip-card-back {
    transform: rotateY(180deg);
    overflow: hidden;
  }
`

export default Page

