"use client";

import { useQueryState } from "nuqs";
import React, { useCallback, useEffect } from "react";
import CollectionHeader from "./_components/CollectionHeader";
import { collections, CollectionType } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { LucideLoader } from "lucide-react";

// Skeleton loader component
const ImageSkeleton = () => (
  <div className="aspect-[3/4] w-full bg-gray-200 animate-pulse rounded-md" />
);

const ProductCard = ({ item }: { item: CollectionType }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const [isHoverLoading, setIsHoverLoading] = React.useState(true);

  const handleMainImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleHoverImageLoad = useCallback(() => {
    setIsHoverLoading(false);
  }, []);
  
  return (
    <Link href={`/collection/${item.id}`}>
      <div className="group cursor-pointer" ref={ref}>
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
          {/* Skeleton loader */}
          {(isLoading || isHoverLoading) && <ImageSkeleton />}
          
          {/* Main image */}
          {inView && (
            <Image
              src={`/collections/${item.id}/1.jpg`}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={`object-cover object-center transition-all duration-300 ease-in-out transform group-hover:opacity-0 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={handleMainImageLoad}
              priority={false}
              loading="lazy"
            />
          )}

          {/* Hover image */}
          {inView && (
            <Image
              src={`/collections/${item.id}/2.jpg`}
              alt={`${item.name} Alternate View`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={`object-cover object-center transition-all duration-300 ease-in-out absolute top-0 left-0 opacity-0 group-hover:opacity-100 ${
                isHoverLoading ? "invisible" : "visible"
              }`}
              onLoad={handleHoverImageLoad}
              priority={false}
              loading="lazy"
            />
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">{item.name}</h3>
        </div>
      </div>
    </Link>
  );
};

const Page = () => {
  const [selectedTag, setSelectedTag] = useQueryState("tags", {
    defaultValue: "all",
  });

  const filteredCollections =
    selectedTag === "all"
      ? collections
      : collections.filter((item) => item.tag === selectedTag);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <CollectionHeader
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
