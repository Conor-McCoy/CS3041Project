type TextBannerProps = {
    label: string;
    underline?: boolean;
};

function TextBannerLight({ label, underline = false}: TextBannerProps){

    return(
        <div className={"w-full bg-[#80A8FF] py-3 px-2 flex items-center justify-center"}>
            <span
                className={`text-[#3F425C] font-bold uppercase text-3xl tracking-wide leading-none ${
                    underline ? 'underline underline-offset-[3px]' : ''
                }`}
            >
                {label}
            </span>
        </div>
    )
}

export default TextBannerLight