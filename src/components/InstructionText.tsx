type InstructionTextProps = {
    text: string;
};

function InstructionText({ text }: InstructionTextProps) {
    return (
        <p className="text-sm text-[#3F425C] w-full flex-1 min-w-0 leading-normal mb-1 text-center">
            {text}
        </p>
    );
}
export default InstructionText;
