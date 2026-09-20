import Link from "next/link";
import { notFound } from "next/navigation";

const newsData = {
  "residential-project": {
    category: "PROJECT",
    title: "새로운 주거공간 프로젝트",
    mobileTitle: (
      <>
        새로운 주거공간
        <br />
        프로젝트
      </>
    ),
    date: "2026.09.20",
    description:
      "DBRIDGE가 새롭게 완성한 주거공간 프로젝트를 소개합니다. 공간의 구조와 사용자의 생활 방식을 고려하여 편안함과 실용성을 함께 담았습니다.",
  },

  "commercial-site": {
    category: "SITE",
    title: "상업공간 시공 현장",
    mobileTitle: (
      <>
        상업공간
        <br />
        시공 현장
      </>
    ),
    date: "2026.09.15",
    description:
      "현재 진행 중인 DBRIDGE 상업공간 시공 현장을 소개합니다. 디자인 의도를 현장에 정확하게 구현하기 위해 세부 공정과 마감까지 꼼꼼하게 진행하고 있습니다.",
  },

  "dbridge-news": {
    category: "DBRIDGE",
    title: "DBRIDGE의 새로운 소식",
    mobileTitle: (
      <>
        DBRIDGE의
        <br />
        새로운 소식
      </>
    ),
    date: "2026.09.10",
    description:
      "공간의 새로운 가치를 만들어가는 DBRIDGE의 다양한 이야기와 새로운 소식을 전합니다.",
  },
};

type NewsSlug = keyof typeof newsData;

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const news = newsData[slug as NewsSlug];

  if (!news) {
    notFound();
  }

  return (
    <main className="bg-white text-[#111]">

      {/* 상단 */}
      <section className="pt-16 md:pt-20 lg:pt-24">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="relative">

            <p className="mb-8 text-xs tracking-[3px] text-neutral-500 lg:absolute lg:left-0 lg:top-4 lg:mb-0">
              {news.category}
            </p>

            <div className="text-center">

              {/* 모바일 제목 */}
              <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-0.05em] md:hidden">
                {news.mobileTitle}
              </h1>

              {/* 태블릿 / PC 제목 */}
              <h1 className="mx-auto hidden max-w-[1100px] text-[clamp(46px,5.5vw,82px)] font-medium leading-[1.05] tracking-[-0.05em] md:block">
                {news.title}
              </h1>

              <p className="mt-7 text-sm text-neutral-400">
                {news.date}
              </p>

            </div>

          </div>

          {/* 대표 이미지 */}
          <div className="mt-16 aspect-[16/7] bg-[#f1f1ef]">

            <div className="flex h-full items-center justify-center text-sm text-neutral-400">
              소식 대표 이미지
            </div>

          </div>

        </div>

      </section>

      {/* 본문 */}
      <section className="py-16 md:py-20 lg:py-24">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12">

            <div className="lg:col-start-3 lg:col-span-8">

              <p className="text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
                {news.description}
              </p>

              <div className="mt-14 aspect-[16/9] bg-[#f1f1ef]">

                <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                  본문 이미지
                </div>

              </div>

              <div className="mt-14 border-t border-black/20 pt-7">

                <Link
                  href="/news"
                  data-cursor-hover
                  className="inline-flex items-center gap-3 text-sm"
                >
                  <span>←</span>
                  <span>소식 목록으로</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}