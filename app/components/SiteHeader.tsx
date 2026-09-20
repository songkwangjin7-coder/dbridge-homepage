"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="relative z-50 h-[82px] w-full border-b border-black/10 bg-white md:h-[108px]">

        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-12">

          {/* 로고 */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-[23px] font-semibold tracking-[-0.04em] md:text-[26px]"
          >
            DBRIDGE
          </Link>

          {/* 모바일 MENU */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[12px] tracking-[2px] md:hidden"
            aria-label="메뉴 열기"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>

          {/* PC 오른쪽 */}
          <div className="hidden h-full flex-col items-end justify-center gap-4 md:flex">

            {/* SNS */}
            <div className="flex items-center gap-5 text-[11px] text-neutral-500">
              <a href="#">
                인스타그램
              </a>

              <a href="#">
                네이버블로그
              </a>

              <a href="#">
                유튜브
              </a>
            </div>

            {/* 메뉴 */}
            <nav className="flex items-center gap-7 text-sm md:gap-9">

              <Link href="/#company">
                회사소개
              </Link>

              <Link href="/#business">
                사업분야
              </Link>

              {/* 시공사례 */}
              <div className="group relative">

                <span
                  data-cursor-hover
                  className="cursor-pointer py-6"
                >
                  시공사례
                </span>

                <div className="invisible absolute right-0 top-full w-[330px] translate-y-2 border border-black/10 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                  <Link
                    href="/projects/residential"
                    data-cursor-hover
                    className="block border-b border-black/10 px-6 py-5"
                  >
                    <div className="flex items-start justify-between gap-8">

                      <div>
                        <p className="text-sm font-medium">
                          주거공간
                        </p>

                        <p className="mt-2 text-xs text-neutral-400">
                          10평대부터 80평대 이상
                        </p>
                      </div>

                      <span className="text-sm text-neutral-400">
                        →
                      </span>

                    </div>
                  </Link>

                  <Link
                    href="/projects/commercial"
                    data-cursor-hover
                    className="block px-6 py-5"
                  >
                    <div className="flex items-start justify-between gap-8">

                      <div>
                        <p className="text-sm font-medium">
                          상업공간
                        </p>

                        <p className="mt-2 text-xs leading-5 text-neutral-400">
                          오피스 · 카페·외식 · 의료 · 교육 · 뷰티 외
                        </p>
                      </div>

                      <span className="text-sm text-neutral-400">
                        →
                      </span>

                    </div>
                  </Link>

                </div>

              </div>

              <Link href="/news">
                소식
              </Link>

              <Link href="/contact">
                상담문의
              </Link>

            </nav>

          </div>

        </div>
      </header>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed left-0 top-[82px] z-40 w-full bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible h-[calc(100vh-82px)] opacity-100"
            : "invisible h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col px-5 py-8">

          <Link
            href="/#company"
            onClick={closeMenu}
            className="border-t border-black/15 py-5 text-[24px] font-medium tracking-[-0.03em]"
          >
            회사소개
          </Link>

          <Link
            href="/#business"
            onClick={closeMenu}
            className="border-t border-black/15 py-5 text-[24px] font-medium tracking-[-0.03em]"
          >
            사업분야
          </Link>

          <div className="border-t border-black/15 py-5">

            <p className="text-[24px] font-medium tracking-[-0.03em]">
              시공사례
            </p>

            <div className="mt-5 flex flex-col gap-4 pl-1">

              <Link
                href="/projects/residential"
                onClick={closeMenu}
                className="flex items-center justify-between text-sm text-neutral-500"
              >
                <span>주거공간</span>
                <span>→</span>
              </Link>

              <Link
                href="/projects/commercial"
                onClick={closeMenu}
                className="flex items-center justify-between text-sm text-neutral-500"
              >
                <span>상업공간</span>
                <span>→</span>
              </Link>

            </div>

          </div>

          <Link
            href="/news"
            onClick={closeMenu}
            className="border-t border-black/15 py-5 text-[24px] font-medium tracking-[-0.03em]"
          >
            소식
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="border-y border-black/15 py-5 text-[24px] font-medium tracking-[-0.03em]"
          >
            상담문의
          </Link>

          {/* SNS */}
          <div className="mt-auto flex gap-5 pb-4 text-xs text-neutral-400">
            <a href="#">인스타그램</a>
            <a href="#">네이버블로그</a>
            <a href="#">유튜브</a>
          </div>

        </nav>
      </div>
    </>
  );
}