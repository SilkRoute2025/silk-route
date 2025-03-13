"use client";
import Image from "next/image";
import { ArrowRight, Recycle, Handshake, Sprout } from "lucide-react";
import Slide from "@/components/Slide";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";

export default function Home() {
  const collectionItems = [
    {
      id: 1,
      defaultImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/26%2F0A4A2307-1.jpg?alt=media&token=aa17d775-5044-49c7-bb25-fe01516e8963",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/26%2F0A4A2314-1.jpg?alt=media&token=5cc3b14a-4226-4069-aeb1-619729287159",
      name: "All",
      href: "/collection",
    },

    {
      id: 2,
      defaultImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/48%2F0A4A2248-1.png?alt=media&token=41c9a51b-d409-497d-a9a2-6667f238a0b2",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/48%2F0A4A2252-1.jpg?alt=media&token=bf264570-8019-45a8-a1c7-d426165d3c8b",
      name: "Scarves",
      href: "/collection?tags=scarves",
    },
    {
      id: 3,
      defaultImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/41%2F0A4A2523-1.jpg?alt=media&token=543b8bb4-0fde-45d5-a122-83acc4eea7a5",
      hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/41%2F0A4A2521-1.jpg?alt=media&token=42ba05d2-5198-4442-9b2b-29565a0fff78",
      name: "Garments",
      href: "/collection?tags=garments"
    },
  ];
  const logoSources = [
    "/logo/1.png",
    "/logo/2.svg",
    "/logo/3.svg",
    "/logo/4.svg",
    "/logo/5.svg",
    "/logo/6.svg",
    "/logo/7.svg",
    "/logo/8.svg",
    "/logo/9.png",
    "/logo/10.svg",
    "/logo/11.avif",
    "/logo/12.png",
    "/logo/13.png",
    "/logo/14.png",
    "/logo/15.png",
    "/logo/16.webp",
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 3250);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="sync">
        {isLoading && <Preloader key="1" />}
      </AnimatePresence>
      <section className="h-screen relative overflow-hidden">
        <img
          src="/786.png"
          alt="Hero"
          className="absolute hidden md:block inset-0 w-full h-fit object-fill"
        />
        <img
          src="/911.jpg"
          alt="Hero"
          className="absolute md:hidden  inset-0 w-full h-full object-cover"
        />
        {/* <video
          key="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/111.jpg"
          className="absolute w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLVideoElement;
            target.style.display = "none";
          }}
        >
          <source src="/videos/silkroute-landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
              SILKROUTE
            </h1>
            <p className="text-xl md:text-2xl tracking-wide mb-8">
              Elegance in Every Thread
            </p>
            <button
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition duration-300"
              onClick={() => window.open("/collection")}
            >
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Slide>
          <h2 className="text-3xl font-light text-center mb-16">
            Our Collection
          </h2>
        </Slide>
        <Slide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collectionItems.map((item) => (
              <Link href={item.href} passHref key={item.id}>
                <div className="group relative cursor-pointer ">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.defaultImage}
                      alt={item.name}
                      width={384}
                      height={500}
                      className="ease-in-out w-full h-[500px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                      src={item.hoverImage}
                      alt={`${item.name} Alternate View`}
                      width={384}
                      height={500}
                      className="ease-in-out absolute inset-0 w-full h-[500px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <div className="mt-6 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-semibol text-center ">
                      {item.name}
                    </h3>
                    {/* <p className="mt-1">Starting from ${item.price}</p> */}
                    <InteractiveHoverButton className=" mt-2 font-medium">
                      Explore
                    </InteractiveHoverButton>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Slide>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Slide>
                <h2 className="text-3xl font-light mb-6">Our Story</h2>
              </Slide>
              <Slide>
                <p className="mb-8">
                Established in 2004 in the culturally rich region of West Bengal, India, SilkRoute has grown into a leading export house renowned for its commitment to quality and sustainability. Over the years,we have blended time-honored craftsmanship seamlessly with contemporary design to create textile masterpieces that stood the test of time. Our vision was simple: to honor the legacy of traditional textile art with innovation for sustainable growth. Each piece we craft reflects our passion for excellence and our deep-rooted respect for the art of textile making.

                </p>
              </Slide>
              <Link href="/about" passHref>
                <InteractiveHoverButton className="font-normal">
                  Learn More
                </InteractiveHoverButton>
              </Link>
            </div>
            <Slide>
              <div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/WORLD%20MAP%20final.png?alt=media&token=0998b102-ee84-451f-a959-8b2ba4c1a6d3"
                  alt="About"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <Slide>
            <h2 className="text-3xl font-light mb-6">Our Services</h2>
          </Slide>
          <Slide>
            <p className="mb-12">
              We believe in creating fashion that respects both people and
              planet. Every piece is crafted with care using sustainable
              materials and ethical practices.
            </p>
          </Slide>
        </div>
        <Slide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Organic Materials",
                desc: "We source only the finest, ethically harvested fibers, transformed through our exquisite hand-weaving, printing, dyeing, embroidery, and hand painting techniques, ensuring every piece reflects true beauty.",
                icon: <Sprout className="h-8 w-8" />,
              },
              {
                name: "Ethical Production",
                desc: "Our artisans craft each piece under fair conditions, backed by prompt communication and robust in-house quality checks that guarantee exceptional standards from start to finish.",
                icon: <Handshake className="h-8 w-8" />,
              },
              {
                name: "Zero Waste",
                desc: "By meticulously repurposing every material remnant through innovative techniques, we ensure that our production of timeless scarves and garments not only delights our customers but also champions sustainability.",
                icon: <Recycle className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 text-primary rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center justify-center">
          <Slide>
            <h2 className="text-3xl font-light mb-6">Our Partners</h2>
          </Slide>
          <Slide>
            <p className="mb-12">
              We collaborate with top brands of the planet.
            </p>
          </Slide>
        </div>
        <Slide>
          <div
            className="relative flex w-full flex-col items-center justify-center overflow-hidden"
            style={{ userSelect: "none" }}
          >
            <Marquee pauseOnHover className="[--duration:50s]">
              {logoSources.map((img, index) => (
                <div key={index} className="grid place-items-center">
                  <Image
                    src={img}
                    height={50}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:50s]">
              {logoSources.map((img, index) => (
                <div key={index} className="grid place-items-center">
                  <Image
                    src={img}
                    height={50}
                    width={100}
                    alt="logo"
                    className=" mx-12 object-contain"
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
          </div>
        </Slide>
      </section>
    </div>
  );
}