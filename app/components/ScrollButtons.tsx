"use client";

export default function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 md:bottom-8 md:right-8">

      <button
        type="button"
        onClick={scrollToTop}
        data-cursor-hover
        aria-label="맨 위로 이동"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/90 text-lg shadow-sm backdrop-blur transition hover:bg-black hover:text-white"
      >
        ↑
      </button>

      <button
        type="button"
        onClick={scrollToBottom}
        data-cursor-hover
        aria-label="맨 아래로 이동"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/90 text-lg shadow-sm backdrop-blur transition hover:bg-black hover:text-white"
      >
        ↓
      </button>

    </div>
  );
}