import { getLandingPageData } from "@/api/apidata";
import Homepage from "./homepage/page";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: "en" | "bn"; banner?: string }>;
}) {
  const searchPageParams = await searchParams;

  const lang =
    searchPageParams?.lang === "en" || searchPageParams?.lang === "bn"
      ? searchPageParams.lang
      : "bn";
  const isTopBannnerVisible = searchPageParams?.banner !== "false";

  const apiData = await getLandingPageData({ lang });

  return (
    <Homepage
      searchParams={searchPageParams}
      courseData={apiData}
      isTopBannnerVisible={isTopBannnerVisible}
    />
  );
}
