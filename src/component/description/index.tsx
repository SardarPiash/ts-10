import React from "react";
import DownNavSection from "../nav-section";

export default function Description({
  courseData,
}: {
  courseData: ApiResponse;
}) {
  return (
    <>
      <DownNavSection courseData={courseData.data} />
    </>
  );
}
