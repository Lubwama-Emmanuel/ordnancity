"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  isComingSoon?: boolean;
}

export default function ProductCard({
  name,
  description,
  price,
  image,
  category,
  isComingSoon = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Placeholder */}
      <div className="aspect-[3/4] bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4">👕</div>
            <p className="text-gray-400 text-sm">Image Coming Soon</p>
          </div>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        ></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>

        {/* Coming Soon Badge */}
        {isComingSoon && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-500 font-bold text-lg">{price}</span>
          <button
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              isComingSoon
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-yellow-500 text-black hover:bg-yellow-400"
            }`}
          >
            {isComingSoon ? "Coming Soon" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div
        className={`absolute inset-0 border-2 border-yellow-500/50 rounded-2xl transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
