import { useState } from "react";

type CheckboxesProps = {
    options: string[];
    title: string;
    onChange?: (selected: string[]) => void;
};

export default function Checkboxes({ options, title, onChange }: CheckboxesProps) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (value: string) => {
        const updated = selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value];

        setSelected(updated);
        onChange?.(updated);
    };

    return (
        <div>
            <h1 className={"pb-4 font-semibold text-[#3f425c] text-center"}>
                {title}
            </h1>
        <div className="w-full min-w-0 mx-auto grid grid-cols-2 gap-y-2">
            {options.map((option, index) => {
                const isLeftColumn = index % 2 === 0;
                return (
                    <label
                        key={option}
                        className={`flex items-center gap-2 text-sm text-[#3F425C] ${
                            isLeftColumn ? "ml-18" : "mr-18"
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(option)}
                            onChange={() => toggle(option)}
                            className="w-4 h-4 rounded-sm border border-[#3F425C] appearance-none checked:bg-[#80A8FF] transition-colors duration-200"
                            aria-checked={selected.includes(option)}
                        />
                        <span><i>{option}</i></span>
                    </label>
                );
            })}
        </div>
        </div>
    );
}
