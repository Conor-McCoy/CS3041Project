import { useState } from "react";

type DropdownContentProps = {
    label: string;
    content: string[];
};

function DropdownContent({ label, content }: DropdownContentProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full flex-1 min-w-0">
            <button
                onClick={() => setIsOpen((open) => !open)}
                className="w-full h-10 bg-[#3F425C] text-[#80A8FF] font-medium text-lg relative rounded-none select-none"
                style={{ fontFamily: "inherit" }}
            >
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <span
              className={`transition-transform duration-200 inline-block ${
                  isOpen ? "rotate-180" : ""
              }`}
          >
            ▼
          </span>
                </div>
                <div className="text-center text-xl w-full"> {label} </div>
            </button>

            {isOpen && (
                <div className="bg-[#E6EBFA] text-sm text-[#3F425C] px-4 py-3 border border-[#3F425C]">
                    <ul className="list-disc pl-4 space-y-1">
                        {content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


export default DropdownContent;