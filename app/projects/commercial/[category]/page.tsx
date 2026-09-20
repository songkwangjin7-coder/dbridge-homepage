import Link from "next/link";

const categoryNames: Record<string, string> = {
  office: "오피스",
  "cafe-dining": "카페·외식",
  store: "매장",
  medical: "병원·의료",
  education: "학원·교육",
  "beauty-wellness": "뷰티·웰니스",
  etc: "기타 상업공간",
};

const projects = Array.from({ length: 8 }, (_, index) => ({
  slug: `project-${String(index + 1).padStart(2, "0")}`,
  title: `프로젝트 ${String(index + 1).padStart(2, "0")}`,
  date: "26.09",
}));

export default async function CommercialCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryName = categoryNames[category] ?? "상업공간";

  return (
    <main className="bg-white text-[#111]">
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          {/* 상단 */}
          <div className="mb-10 md:mb-14">
            <Link
              href="/projects/commercial"
              data-cursor-hover
              className="text-sm text-neutral-600 transition-opacity hover:opacity-50"
            >
              ← 상업공간
            </Link>

            <h1 className="mt-9 text-[42px] font-medium leading-none tracking-[-0.05em] md:text-[56px] lg:text-[64px]">
              {categoryName}
            </h1>

            <p className="mt-5 text-sm text-neutral-500">
              {categoryName} 시공사례를 소개합니다.
            </p>
          </div>

          {/* 프로젝트 목록 */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/commercial/${category}/${project.slug}`}
                data-cursor-hover
                className="group block"
              >
                <div className="aspect-[2/1] overflow-hidden bg-[#f1f1ef]">
                  <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                    프로젝트 이미지
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <h2 className="text-[18px] font-medium tracking-[-0.03em] md:text-[20px]">
                    {project.title}
                  </h2>

                  <span className="text-xs tracking-[0.05em] text-neutral-400 md:text-sm">
                    {project.date}
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