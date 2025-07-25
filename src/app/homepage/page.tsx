import TopBanner from "@/component/top-banner";
import { getLandingPageData } from "../../api/apidata";
import Header from "../../component/header";
import Description from "@/component/description";

export default async function Homepage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; banner?:string; }>;
}) {
  const params = await searchParams;
  const lang = params.lang === "en" ? "en" : "bn";
  const isTopBannnerVisible = params.banner !== "false";
  const apiData = await getLandingPageData({ lang: lang });
  console.log(apiData);
  return (
    <>
      <Header />
      <TopBanner isTopBannnerVisible={isTopBannnerVisible}/>
      <Description courseData = {apiData}/>
    </>
  );
}
