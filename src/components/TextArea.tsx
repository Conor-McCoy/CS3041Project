type TextAreaProps = {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextArea({ placeholder = "", value, onChange }: TextAreaProps) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={8}
            className="w-full flex-1 min-w-0 px-3 py-2 rounded-md bg-[#E6EBFA] text-sm text-[#3F425C] placeholder-[#9a9a9a] focus:outline-none border border-[#3F425C] resize-none"
        />
    );
}

export default TextArea;
