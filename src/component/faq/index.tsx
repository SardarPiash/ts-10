import React, { useState } from "react";
import AccordionItem from "../accordian-item/AccordionItem";

export default function FAQ({ data }: { data: SectionValue[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={`border border-[#dbe1eb] md:p-5 rounded-md overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-full" : "max-h-[300px]"
        }`}
      >
        {data && data.length > 0 &&
          data.map((el, index) => (
            <div key={index}>
              <AccordionItem
                index={index}
                summary={el.question || ""}
                details={el.answer || ""}
              />
            </div>
          ))}
      </div>

      {data.length > 0 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
          >
            {expanded ? "কম দেখুন" : "সকল প্রশ্ন-উত্তর"}
          </button>
        </div>
      )}
    </div>
  );
}
