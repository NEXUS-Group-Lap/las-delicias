"use client";

import * as React from "react";

export interface ImagePlayerProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "children"> {
  images: string[];
  interval?: number;
  loop?: boolean;
  fade?: boolean;
  fadeDuration?: number;
  onComplete?: () => void;
  renderImage?: (src: string, index: number, isActive: boolean) => React.ReactNode;
}

export const ImagePlayer: React.FC<ImagePlayerProps> = ({
  images,
  interval = 4000,
  loop = true,
  fade = true,
  fadeDuration,
  onComplete,
  renderImage,
  className,
  alt = "",
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const duration = fadeDuration ?? Math.min(1400, Math.round(interval * 0.6));

  React.useEffect(() => {
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= images.length) {
          if (loop) return 0;
          onComplete?.();
          return prevIndex;
        }

        return nextIndex;
      });
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, interval, loop, onComplete]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="text-destructive">No images</div>;
  }

  if (!fade) {
    const src = images[currentIndex];
    return (
      <>
        {renderImage ? (
          renderImage(src, currentIndex, true)
        ) : (
          <img src={src} alt={alt} className={className} {...props} />
        )}
      </>
    );
  }

  return (
    <div className="relative h-full w-full">
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={src + index}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{ opacity: isActive ? 1 : 0, transitionDuration: `${duration}ms` }}
          >
            {renderImage ? (
              renderImage(src, index, isActive)
            ) : (
              <img
                src={src}
                alt={isActive ? alt : ""}
                className={className ?? "h-full w-full object-cover"}
                {...props}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
