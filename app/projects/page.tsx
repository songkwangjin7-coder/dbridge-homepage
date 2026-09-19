import Link from "next/link";

export default function ResidentialPage() {
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

  return (
    <main className="min-h-screen bg-white text-[#111]">
      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12">

        <p className="mb-6 text-xs tracking-[4px] text-neutral-500">
          시공사례
        </p>

        <h1 className="text-[clamp(44px,7vw,100px)] font-medium tracking-[-0.05em]">
          주거공간
        </h1>

        <p className="mt-6 text-sm text-neutral-500 md:text-base">
          평형대별 주거공간 시공사례
        </p>

        <div className="mt-16 grid grid-cols-1 border-t border-black/20 md:grid-cols-2">

          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/projects/residential/${category.slug}`}
              data-cursor-hover
              className="flex min-h-[280px] items-end border-b border-black/20 p-8 transition-colors hover:bg-[#f5f5f3] md:min-h-[340px] md:p-12 md:odd:border-r"
            >
              <div>
                <p className="mb-4 text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="text-[clamp(30px,4vw,54px)] font-medium">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}