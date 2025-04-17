type TextBannerProps = {
    label: string;
    underline?: boolean;
};

function TextBannerLight({ label, underline = false}: TextBannerProps){

    return(
        <div className={"w-full flex-1 min-w-0 bg-[#80A8FF] h-9 flex items-center justify-center"}>
            <span
                className={`text-[#3F425C] font-bold uppercase text-3xl tracking-wide leading-none pb-[5px] ${
                    underline ? 'underline underline-offset-[3px]' : ''
                }`}
            >
                {label}
            </span>
        </div>
    )
}

export default TextBannerLight