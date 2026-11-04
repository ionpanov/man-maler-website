import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryPhoto {
  thumb: string;
  full: string;
  alt: string;
  caption: string;
}

export interface GalleryLabels {
  open: (alt: string) => string;
  close: string;
  prev: string;
  next: string;
  counter: (current: number, total: number) => string;
}

const btn =
  "absolute z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

export default function PhotoGallery({
  photos,
  labels,
  title,
}: {
  photos: GalleryPhoto[];
  labels: GalleryLabels;
  title: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const total = photos.length;
  const go = (step: number) => setActive((current) => (current === null ? current : (current + step + total) % total));
  const photo = active === null ? null : photos[active];

  return (
    <>
      <ul className="columns-2 md:columns-3 gap-3 [&>li]:mb-3 list-none p-0 m-0">
        {photos.map((item, index) => (
          <li key={item.full} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-label={labels.open(item.alt)}
              className="block w-full overflow-hidden rounded-2xl shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={item.thumb}
                alt={item.alt}
                title={item.caption}
                width={700}
                height={933}
                loading="lazy"
                decoding="async"
                className="w-full h-auto transition-transform duration-300 hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <DialogPrimitive.Root open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 focus:outline-none"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") go(-1);
              if (event.key === "ArrowRight") go(1);
            }}
          >
            <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">{photo?.alt}</DialogPrimitive.Description>
            {photo && (
              <figure className="flex max-h-full flex-col items-center">
                <img
                  src={photo.full}
                  alt={photo.alt}
                  className="max-h-[80vh] max-w-full w-auto rounded-lg object-contain"
                />
                <figcaption className="mt-3 text-center text-sm text-white/90">
                  {photo.caption} · {labels.counter((active ?? 0) + 1, total)}
                </figcaption>
              </figure>
            )}
            <DialogPrimitive.Close className={`${btn} right-3 top-3`} aria-label={labels.close}>
              <X size={22} />
            </DialogPrimitive.Close>
            <button type="button" className={`${btn} left-3 top-1/2 -translate-y-1/2`} aria-label={labels.prev} onClick={() => go(-1)}>
              <ChevronLeft size={24} />
            </button>
            <button type="button" className={`${btn} right-3 top-1/2 -translate-y-1/2`} aria-label={labels.next} onClick={() => go(1)}>
              <ChevronRight size={24} />
            </button>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
