type TextBannerHalfProps = {
    label: string;
    underline?: boolean;
    onClick?: () => void;
    className?: string;
};

export default function TextBannerHalf({ label, underline = false, onClick, className = "" }: TextBannerHalfProps) {
    return (
        <div
            className={`h-9 flex items-center justify-center hover:bg-[#3B3BE5] cursor-pointer transition ${className}`}
            onClick={onClick}
        >
            <span
                className={`font-bold uppercase text-sm tracking-wide leading-none pb-[2px] text-center ${
                    underline ? "underline underline-offset-[3px]" : ""
                }`}
            >
                {label}
            </span>
        </div>
    );
}
