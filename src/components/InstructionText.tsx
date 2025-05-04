type InstructionTextProps = {
    text: string;
};

function InstructionText({ text }: InstructionTextProps) {
    return (
        <p className="text-sm text-[#3F425C] w-full leading-normal mb-1 text-center">
            {text}
        </p>
    );
}
export default InstructionText;
