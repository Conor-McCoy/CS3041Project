import { useState } from "react";

type CheckboxesProps = {
    options: string[];
    onChange?: (selected: string[]) => void;
};

export default function Checkboxes({ options, onChange }: CheckboxesProps) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (value: string) => {
        const updated = selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value];

        setSelected(updated);
        onChange?.(updated);
    };

    return (
        <div className="w-full max-w-[480px] mx-auto grid grid-cols-2 gap-y-2">
            {options.map((option, index) => {
                const isLeftColumn = index % 2 === 0;
                return (
                    <label
                        key={option}
                        className={`flex items-center gap-2 text-sm text-black ${
                            isLeftColumn ? "ml-18" : "mr-18"
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(option)}
                            onChange={() => toggle(option)}
                            className="w-4 h-4 rounded-sm border border-gray-400 appearance-none checked:bg-[#80A8FF] transition-colors duration-200"
                            aria-checked={selected.includes(option)}
                        />
                        <span>{option}</span>
                    </label>
                );
            })}
        </div>
    );
}
