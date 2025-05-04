import { useState } from "react";
import UpdateButton from "../components/UpdateButton";
import TextArea from "../components/TextArea";
import TextBannerDark from "../components/TextBannerDark";
import Divider from "../components/Divider";
import InstructionText from "../components/InstructionText.tsx";

type Props = {
    onClose: () => void;
};

export default function JobListingPage({ onClose }: Props) {
    const [details, setDetails] = useState("");

    return (
        <div className="flex flex-col h-full bg-[#ECECEC]">
            {/* Header with close button */}
            <div className="flex items-center justify-between pb-4">
                <TextBannerDark label="Application Details" underline />
                <button
                    className="text-3xl text-gray-600 hover:text-black px-2 -mt-2"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
            <Divider />

            <div className={"py-4"}>
            <InstructionText
                text="Provide details about the job you're applying to. This helps us tailor your resume feedback to match the role's specific requirements and expectations."
            />
            </div>
            <Divider />

            <div className="flex-1 overflow-y-auto pt-4">
                <TextArea
                    placeholder="Enter details about the job listing..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
            </div>

            <div className="flex justify-center pt-4">
                <UpdateButton label="Update Feedback" onClick={() => setDetails("")} />
            </div>
        </div>
    );
}
