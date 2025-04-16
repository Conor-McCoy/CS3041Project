import { useRef, useState } from "react";
import UploadIcon from "../assets/UploadIcon.png"; // Adjust path if needed

type UploadButtonProps = {
    onFileSelect?: (file: File | null) => void;
};

export default function UploadButton({ onFileSelect }: UploadButtonProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFileName(file?.name ?? "");
        onFileSelect?.(file);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0] || null;
        setFileName(file?.name ?? "");
        onFileSelect?.(file);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className="w-full max-w-[480px]">
            <div
                className="w-full h-[320px] bg-[#D9D9D9] rounded-md flex flex-col items-center justify-center text-center px-4"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <img src={UploadIcon} alt="Upload" className="w-12 h-12 mb-4" />
                <p className="text-sm text-[#4B4B4B]">
                    Drag and drop your resume here
                </p>
                <p className="text-sm text-[#4B4B4B] font-semibold">OR</p>
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="text-sm text-[#80A8FF] underline cursor-pointer"
                >
                    Click here to upload
                </button>
            </div>

            <input
                type="file"
                accept=".pdf,.docx"
                ref={inputRef}
                onChange={handleChange}
                className="hidden"
            />

            {fileName && (
                <p className="mt-2 text-xs text-gray-700 truncate max-w-[480px]">{fileName}</p>
            )}
        </div>
    );
}
