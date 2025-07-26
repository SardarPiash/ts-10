import TopBanner from "@/component/top-banner";
import { getLandingPageData } from "../../api/apidata";
import Header from "../../component/header";
import Description from "@/component/description";

export default async function Homepage({
  searchParams,
}: {
  searchParams: { lang?: string; banner?: string };
}) {
  const lang = searchParams?.lang === "en" ? "en" : "bn";
  const isTopBannnerVisible = searchParams?.banner !== "false";
  const apiData = await getLandingPageData({ lang });
  console.log(apiData);
  return (
    <>
      <Header />
      <TopBanner isTopBannnerVisible={isTopBannnerVisible}/>
      <Description courseData = {apiData}/>
    </>
  );
}
