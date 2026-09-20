import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const news = [
    {
      slug: "residential-project",
      number: "01",
      category: "PROJECT",
      title: "새로운 주거공간 프로젝트",
      date: "2026.09.20",
    },
    {
      slug: "commercial-site",
      number: "02",
      category: "SITE",
      title: "상업공간 시공 현장",
      date: "2026.09.15",
    },
    {
      slug: "dbridge-news",
      number: "03",
      category: "DBRIDGE",
      title: "DBRIDGE의 새로운 소식",
      date: "2026.09.10",
    },
  ];

  return (
    <main className="bg-white text-[#111]">

      {/* 메인 비주얼 */}
      <section className="min-h-[calc(100vh-108px)] bg-[#f3f3f1]">
        <div className="mx-auto grid min-h-[calc(100vh-108px)] max-w-[1600px] grid-cols-1 px-5 md:px-8 lg:grid-cols-12 lg:px-12">

          <div className="flex flex-col justify-between py-14 lg:col-span-6 lg:py-16">

            <p className="text-xs tracking-[4px] text-neutral-500">
              DBRIDGE INTERIOR
            </p>

            <div className="py-16 lg:py-0">
              <h1 className="text-[clamp(46px,6.2vw,96px)] font-medium leading-[0.98] tracking-[-0.055em]">
                공간의 가치를
                <br />
                디자인합니다.
              </h1>

              <p className="mt-8 max-w-[500px] text-sm leading-7 text-neutral-600">
                공간의 목적과 사람의 경험을 이해하고,
                <br />
                디자인부터 시공까지 완성도 높은 공간을 만듭니다.
              </p>
            </div>

            <div className="flex items-end justify-between border-t border-black/20 pt-5">
              <p className="text-xs text-neutral-500">
                INTERIOR DESIGN & CONSTRUCTION
              </p>

              <p className="text-xs text-neutral-400">
                SCROLL ↓
              </p>
            </div>

          </div>

          <div className="pb-10 lg:col-span-6 lg:py-12 lg:pl-10">
            <div className="relative h-[420px] overflow-hidden md:h-[540px] lg:h-full lg:min-h-[620px]">

              <Image
                src="/images/main-hero.png"
                alt="DBRIDGE 인테리어"
                fill
                priority
                className="object-cover"
              />

            </div>
          </div>

        </div>
      </section>

      {/* 회사소개 */}
      <section id="company" className="py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            <div className="lg:col-span-3">
              <p className="text-xs tracking-[4px] text-neutral-500">
                회사소개
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="max-w-[1100px] text-[clamp(36px,4.6vw,68px)] font-medium leading-[1.1] tracking-[-0.045em]">
                공간과 사람을 연결하고,
                <br />
                새로운 경험을 만듭니다.
              </h2>
            </div>

          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f1f1ef]">

                <Image
                  src="/images/main-hero.png"
                  alt="DBRIDGE 공간 디자인"
                  fill
                  className="object-cover"
                />

              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-10">

              <p className="max-w-[520px] text-base leading-8 text-neutral-600">
                DBRIDGE는 공간의 목적과 사용자의 경험을 이해하고,
                디자인부터 시공까지 하나의 흐름으로 완성합니다.
                주거공간과 상업공간 각각의 특성에 맞는 방향을 제안하고
                공간이 가진 가능성을 새로운 가치로 연결합니다.
              </p>

              <p className="mt-8 text-xs tracking-[3px] text-neutral-400">
                DESIGN · CONSTRUCTION · SPACE
              </p>

            </div>

          </div>

          <div className="mt-20 grid grid-cols-1 border-t border-black/20 md:grid-cols-3">

            <div className="border-b border-black/20 py-10 md:border-r md:p-10 lg:p-12">
              <p className="text-sm text-neutral-500">01</p>

              <p className="mt-12 text-[13px] tracking-[3px] text-neutral-500">
                DESIGN
              </p>

              <h3 className="mt-4 text-[26px] font-medium tracking-[-0.03em]">
                목적에서 시작하는 디자인
              </h3>

              <p className="mt-5 max-w-[350px] text-[15px] leading-7 text-neutral-500">
                공간의 용도와 사용자의 동선을 고려해
                가장 적합한 디자인 방향을 제안합니다.
              </p>
            </div>

            <div className="border-b border-black/20 py-10 md:border-r md:p-10 lg:p-12">
              <p className="text-sm text-neutral-500">02</p>

              <p className="mt-12 text-[13px] tracking-[3px] text-neutral-500">
                CONSTRUCTION
              </p>

              <h3 className="mt-4 text-[26px] font-medium tracking-[-0.03em]">
                완성도를 높이는 시공
              </h3>

              <p className="mt-5 max-w-[350px] text-[15px] leading-7 text-neutral-500">
                설계부터 현장 관리와 마감까지
                체계적인 과정으로 공간을 완성합니다.
              </p>
            </div>

            <div className="border-b border-black/20 py-10 md:p-10 lg:p-12">
              <p className="text-sm text-neutral-500">03</p>

              <p className="mt-12 text-[13px] tracking-[3px] text-neutral-500">
                SPACE
              </p>

              <h3 className="mt-4 text-[26px] font-medium tracking-[-0.03em]">
                공간에 맞는 새로운 가치
              </h3>

              <p className="mt-5 max-w-[350px] text-[15px] leading-7 text-neutral-500">
                주거부터 상업공간까지 각 공간의 특성을 살려
                새로운 경험과 가치를 만들어갑니다.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 사업분야 */}
      <section
        id="business"
        className="bg-[#f5f5f3] py-24 md:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

            <div className="lg:col-span-3">
              <p className="text-xs tracking-[4px] text-neutral-600">
                사업분야
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="text-[clamp(36px,4.6vw,68px)] font-medium leading-[1.1] tracking-[-0.045em]">
                디자인부터 시공까지,
                <br />
                하나의 흐름으로 완성합니다.
              </h2>
            </div>

          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">

            <div data-cursor-hover className="group">

              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e8e5]">
                <Image
                  src="/images/main-hero.png"
                  alt="인테리어 디자인"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-6 border-t border-black/20 pt-6">
                <p className="text-sm text-neutral-500">01</p>

                <h3 className="mt-4 text-[28px] font-medium tracking-[-0.04em]">
                  인테리어 디자인
                </h3>

                <p className="mt-4 max-w-[480px] text-[15px] leading-7 text-neutral-500">
                  공간의 목적과 사용자의 동선을 분석해
                  공간에 가장 적합한 디자인 방향을 제안합니다.
                </p>
              </div>

            </div>

            <div data-cursor-hover className="group">

              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e8e5]">
                <Image
                  src="/images/main-hero.png"
                  alt="인테리어 시공"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-6 border-t border-black/20 pt-6">
                <p className="text-sm text-neutral-500">02</p>

                <h3 className="mt-4 text-[28px] font-medium tracking-[-0.04em]">
                  인테리어 시공
                </h3>

                <p className="mt-4 max-w-[480px] text-[15px] leading-7 text-neutral-500">
                  설계부터 현장 관리와 마감까지
                  체계적인 프로세스로 공간을 완성합니다.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 소식 */}
      <section id="news" className="py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

            <div className="lg:col-span-3">
              <p className="text-xs tracking-[4px] text-neutral-600">
                소식
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="text-[clamp(40px,5vw,72px)] font-medium leading-[1.08] tracking-[-0.045em]">
                DBRIDGE의
                <br />
                새로운 소식
              </h2>
            </div>

          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">

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

                <div className="mt-6 aspect-[4/3] overflow-hidden bg-[#f1f1ef]">
                  <div className="flex h-full items-center justify-center text-xs text-neutral-400">
                    소식 이미지
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-xs text-neutral-400">
                  {item.date}
                </p>

              </Link>
            ))}

          </div>

          <div className="mt-12 flex justify-end">

            <Link
              href="/news"
              data-cursor-hover
              className="inline-flex items-center gap-4 border-b border-black pb-2 text-[15px]"
            >
              소식 전체보기
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>

      {/* 상담문의 CTA */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">

          <p className="text-xs tracking-[4px] text-white/40">
            상담문의
          </p>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-9">

              <h2 className="text-[clamp(42px,6.5vw,92px)] font-medium leading-[1.03] tracking-[-0.055em]">
                새로운 공간을
                <br />
                함께 만들어보세요.
              </h2>

            </div>

            <div className="lg:col-span-3">

              <Link
                href="/contact"
                data-cursor-hover
                className="flex items-center justify-between border-t border-white/30 py-6 text-base"
              >
                <span>상담문의 바로가기</span>
                <span>→</span>
              </Link>

              <p className="mt-5 text-sm leading-7 text-white/40">
                프로젝트에 대한 간단한 정보를 남겨주시면
                확인 후 상담을 도와드립니다.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}