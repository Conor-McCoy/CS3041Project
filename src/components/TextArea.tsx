import { useState } from "react";

type TextInputProps = {
    placeholder?: string;
};

function TextArea({ placeholder = "" }: TextInputProps) {
    const [value, setValue] = useState("");

    return (
        <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            rows={8}
            className="w-full max-w-[480px] px-3 py-2 rounded-md bg-[#E6EBFA] text-sm text-black placeholder-[#9a9a9a] focus:outline-none border border-[#D9D9D9] resize-none"
        />
    );
}

export default TextArea;