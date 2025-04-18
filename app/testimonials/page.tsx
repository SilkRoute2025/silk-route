"use client";
import React, { useState } from "react";
import { Podcast, Quote, X } from "lucide-react";
import Slide from "@/components/Slide";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    videoUrl:
      "/test1.mp4",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    videoUrl:
      "/test2.mp4",
  },
];

const certificates = [
  {
    id: 1,
    src: "./EPCH-1.jpg",
  },
  {
    id: 2,
    src: "./AEPC-1.jpg",
  },
  {
    id: 3,
    src: "./FIEO-1.jpeg",
  },
];

interface VideoModalProps {
  video: Testimonial | null;
  onClose: () => void;
}

function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <video
            src={video.videoUrl}
            className="absolute inset-0 w-full h-full rounded-lg"
            controls
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [hasError, setHasError] = useState(false);

  return (
    <Slide delay={0.3}>
      <div className="relative flex flex-col items-center">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer">
          {!hasError ? (
            <video
              src={testimonial.videoUrl}
              className="w-full h-full object-cover"
              loop
              playsInline
              preload="metadata"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Video unavailable</p>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Quote className="w-12 h-12 text-white opacity-80" />
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Page() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mt-2 mb-4">
              <Podcast className="w-12 h-12 text-primary" />
            </div>
            <Slide>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What Our Clients Say
              </h1>
            </Slide>
            <Slide delay={0.2}>
              <p className="mt-4 text-lg text-gray-600">
                At SilkRoute, customer satisfaction is at the heart of
                everything we do.
              </p>
            </Slide>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => setSelectedVideo(testimonial)}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="text-center mt-16 mb-16">
            <Slide>
              <h1 className="text-3xl font-bold text-gray-900 mb-16 sm:text-4xl">
                Certifications
              </h1>
            </Slide>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {certificates.map((cert) => (
                <img key={cert.id} src={cert.src} alt="Certificate" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}

export default Page;