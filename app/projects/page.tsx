import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111]">

      <section className="py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          {/* 상단 */}
          <div className="mb-16 md:mb-20">
            <p className="text-xs tracking-[4px] text-neutral-500">
              시공사례
            </p>

            <h1 className="mt-5 text-[clamp(48px,5vw,72px)] font-medium leading-[1.05] tracking-[-0.05em]">
              공간별 프로젝트
            </h1>

            <p className="mt-7 text-sm leading-7 text-neutral-500 md:text-base">
              DBRIDGE가 완성한 다양한 공간을 확인해보세요.
            </p>
          </div>

          {/* 공간 선택 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* 주거공간 */}
            <Link
              href="/projects/residential"
              data-cursor-hover
              className="group flex min-h-[320px] flex-col justify-between bg-[#f3f3f1] p-7 md:min-h-[480px] md:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <p className="text-sm text-neutral-400">
                  01
                </p>

                <span className="text-[30px] leading-none text-neutral-500 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              <div>
                <p className="mb-4 text-xs tracking-[3px] text-neutral-500">
                  RESIDENTIAL
                </p>

                <h2 className="text-[clamp(34px,4vw,56px)] font-medium tracking-[-0.05em] text-[#111]">
                  주거공간
                </h2>

                <p className="mt-5 max-w-[400px] text-sm leading-7 text-neutral-500">
                  10평대부터 80평대 이상까지 다양한 주거공간 시공사례를 확인해보세요.
                </p>
              </div>
            </Link>

            {/* 상업공간 */}
            <Link
              href="/projects/commercial"
              data-cursor-hover
              className="group flex min-h-[320px] flex-col justify-between bg-[#111] p-7 text-white md:min-h-[480px] md:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <p className="text-sm text-white/40">
                  02
                </p>

                <span className="text-[30px] leading-none text-white/60 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              <div>
                <p className="mb-4 text-xs tracking-[3px] text-white/40">
                  COMMERCIAL
                </p>

                <h2 className="text-[clamp(34px,4vw,56px)] font-medium tracking-[-0.05em] text-white">
                  상업공간
                </h2>

                <p className="mt-5 max-w-[430px] text-sm leading-7 text-white/50">
                  오피스, 카페·외식, 의료, 교육, 뷰티 등 다양한 상업공간 시공사례를 확인해보세요.
                </p>
              </div>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}