"use client";

import AccordionExample from "@/components/Accordion";
import { collections, CollectionType } from "@/data";
import {
  Heart,
  LucideLoader2,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Make sure you have these components installed via shadcn
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  id: string;
}

const Product = ({ id }: Props) => {
  const [data, setData] = useState<CollectionType | undefined>(undefined);
  const [like, setLike] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Assuming you have these images in your CollectionType
  const images = data ? [`/collections/${id}/1.jpg`, `/collections/${id}/2.jpg`] : [];

  useEffect(() => {
    if (id) {
      setData(collections.find((item) => item.id === parseInt(id)));
      setLike(!!localStorage.getItem(`isLiked-${id}`));
    }
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-screen">
        <LucideLoader2 className="animate-spin w-10 h-10" />
      </div>
    );
  }

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      localStorage.setItem(`isLiked-${data.id}`, JSON.stringify(true));

      const wishlist = localStorage.getItem(`wishlist`) || null;

      if (wishlist) {
        const list = JSON.parse(wishlist);
        list.push(data);
        localStorage.setItem(`wishlist`, JSON.stringify(list));
      } else {
        localStorage.setItem(`wishlist`, JSON.stringify([data]));
      }

      toast("Added to liked products !");
    } else {
      localStorage.removeItem(`isLiked-${data.id}`);

      const wishlist = localStorage.getItem(`wishlist`);

      if (wishlist) {
        const list = JSON.parse(wishlist) as CollectionType[];
        const updatedList = list.filter((item) => item.id !== data.id);
        if (updatedList.length > 0) {
          localStorage.setItem(`wishlist`, JSON.stringify(updatedList));
        } else {
          localStorage.removeItem(`wishlist`);
        }
      }

      toast("Removed from liked products !");
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-center md:items-start items-center gap-20">
        <div className="relative md:w-96 h-full rounded-md">
          {/* Image Slider */}
          <div className="relative group">
            {/* Main Image with Dialog trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-md overflow-hidden cursor-pointer">
                  <Image
                    width={500}
                    height={500}
                    src={images[currentImageIndex]}
                    alt={data.name}
                    className="w-full h-[500px] object-cover rounded-md"
                  />
                </div>
              </DialogTrigger>

              {/* Zoom Dialog Content */}
              <DialogContent className="sm:max-w-3xl max-h-screen overflow-hidden mt-10">
                <div className="relative flex flex-col items-center">
                  <div
                    className="transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "center",
                      maxHeight: "80vh",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      width={800}
                      height={800}
                      src={images[currentImageIndex]}
                      alt={data.name}
                      className="object-contain max-h-[80vh]"
                    />
                  </div>

                  <div className="relative flex items-center justify-between w-full mt-4 z-50">
                    <Button variant="outline" size="icon" onClick={prevImage}>
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={zoomOut}
                        disabled={zoomLevel <= 0.5}
                      >
                        <ZoomOut className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" onClick={resetZoom}>
                        {Math.round(zoomLevel * 100)}%
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={zoomIn}
                        disabled={zoomLevel >= 3}
                      >
                        <ZoomIn className="h-5 w-5" />
                      </Button>
                    </div>

                    <Button variant="outline" size="icon" onClick={nextImage}>
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Slider Navigation */}
            <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-white/50 backdrop-blur-sm ml-2 pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-white/50 backdrop-blur-sm mr-2 pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all pointer-events-auto ${
                    currentImageIndex === index ? "bg-white w-4" : "bg-white/50"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail preview */}
          <div className="flex gap-2 mt-4 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                className={`border-2 rounded overflow-hidden ${
                  currentImageIndex === index
                    ? "border-black"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  width={60}
                  height={60}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-start gap-32">
            <div>
              <h3 className="text-3xl font-bold">{data.name}</h3>
            </div>
            <div>
              <Heart
                className={`w-6 h-6 cursor-pointer ${like ? "fill-black" : ""}`}
                onClick={() => handleLike()}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-xl font-bold"></h1>
            <p className="pt-2 font-medium">{data.desc}</p>
          </div>

          <Link href="/contact">
            <button className="text-white bg-[#1e1d25] hover:bg-[#3a3941] py-4 uppercase font-bold rounded-md w-full">
              Enquire Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
