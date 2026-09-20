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
          <div className="mb-14 md:mb-16 lg:mb-20">
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

          {/* 카테고리 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/projects/residential/${category.slug}`}
                data-cursor-hover
                className="group relative block aspect-[4/3] overflow-hidden bg-[#e9e9e7] md:aspect-[16/10]"
              >
                {/* 대표 이미지 영역 */}
                <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-400">
                  대표 이미지
                </div>

                {/* 기본 하단 음영 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* 마우스 호버 음영 */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />

                {/* 텍스트 */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7 lg:p-8">
                  <h2 className="text-[28px] font-medium tracking-[-0.04em] text-white md:text-[32px] lg:text-[36px]">
                    {category.name}
                  </h2>

                  <span className="text-[30px] leading-none text-white transition-transform duration-300 group-hover:translate-x-2">
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