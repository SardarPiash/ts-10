import ContentPreview from "@/component/content-preview";
import React from "react";

export default function SectionType7({ section }: { section: Section }) {
  return (
    <div id={section.type} className="border rounded-md md:p-5">
      <ContentPreview data={section.values} />
    </div>
  );
}
