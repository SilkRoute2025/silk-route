"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PhoneIcon, Send, X } from "lucide-react";
import { motion, stagger, useAnimate } from "framer-motion";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [scope, animate] = useAnimate();

  const handleIconClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative" ref={scope}>
      <motion.div
        className="fixed bottom-5 right-5 bg-gradient-to-r from-green-400 to-green-500 z-50 p-5 rounded-full text-white cursor-pointer"
        whileTap={{ scale: 0.95 }}
        onClick={handleIconClick}
      >
        <PhoneIcon className="text-white fill-white w-6 h-6" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: open ? 1 : 0, x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-5 bottom-24 md:w-96 flex flex-col bg-white shadow-lg px-5 py-10 z-40 rounded-md"
      >
        <div className="absolute top-2 left-2" onClick={handleIconClick}>
          <X className="w-4 h-4" />
        </div>
        <h1 className="text-md font-medium mb-2 pl-1">Do you need any help?</h1>
        <div className="flex w-full">
          <input
          type="text"
          placeholder="Send Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <Link href={`https://wa.me/+919874883393?text=${text}`} target="_blank">
          <button className="bg-green-500 text-white p-2 rounded ml-2">
            <Send />
          </button>
        </Link>
        </div>
        
      </motion.div>
    </div>
  );
};

export default Banner;
