import Link from "next/link";
import { notFound } from "next/navigation";

const newsData = {
  "residential-project": {
    category: "PROJECT",
    title: "새로운 주거공간 프로젝트",
    date: "2026.09.20",
    description:
      "DBRIDGE가 새롭게 완성한 주거공간 프로젝트를 소개합니다. 공간의 구조와 사용자의 생활 방식을 고려하여 편안함과 실용성을 함께 담았습니다.",
  },

  "commercial-site": {
    category: "SITE",
    title: "상업공간 시공 현장",
    date: "2026.09.15",
    description:
      "현재 진행 중인 DBRIDGE 상업공간 시공 현장을 소개합니다. 디자인 의도를 현장에 정확하게 구현하기 위해 세부 공정과 마감까지 꼼꼼하게 진행하고 있습니다.",
  },

  "dbridge-news": {
    category: "DBRIDGE",
    title: "DBRIDGE의 새로운 소식",
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
      <section className="pt-20 md:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

            <div className="lg:col-span-3">
              <p className="text-xs tracking-[3px] text-neutral-400">
                {news.category}
              </p>
            </div>

            <div className="lg:col-span-9">

              <h1 className="max-w-[1000px] text-[clamp(38px,5vw,72px)] font-medium leading-[1.08] tracking-[-0.045em]">
                {news.title}
              </h1>

              <p className="mt-8 text-sm text-neutral-400">
                {news.date}
              </p>

            </div>

          </div>

          {/* 대표 이미지 */}
          <div className="mt-20 aspect-[16/7] bg-[#f1f1ef]">

            <div className="flex h-full items-center justify-center text-sm text-neutral-400">
              소식 대표 이미지
            </div>

          </div>

        </div>
      </section>

      {/* 본문 */}
      <section className="py-20 md:py-28">

        <div className="mx-auto grid max-w-[1600px] grid-cols-1 px-5 md:px-8 lg:grid-cols-12 lg:px-12">

          <div className="lg:col-start-4 lg:col-span-7">

            <p className="text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              {news.description}
            </p>

            {/* 본문 이미지 */}
            <div className="mt-16 aspect-[16/10] bg-[#f1f1ef]">

              <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                본문 이미지
              </div>

            </div>

            {/* 목록으로 */}
            <div className="mt-16 border-t border-black/20 pt-8">

              <Link
                href="/#news"
                data-cursor-hover
                className="inline-block text-sm"
              >
                ← 소식 목록으로
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}