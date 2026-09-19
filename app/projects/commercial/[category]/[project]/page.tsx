import Link from "next/link";
import ProjectGallery from "../../../../components/ProjectGallery";

const categoryNames: Record<string, string> = {
  office: "오피스",
  "cafe-dining": "카페·외식",
  store: "매장",
  medical: "병원·의료",
  education: "학원·교육",
  "beauty-wellness": "뷰티·웰니스",
  etc: "기타 상업공간",
};

export default async function CommercialProjectPage({
  params,
}: {
  params: Promise<{
    category: string;
    project: string;
  }>;
}) {
  const { category, project } = await params;

  const categoryName =
    categoryNames[category] || "상업공간";

  const projectNumber =
    project.replace("project-", "");

  return (
    <main className="min-h-screen bg-white text-[#111]">

      <section className="mx-auto max-w-[1600px] px-5 py-8 md:px-8 md:py-10 lg:px-12">

        <Link
          href={`/projects/commercial/${category}`}
          className="text-sm text-neutral-500"
        >
          ← {categoryName}
        </Link>

        <div className="mt-8 border-b border-black/10 pb-7">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-5">

              <p className="mb-3 text-[11px] tracking-[3px] text-neutral-400">
                COMMERCIAL PROJECT
              </p>

              <h1 className="text-[clamp(30px,3vw,42px)] font-medium leading-none tracking-[-0.04em]">
                프로젝트 {projectNumber}
              </h1>

            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6 lg:col-span-7 lg:grid-cols-4">

              <div>
                <p className="text-xs text-neutral-400">
                  위치
                </p>

                <p className="mt-2 text-sm">
                  대전광역시
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-400">
                  구분
                </p>

                <p className="mt-2 text-sm">
                  {categoryName}
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-400">
                  공사기간
                </p>

                <p className="mt-2 text-sm">
                  4주
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-400">
                  공사범위
                </p>

                <p className="mt-2 text-sm">
                  전체 인테리어
                </p>
              </div>

            </div>

          </div>

        </div>

        <ProjectGallery imageCount={8} />

      </section>

    </main>
  );
}