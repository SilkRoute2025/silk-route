"use client";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Collection",
      href: "/collection",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "CSR",
      href: "/csr",
    },
    {
      title: "Testimonials",
      href: "/testimonials",
    },
    {
      title: "Partners",
      href: "/partners",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <div
      className="relative lg:h-[480px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="lg:fixed lg:bottom-0 w-full">
        <footer className="bg-black text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About SilkRoute */}
              <div>
                <h3 className="text-lg font-semibold mb-4">ABOUT SILKROUTE</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Welcome to SilkRoute, We make beautiful quality clothing,
                  scarves, and accessories products with creative art stories.
                </p>
              </div>

              {/* Important Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">IMPORTANT LINKS</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {navLinks.map((link) => (
                    <li  key={link.title}>
                      <Link href={link.href}>
                      » {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-lg font-semibold mb-4">COLLECTIONS</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                <li  >
                      <Link href="/collection">
                      » Scarves
                      </Link>
                    </li>
                  
                  <li  >
                      <Link href="/collection">
                      » Garment
                      </Link>
                    </li>
                </ul>
              </div>

              {/* Get in Touch */}
              <div>
                <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
                <div className="text-gray-300 text-sm space-y-4">
                  <p>Address :-</p>
                  <p>23, Kayasthapara 3rd Lane,</p>
                  <p>P.O.Haltu , Kolkata - 700078, India.</p>
                  <p>Subrat K Das - +91 9874883393</p>
                  <p>Office - +91 33 24840118</p>
                  <div className="mt-4">
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:info@silkroute.ind.in"
                        className="text-gray-300"
                      >
                        info@silkroute.ind.in
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">Follow us on</p>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/silkroute.ind/?fbclid=IwAR1mkeOFpW7C9aIIU6SuCU8yc2U-StNMY60AFIEbgoXyS6eliAZJFMvwE2A" target='_blank' className="text-gray-300 hover:text-white">
                        <Instagram size={24} />
                      </a>
                      <a href="https://www.facebook.com/teamsilkroute/?ref=pages_you_manage" target='_blank' className="text-gray-300 hover:text-white">
                        <Facebook size={24} />
                      </a>
                      <a href="https://www.linkedin.com/company/silkrouteofficial/" target='_blank' className="text-gray-300 hover:text-white">
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-800 pt-8">
            Copyright © 2025 All rights reserved By SilkRoute
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
