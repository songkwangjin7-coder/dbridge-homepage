import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative z-50 h-[108px] w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-12">

        {/* 로고 */}
        <Link
          href="/"
          className="text-[26px] font-semibold tracking-[-0.04em]"
        >
          DBRIDGE
        </Link>

        {/* 오른쪽 */}
        <div className="flex h-full flex-col items-end justify-center gap-4">

          {/* SNS */}
          <div className="hidden items-center gap-5 text-[11px] text-neutral-500 md:flex">
            <a href="#" target="_blank" rel="noreferrer">
              인스타그램
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              네이버블로그
            </a>

            <a href="#" target="_blank" rel="noreferrer">
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
  );
}