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

  const categoryName = categoryNames[category] ?? "주거공간";
  const projectNumber = project.replace("project-", "");

  return (
    <main className="bg-white text-[#111]">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <Link
            href={`/projects/residential/${category}`}
            data-cursor-hover
            className="text-sm text-neutral-500 transition-opacity hover:opacity-50"
          >
            ← {categoryName}
          </Link>

          <div className="mt-10 border-b border-black/15 pb-10 md:mt-14 md:pb-14 lg:flex lg:items-end lg:justify-between">

            <div>
              <p className="text-xs tracking-[3px] text-neutral-400">
                RESIDENTIAL PROJECT
              </p>

              <h1 className="mt-4 text-[40px] font-medium leading-none tracking-[-0.05em] md:text-[56px] lg:text-[64px]">
                프로젝트 {projectNumber}
              </h1>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 text-sm md:grid-cols-4 lg:mt-0 lg:min-w-[560px]">

              <div>
                <p className="text-xs text-neutral-400">LOCATION</p>
                <p className="mt-2">대전광역시</p>
              </div>

              <div>
                <p className="text-xs text-neutral-400">AREA</p>
                <p className="mt-2">{categoryName}</p>
              </div>

              <div>
                <p className="text-xs text-neutral-400">PERIOD</p>
                <p className="mt-2">4주</p>
              </div>

              <div>
                <p className="text-xs text-neutral-400">SCOPE</p>
                <p className="mt-2">전체 인테리어</p>
              </div>

            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <ProjectGallery imageCount={8} />
          </div>

        </div>
      </section>
    </main>
  );
}