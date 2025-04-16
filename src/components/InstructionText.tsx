type InstructionTextProps = {
    text: string;
};

function InstructionText({ text }: InstructionTextProps) {
    return (
        <p className="text-sm text-[#4C4C4C] max-w-[480px] leading-normal mb-1">
            {text}
        </p>
    );
}
export default InstructionText;
