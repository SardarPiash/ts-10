type Lang = "en" | "bn";

interface GetLandingPageDataParams {
  lang?: Lang;
}

export async function getLandingPageData({ lang = "en" }: GetLandingPageDataParams) {
  try {
    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch landing page data:", error);
    throw error;
  }
}
