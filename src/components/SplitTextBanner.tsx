type SplitTextBannerProps = {
    leftText: string;
    rightText: string;
    underlineLeft?: boolean;
    underlineRight?: boolean;
};

export default function SplitTextBanner({
                                            leftText,
                                            rightText,
                                            underlineLeft = false,
                                            underlineRight = false,
                                        }: SplitTextBannerProps) {
    // Gap between boxes
    const GAP = 8; // px
    const TOTAL_WIDTH = 480; // match original max-w
    const INDIVIDUAL_WIDTH = (TOTAL_WIDTH - GAP) / 2;

    return (
        <div
            className="flex"
            style={{
                width: `${TOTAL_WIDTH}px`,
                gap: `${GAP}px`,
            }}
        >
            <div
                className="h-9 bg-[#80A8FF] flex items-center justify-center"
                style={{ width: `${INDIVIDUAL_WIDTH}px` }}
            >
        <span
            className={`text-[#3F425C] font-bold uppercase text-sm tracking-wide leading-none pb-[2px] text-center ${
                underlineLeft ? 'underline underline-offset-[3px]' : ''
            }`}
        >
          {leftText}
        </span>
            </div>
            <div
                className="h-9 bg-[#80A8FF] flex items-center justify-center"
                style={{ width: `${INDIVIDUAL_WIDTH}px` }}
            >
        <span
            className={`text-[#3F425C] font-bold uppercase text-sm tracking-wide leading-none pb-[2px] text-center ${
                underlineRight ? 'underline underline-offset-[3px]' : ''
            }`}
        >
          {rightText}
        </span>
            </div>
        </div>
    );
}
