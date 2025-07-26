import React from "react";
import StarRating from "../ratting";
import Image from "next/image";
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
