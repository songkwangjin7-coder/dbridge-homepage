"use client";

import { useEffect, useRef, useState } from "react";

type ProjectGalleryProps = {
  imageCount?: number;
};

export default function ProjectGallery({
  imageCount = 6,
}: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const images = Array.from(
    { length: imageCount },
    (_, index) => index + 1
  );

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? imageCount - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === imageCount - 1 ? 0 : prev + 1
    );
  };

  /* 자동 슬라이드 */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === imageCount - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [imageCount]);

  /* 현재 이미지에 맞춰 썸네일 자동 이동 */
  useEffect(() => {
    thumbnailRefs.current[current]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [current]);

  return (
    <div className="w-full">

      {/* 메인 이미지 */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f1f1ef] md:aspect-[16/7]">

        <div className="flex h-full items-center justify-center text-sm text-neutral-400">
          프로젝트 이미지 {current + 1}
        </div>

        {/* 이전 */}
        <button
          type="button"
          onClick={prevImage}
          data-cursor-hover
          aria-label="이전 이미지"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-[#111] transition-transform duration-200 hover:-translate-x-1 md:left-5 md:text-lg"
        >
          ‹
        </button>

        {/* 다음 */}
        <button
          type="button"
          onClick={nextImage}
          data-cursor-hover
          aria-label="다음 이미지"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-base text-[#111] transition-transform duration-200 hover:translate-x-1 md:right-5 md:text-lg"
        >
          ›
        </button>

        {/* 페이지 번호 */}
        <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1.5 text-[10px] text-white md:bottom-5 md:right-5 md:text-[11px]">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(imageCount).padStart(2, "0")}
        </div>

      </div>

      {/* 썸네일 */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">

        {images.map((image, index) => (
          <button
            key={image}
            ref={(element) => {
              thumbnailRefs.current[index] = element;
            }}
            type="button"
            onClick={() => setCurrent(index)}
            data-cursor-hover
            className={`relative min-w-[calc(50%-6px)] overflow-hidden bg-[#f1f1ef] md:min-w-[190px] ${
              current === index
                ? "opacity-100"
                : "opacity-50"
            }`}
          >

            <div className="aspect-[4/3]">

              <div className="flex h-full items-center justify-center text-xs text-neutral-400">
                프로젝트 이미지 {image}
              </div>

            </div>

            {current === index && (
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-black" />
            )}

          </button>
        ))}

      </div>

    </div>
  );
}