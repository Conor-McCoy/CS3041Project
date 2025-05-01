import { useRef, useState } from "react";
import UploadIcon from "../assets/UploadIcon.png"; // Adjust path if needed

type UploadButtonProps = {
    onFileSelect?: (file: File | null) => void;
};

export default function UploadButton({ onFileSelect }: UploadButtonProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewOpen, setPreviewOpen] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0] || null;
        setFile(selected);
        onFileSelect?.(selected);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dropped = e.dataTransfer.files?.[0] || null;
        setFile(dropped);
        onFileSelect?.(dropped);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const removeFile = () => {
        setFile(null);
        onFileSelect?.(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setPreviewOpen(false);
        }
    };

    return (
        <div className="w-full flex-1 min-w-0">
            <div
                className="w-full h-[320px] bg-[#D9D9D9] rounded-md flex flex-col items-center justify-center text-center px-4"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <img src={UploadIcon} alt="Upload" className="w-12 h-12 mb-4" />
                <p className="text-sm text-[#3F425C]">
                    Drag and drop your resume here
                </p>
                <p className="text-sm text-[#3F425C] font-semibold">OR</p>
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

            {file && (
                <div className="mt-2 relative text-xs text-[#3F425C] w-full max-w-[480px] h-5">
                    <span className="absolute left-0 truncate max-w-[150px]">{file.name}</span>
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 text-[#80a8ff] underline"
                        onClick={() => setPreviewOpen(true)}
                    >
                        Preview File
                    </button>
                    <button
                        type="button"
                        className="absolute right-0 text-red-500 underline"
                        onClick={removeFile}
                    >
                        Remove File
                    </button>
                </div>
            )}

            {/* Preview Modal */}
            {previewOpen && file && (
                <div
                    className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center"
                    onClick={handleOverlayClick}
                >
                    <div className="bg-[#ececec] rounded-md shadow-lg w-full max-w-3xl min-h-[80vh] relative overflow-y-auto p-6">
                        <button
                            onClick={() => setPreviewOpen(false)}
                            className="absolute top-2 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-semibold mb-4 text-[#3f425c]">Preview: {file.name}</h2>
                        {file.type === "application/pdf" ? (
                            <div className="overflow-hidden rounded-md border border-gray-300 w-full h-full">
                            <iframe
                                src={URL.createObjectURL(file)}
                                title="PDF Preview"
                                className="w-full min-h-[75vh] border rounded"
                            />
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500">
                                Preview not supported for this file type.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}