export default function ContactPage() {
  return (
    <main className="bg-white text-[#111]">

      {/* 상단 */}
      <section className="pt-24 md:pt-32 lg:pt-40">
        <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

            <div className="lg:col-span-3">
              <p className="text-xs tracking-[4px] text-neutral-600">
                상담문의
              </p>
            </div>

            <div className="lg:col-span-9">

              {/* 모바일 제목 */}
              <h1 className="text-[40px] font-medium leading-[1.08] tracking-[-0.05em] md:hidden">
                새로운 공간의 시작을
                <br />
                DBRIDGE와
                <br />
                함께하세요.
              </h1>

              {/* PC 제목 */}
              <h1 className="hidden text-[clamp(42px,5.5vw,78px)] font-medium leading-[1.08] tracking-[-0.05em] md:block">
                새로운 공간의 시작을
                <br />
                DBRIDGE와 함께하세요.
              </h1>

              <p className="mt-8 max-w-[620px] text-sm leading-7 text-neutral-500 md:text-base">
                프로젝트에 대한 간단한 정보를 남겨주시면
                확인 후 상담을 도와드리겠습니다.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* 문의 폼 */}
      <section className="py-20 md:py-28 lg:py-32">

        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-5 md:px-8 lg:grid-cols-12 lg:px-12">

          {/* 왼쪽 */}
          <div className="lg:col-span-3">

            <div className="border-t border-black/20 pt-6">

              <p className="text-[13px] tracking-[3px] text-neutral-500">
                CONTACT
              </p>

              <div className="mt-10 space-y-9">

                <div>
                  <p className="text-[13px] text-neutral-500">
                    상담 분야
                  </p>

                  <p className="mt-3 text-[15px]">
                    주거공간 · 상업공간
                  </p>
                </div>

                <div>
                  <p className="text-[13px] text-neutral-500">
                    진행 절차
                  </p>

                  <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                    문의 접수
                    <br />
                    상담 진행
                    <br />
                    현장 미팅
                    <br />
                    견적 및 계약
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* 폼 */}
          <div className="lg:col-span-9">

            <form className="grid grid-cols-1 gap-x-8 md:grid-cols-2">

              <div className="border-t border-black/20 py-7">
                <label className="block text-[13px] text-neutral-500">
                  이름 / 업체명
                </label>

                <input
                  type="text"
                  placeholder="이름 또는 업체명을 입력해주세요."
                  className="mt-4 w-full bg-transparent text-base outline-none placeholder:text-neutral-400"
                />
              </div>

              <div className="border-t border-black/20 py-7">
                <label className="block text-[13px] text-neutral-500">
                  연락처
                </label>

                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  className="mt-4 w-full bg-transparent text-base outline-none placeholder:text-neutral-400"
                />
              </div>

              <div className="border-t border-black/20 py-7">
                <label className="block text-[13px] text-neutral-500">
                  공간 구분
                </label>

                <select
                  defaultValue=""
                  className="mt-4 w-full bg-transparent text-base text-neutral-700 outline-none"
                >
                  <option value="" disabled>
                    공간을 선택해주세요.
                  </option>

                  <option value="residential">
                    주거공간
                  </option>

                  <option value="commercial">
                    상업공간
                  </option>
                </select>
              </div>

              <div className="border-t border-black/20 py-7">
                <label className="block text-[13px] text-neutral-500">
                  현장 지역
                </label>

                <input
                  type="text"
                  placeholder="예) 대전광역시"
                  className="mt-4 w-full bg-transparent text-base outline-none placeholder:text-neutral-400"
                />
              </div>

              <div className="border-t border-black/20 py-7">
                <label className="block text-[13px] text-neutral-500">
                  예상 평수
                </label>

                <input
                  type="text"
                  placeholder="예) 32평"
                  className="mt-4 w-full bg-transparent text-base outline-none placeholder:text-neutral-400"
                />
              </div>

              <div className="border-t border-black/20 py-7">
                <label className="block text-[13px] text-neutral-500">
                  예상 예산
                </label>

                <input
                  type="text"
                  placeholder="예) 5,000만원"
                  className="mt-4 w-full bg-transparent text-base outline-none placeholder:text-neutral-400"
                />
              </div>

              <div className="border-y border-black/20 py-7 md:col-span-2">
                <label className="block text-[13px] text-neutral-500">
                  문의 내용
                </label>

                <textarea
                  rows={7}
                  placeholder="프로젝트에 대해 자유롭게 작성해주세요."
                  className="mt-4 w-full resize-none bg-transparent text-base leading-7 outline-none placeholder:text-neutral-400"
                />
              </div>

              <div className="mt-10 md:col-span-2">
                <button
                  type="button"
                  data-cursor-hover
                  className="flex w-full items-center justify-between bg-[#111] px-7 py-6 text-left text-white md:px-9"
                >
                  <span>상담문의 보내기</span>
                  <span className="text-xl">→</span>
                </button>
              </div>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}