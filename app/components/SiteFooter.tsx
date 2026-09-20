import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-14 lg:px-12 lg:py-16">

        {/* 상단 */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-12 lg:grid-cols-12">

          {/* 브랜드 */}
          <div className="lg:col-span-6">

            <Link
              href="/"
              className="inline-block text-[32px] font-semibold tracking-[-0.04em]"
            >
              DBRIDGE
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/50">
              INTERIOR DESIGN & CONSTRUCTION
            </p>

          </div>

          {/* 메뉴 */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-6">

            <div>

              <p className="mb-5 text-xs tracking-[2px] text-white/30">
                MENU
              </p>

              <div className="flex flex-col items-start gap-3 text-sm">

                <Link href="/#company">
                  회사소개
                </Link>

                <Link href="/#business">
                  사업분야
                </Link>

                <Link href="/projects/residential">
                  시공사례
                </Link>

                <Link href="/news">
                  소식
                </Link>

                <Link href="/contact">
                  상담문의
                </Link>

              </div>

            </div>

            {/* SNS */}
            <div>

              <p className="mb-5 text-xs tracking-[2px] text-white/30">
                SOCIAL
              </p>

              <div className="flex flex-col items-start gap-3 text-sm">

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

            </div>

          </div>

        </div>

        {/* 하단 */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 DBRIDGE
          </p>

          <p>
            SPACE · DESIGN · CONSTRUCTION
          </p>

        </div>

      </div>
    </footer>
  );
}