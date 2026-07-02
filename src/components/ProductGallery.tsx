'use client';

import { useState } from 'react';
import Image from 'next/image';

type GalleryImage = {
  src: string;
  alt: string;
};

export default function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  if (!active) {
    return null;
  }

  return (
    <div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover max-h-[480px]"
          priority
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={image.alt}
              aria-current={index === activeIndex}
              className={`rounded-md overflow-hidden border-2 transition-colors ${
                index === activeIndex ? 'border-blue-700' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={134}
                className="w-full h-auto object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
