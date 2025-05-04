import ConnectButton from "../components/ConnectButton";
import { FaLinkedin, FaBriefcase } from "react-icons/fa";
import InstructionText from "../components/InstructionText.tsx";
import Divider from "../components/Divider.tsx";
import TextBannerDark from "../components/TextBannerDark.tsx";

type Props = {
    onClose: () => void;
};

export default function JobBoardPage({ onClose }: Props) {
    return (
        <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between pb-4">
                <TextBannerDark label="Job Board Connection" underline />
                <button
                    className="text-3xl text-gray-600 hover:text-black px-2 -mt-2"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
            <Divider />

            {/* Scrollable connection options */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center gap-4">
                <InstructionText
                    text="Connect your LinkedIn or Indeed profile to help customize your resume
                    with relevant details pulled directly from your job history and skills."
                />

                <Divider />

                <ConnectButton
                    label="Connect to LinkedIn"
                    platformColor="#0077B5"
                    icon={<FaLinkedin className="text-white" />}
                />
                <ConnectButton
                    label="Connect to Indeed"
                    platformColor="#003A9B"
                    icon={<FaBriefcase className="text-white" />}
                />
            </div>
        </div>
    );
}
