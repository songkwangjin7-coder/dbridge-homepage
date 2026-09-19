"use client";

import { useEffect, useState } from "react";

type ProjectGalleryProps = {
  imageCount?: number;
};

export default function ProjectGallery({
  imageCount = 6,
}: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const images = Array.from(
    { length: imageCount },
    (_, index) => index + 1
  );

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="mt-10">

      {/* 대표 이미지 */}
      <div className="relative overflow-hidden bg-[#f1f1ef]">

        <div className="aspect-[16/7]">
          <div className="flex h-full items-center justify-center text-sm text-neutral-400">
            프로젝트 이미지 {images[current]}
          </div>
        </div>

        {/* 이전 */}
        <button
          onClick={previousSlide}
          aria-label="이전 이미지"
          className="
            absolute
            left-5
            top-1/2
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/80
            text-2xl
            backdrop-blur
            transition
            hover:bg-white
          "
        >
          ‹
        </button>

        {/* 다음 */}
        <button
          onClick={nextSlide}
          aria-label="다음 이미지"
          className="
            absolute
            right-5
            top-1/2
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/80
            text-2xl
            backdrop-blur
            transition
            hover:bg-white
          "
        >
          ›
        </button>

        {/* 페이지 표시 */}
        <div className="absolute bottom-5 right-5 rounded-full bg-black/70 px-4 py-2 text-xs text-white">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

      </div>

      {/* 상세 이미지 썸네일 */}
      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">

        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setCurrent(index)}
            className={`
              relative
              aspect-[4/3]
              min-w-[160px]
              overflow-hidden
              bg-[#f1f1ef]
              transition-opacity
              md:min-w-[190px]
              ${
                current === index
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-80"
              }
            `}
          >
            <div className="flex h-full items-center justify-center text-xs text-neutral-400">
              이미지 {image}
            </div>

            {current === index && (
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
            )}
          </button>
        ))}

      </div>

    </div>
  );
}