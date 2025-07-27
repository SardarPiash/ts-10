import { Check } from "lucide-react";
import React from "react";

export default function SectionType5({ section }: { section: Section }) {
  return (
    <div id={section.type} className="flex flex-col md:flex-row gap-8 md:border md:border-[#dbe1eb] rounded-md p-1 md:p-5">
      <div className="flex flex-col flex-1 gap-4">
        {section.values.map(
          (data, inx) =>
            inx < 3 && (
              <div key={inx} className="flex items-start gap-2">
                <Check className="text-sky-500 w-5 md:w-7 h-5 md:h-7 mt-1" />
                <p className="text-[14px] md:text-[16px]">{data.text}</p>
              </div>
            )
        )}
      </div>

      <div className="flex flex-col flex-1 gap-4">
        {section.values.map(
          (data, inx) =>
            inx >= 3 && (
              <div key={inx} className="flex items-start gap-2">
                <Check className="text-sky-500 w-7 h-7 mt-1" />
                <p className="text-[16px]">{data.text}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
