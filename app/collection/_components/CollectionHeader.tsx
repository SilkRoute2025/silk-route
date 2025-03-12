import Slide from "@/components/Slide";
import { Shirt } from "lucide-react";
import React from "react";

interface Props {
  setSelectedTag: (value: string) => void;
  selectedTag: string;
}

const CollectionHeader = ({ setSelectedTag, selectedTag }: Props) => {
  return (
    <div className="text-center mb-16 ">
      <div className="flex justify-center mt-2 mb-4">
              <Shirt className="w-12 h-12 text-primary" />
              </div>
            <Slide>
            <h1 className="text-3xl font-bold text-gray-900">Our Collection</h1>
            </Slide>
            <Slide delay={0.2}>
            <p className="mt-4 text-lg text-gray-600">Discover our seasonal collections crafted with precision and care</p>
            </Slide>

      {/* Filter Tags */}
      <div className="flex justify-center pt-10 space-x-4">
        <button
          onClick={() => setSelectedTag("all")}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedTag === "all"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedTag("scarves")}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedTag === "scarves"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Scarves
        </button>
        <button
          onClick={() => setSelectedTag("garments")}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedTag === "garments"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Garments
        </button>
      </div>
    </div>
  );
};

export default CollectionHeader;
