import ContentPreview from "@/component/content-preview";
import React from "react";

export default function SectionType7({ section }: { section: Section }) {
  return (
    <div id={section.type} className="md:border md:border-[#dbe1eb] rounded-md md:p-5">
      <ContentPreview data={section.values} />
    </div>
  );
}
