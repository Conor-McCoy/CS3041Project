type TextBannerProps = {
    label: string;
    underline?: boolean;
};

function TextBannerDark({ label, underline = false}: TextBannerProps){

    return(
        <div className={"w-full flex-1 min-w-0 bg-[#3F425C] h-9 flex items-center justify-center"}>
            <span
                className={`text-[#80A8FF] font-bold uppercase text-xl tracking-wide leading-none pb-[5px] ${
                    underline ? 'underline underline-offset-[3px]' : ''
                }`}
            >
                {label}
            </span>
        </div>
    )
}

export default TextBannerDark