import Link from "next/link";

const categories = [
  { number: "01", name: "오피스", slug: "office" },
  { number: "02", name: "카페·외식", slug: "cafe-dining" },
  { number: "03", name: "매장", slug: "store" },
  { number: "04", name: "병원·의료", slug: "medical" },
  { number: "05", name: "학원·교육", slug: "education" },
  { number: "06", name: "뷰티·웰니스", slug: "beauty-wellness" },
  { number: "07", name: "기타 상업공간", slug: "etc" },
];

export default function CommercialPage() {
  return (
    <main className="bg-white text-[#111]">
      <section className="py-20 md:py-24 lg:py-28">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          {/* 상단 */}
          <div className="mb-16 md:mb-20">

            <p className="text-xs tracking-[4px] text-neutral-500">
              시공사례
            </p>

            <h1 className="mt-5 text-[clamp(48px,5vw,72px)] font-medium leading-none tracking-[-0.05em]">
              상업공간
            </h1>

            <p className="mt-7 text-sm text-neutral-500">
              공간 유형별 시공사례를 확인해보세요.
            </p>

          </div>

          {/* 카테고리 */}
          <div className="grid grid-cols-1 border-t border-black/20 md:grid-cols-2">

            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/projects/commercial/${category.slug}`}
                data-cursor-hover
                className={[
                  "group flex min-h-[190px] flex-col justify-between border-b border-black/20 p-7 md:min-h-[220px] md:p-9 lg:p-10",
                  index % 2 === 0 ? "md:border-r" : "",
                ].join(" ")}
              >

                <p className="text-sm text-neutral-400">
                  {category.number}
                </p>

                <div className="flex items-end justify-between gap-6">

                  <h2 className="text-[clamp(28px,2.5vw,38px)] font-medium tracking-[-0.04em]">
                    {category.name}
                  </h2>

                  <span className="text-[30px] leading-none text-neutral-500 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>
    </main>
  );
}