import Link from "next/link";
import ProjectGallery from "../../../../components/ProjectGallery";

const categoryNames: Record<string, string> = {
  "10": "10평형",
  "20": "20평형",
  "30": "30평형",
  "40": "40평형",
  "50": "50평형",
  "60": "60평형",
  "70": "70평형",
  "80plus": "80평형+",
};

export default async function ResidentialProjectPage({
  params,
}: {
  params: Promise<{
    category: string;
    project: string;
  }>;
}) {
  const { category, project } = await params;

  const categoryName =
    categoryNames[category] || "주거공간";

  const projectNumber =
    project.replace("project-", "");

  return (
    <main className="min-h-screen bg-white text-[#111]">

      <section className="mx-auto max-w-[1600px] px-5 py-8 md:px-8 md:py-10 lg:px-12">

        {/* 뒤로가기 */}
        <Link
          href={`/projects/residential/${category}`}
          className="text-sm text-neutral-500"
        >
          ← {categoryName}
        </Link>

        {/* 프로젝트 헤더 */}
        <div className="mt-8 border-b border-black/10 pb-7">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">

            {/* 프로젝트명 */}
            <div className="lg:col-span-5">

              <p className="mb-3 text-[11px] tracking-[3px] text-neutral-400">
                RESIDENTIAL PROJECT
              </p>

              <h1 className="text-[clamp(30px,3vw,42px)] font-medium leading-none tracking-[-0.04em]">
                프로젝트 {projectNumber}
              </h1>

            </div>

            {/* 프로젝트 정보 */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 lg:col-span-7 lg:grid-cols-4">

              <div className="flex flex-col justify-end">
                <p className="text-xs text-neutral-400">
                  위치
                </p>

                <p className="mt-2 text-sm leading-none">
                  대전광역시
                </p>
              </div>

              <div className="flex flex-col justify-end">
                <p className="text-xs text-neutral-400">
                  평형
                </p>

                <p className="mt-2 text-sm leading-none">
                  {categoryName}
                </p>
              </div>

              <div className="flex flex-col justify-end">
                <p className="text-xs text-neutral-400">
                  공사기간
                </p>

                <p className="mt-2 text-sm leading-none">
                  4주
                </p>
              </div>

              <div className="flex flex-col justify-end">
                <p className="text-xs text-neutral-400">
                  공사범위
                </p>

                <p className="mt-2 text-sm leading-none">
                  전체 인테리어
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* 이미지 갤러리 */}
        <ProjectGallery imageCount={8} />

      </section>

    </main>
  );
}