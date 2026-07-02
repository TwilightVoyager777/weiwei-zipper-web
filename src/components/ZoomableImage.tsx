'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function ZoomableImage({ src, alt, width, height, className }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={alt}
      >
        <Image src={src} alt={alt} width={width} height={height} className={className} />
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1067}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}
