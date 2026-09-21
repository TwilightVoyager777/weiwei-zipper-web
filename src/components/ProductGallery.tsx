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
          // The gallery sits in `lg:col-span-2` of a 3-column grid inside the
          // page container, so it is never as wide as the viewport above `lg`.
          // Without this the browser assumes 100vw and asks the optimizer for
          // the 3840px variant; source images are smaller today so it costs
          // nothing yet, but it would the moment they are replaced.
          sizes="(min-width: 1280px) 800px, (min-width: 1024px) 65vw, 100vw"
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
                sizes="(min-width: 1024px) 130px, (min-width: 640px) 110px, 90px"
                className="w-full h-auto object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
