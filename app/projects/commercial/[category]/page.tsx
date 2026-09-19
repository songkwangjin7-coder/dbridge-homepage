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

export default async function CommercialCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryName =
    categoryNames[category] || "상업공간";

  const projects = Array.from({ length: 8 }, (_, index) => ({
    slug: `project-${String(index + 1).padStart(2, "0")}`,
    number: String(index + 1).padStart(2, "0"),
    title: `프로젝트 ${String(index + 1).padStart(2, "0")}`,
  }));

  return (
    <main className="min-h-screen bg-white text-[#111]">

      <section className="mx-auto max-w-[1600px] px-5 py-8 md:px-8 md:py-10 lg:px-12">

        <Link
          href="/projects/commercial"
          className="text-sm text-neutral-500"
        >
          ← 상업공간
        </Link>

        <div className="mt-8">
          <h1 className="text-[clamp(36px,4.5vw,64px)] font-medium tracking-[-0.05em]">
            {categoryName}
          </h1>

          <p className="mt-3 text-sm text-neutral-500 md:text-base">
            {categoryName} 시공사례를 소개합니다.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">

          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/commercial/${category}/${project.slug}`}
              data-cursor-hover
              className="block"
            >

              <div className="aspect-[2/1] bg-[#f1f1ef]">
                <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                  프로젝트 이미지
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between">

                <h2 className="text-lg font-medium md:text-xl">
                  {project.title}
                </h2>

                <span className="text-sm text-neutral-400">
                  {project.number}
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}