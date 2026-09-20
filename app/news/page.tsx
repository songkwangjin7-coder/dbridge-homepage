import Link from "next/link";

const news = [
  {
    slug: "residential-project",
    number: "01",
    category: "PROJECT",
    title: "새로운 주거공간 프로젝트",
    description:
      "DBRIDGE가 새롭게 완성한 주거공간 프로젝트를 소개합니다.",
    date: "2026.09.20",
  },
  {
    slug: "commercial-site",
    number: "02",
    category: "SITE",
    title: "상업공간 시공 현장",
    description:
      "디자인 의도를 공간에 구현해가는 DBRIDGE의 시공 현장을 소개합니다.",
    date: "2026.09.15",
  },
  {
    slug: "dbridge-news",
    number: "03",
    category: "DBRIDGE",
    title: "DBRIDGE의 새로운 소식",
    description:
      "공간의 새로운 가치를 만들어가는 DBRIDGE의 이야기를 전합니다.",
    date: "2026.09.10",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-white text-[#111]">

      <section className="py-20 md:py-28 lg:py-36">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          {/* 상단 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

            <div className="lg:col-span-3">
              <p className="text-xs tracking-[4px] text-neutral-500">
                소식
              </p>
            </div>

            <div className="lg:col-span-9">

              {/* 모바일 */}
              <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-0.05em] md:hidden">
                DBRIDGE의
                <br />
                새로운 이야기를
                <br />
                전합니다.
              </h1>

              {/* 태블릿 / PC */}
              <h1 className="hidden text-[clamp(48px,5vw,76px)] font-medium leading-[1.08] tracking-[-0.05em] md:block">
                DBRIDGE의
                <br />
                새로운 이야기를 전합니다.
              </h1>

              <p className="mt-8 max-w-[650px] text-sm leading-7 text-neutral-500 md:text-base">
                새로운 프로젝트와 시공 현장, DBRIDGE의 다양한 소식을
                확인해보세요.
              </p>

            </div>

          </div>

          {/* 뉴스 목록 */}
          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">

            {news.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                data-cursor-hover
                className="group block border-t border-black/20 pt-6"
              >

                <div className="flex items-center justify-between">

                  <p className="text-xs text-neutral-400">
                    {item.number}
                  </p>

                  <p className="text-xs tracking-[2px] text-neutral-400">
                    {item.category}
                  </p>

                </div>

                <div className="mt-6 aspect-[4/3] bg-[#f1f1ef]">

                  <div className="flex h-full items-center justify-center text-xs text-neutral-400">
                    소식 이미지
                  </div>

                </div>

                <h2 className="mt-6 text-[24px] font-medium tracking-[-0.03em]">
                  {item.title}
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-neutral-500">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <p className="text-xs text-neutral-400">
                    {item.date}
                  </p>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
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