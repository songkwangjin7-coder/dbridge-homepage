"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const interactive = target.closest(
        "a, button, [data-cursor-hover], [role='button'], .cursor-pointer"
      );

      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none
        fixed
        z-[99999]
        hidden
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-black
        transition-[width,height]
        duration-200
        md:block
        ${
          isHovering
            ? "h-[23px] w-[23px]"
            : "h-[18px] w-[18px]"
        }
      `}
    />
  );
}