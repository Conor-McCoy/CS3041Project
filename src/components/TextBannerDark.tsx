type TextBannerProps = {
    label: string;
    underline?: boolean;
};

function TextBannerDark({ label, underline = false }: TextBannerProps) {
    return (
        <div className="w-full bg-[#3F425C] py-2 px-2 flex items-center justify-center">
            <span
                className={`text-[#80A8FF] font-bold uppercase text-xl tracking-wide leading-none ${
                    underline ? 'underline underline-offset-[3px]' : ''
                }`}
            >
                {label}
            </span>
        </div>
    );
}

export default TextBannerDark;
