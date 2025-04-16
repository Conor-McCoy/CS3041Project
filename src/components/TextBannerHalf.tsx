type TextBannerProps = {
    label: string;
    underline?: boolean;
};

function TextBanner({ label, underline = false}: TextBannerProps){

    return(
        <div className={"w-full max-w-[480px] bg-[#80A8FF] h-9 flex items-center justify-center"}>
            <span
                className={`text-[#4C4C4C] font-bold uppercase text-3xl tracking-wide leading-none pb-[5px] ${
                    underline ? 'underline underline-offset-[3px]' : ''
                }`}
            >
                {label}
            </span>
        </div>
    )
}

export default TextBanner