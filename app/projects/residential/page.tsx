import Link from "next/link";

const categories = [
  { name: "10평형", slug: "10" },
  { name: "20평형", slug: "20" },
  { name: "30평형", slug: "30" },
  { name: "40평형", slug: "40" },
  { name: "50평형", slug: "50" },
  { name: "60평형", slug: "60" },
  { name: "70평형", slug: "70" },
  { name: "80평형+", slug: "80plus" },
];

export default function ResidentialPage() {
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
              주거공간
            </h1>

            <p className="mt-7 text-sm text-neutral-500">
              평형별 시공사례를 확인해보세요.
            </p>
          </div>

          {/* 평형 카테고리 */}
          <div className="grid grid-cols-1 border-t border-black/20 md:grid-cols-2">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/projects/residential/${category.slug}`}
                data-cursor-hover
                className={[
                  "group flex min-h-[150px] items-center justify-between border-b border-black/20 px-6 py-8 md:min-h-[220px] md:px-9 lg:px-10",
                  index % 2 === 0 ? "md:border-r" : "",
                ].join(" ")}
              >
                <h2 className="text-[28px] font-medium tracking-[-0.04em] md:text-[34px] lg:text-[38px]">
                  {category.name}
                </h2>

                <span className="text-[30px] leading-none text-neutral-500 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}