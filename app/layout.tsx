import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "./components/CustomCursor";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollButtons from "./components/ScrollButtons";

export const metadata: Metadata = {
  title: "DBRIDGE",
  description: "DBRIDGE Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <CustomCursor />

        {/* 맨 위 헤더 */}
        <SiteHeader />

        {/* 페이지 내용 */}
        {children}

        {/* 맨 아래 푸터 */}
        <SiteFooter />

        {/* 위 / 아래 이동 버튼 */}
        <ScrollButtons />
      </body>
    </html>
  );
}