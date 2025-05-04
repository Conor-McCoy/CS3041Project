import InstructionText from "../components/InstructionText.tsx";
import Checkboxes from "../components/Checkboxes.tsx";
import TextArea from "../components/TextArea.tsx";
import UpdateButton from "../components/UpdateButton.tsx";
import TextBannerDark from "../components/TextBannerDark.tsx";
import Divider from "../components/Divider.tsx";
import { useState } from "react";

type Props = {
    onClose: () => void;
};

export default function CustomizeFeedback({ onClose }: Props) {
    const [customFeedback, setCustomFeedback] = useState("");

    return (
        <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between pb-4">
                <TextBannerDark label="Customize Feedback" underline />
                <button
                    className="text-3xl text-gray-600 hover:text-black px-2 -mt-2"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
            <Divider />

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto flex flex-col pt-2">

                <div className={"pb-4"}>
                <InstructionText
                    text="Customize feedback by selecting sections below and describing what type of feedback you are looking for:"
                />
                </div>
                <Divider />

                <Checkboxes
                    title={"Sections:"}
                    options={["Work Experience", "Skills", "Education", "Projects"]}
                    onChange={(selected) => console.log("Selected:", selected)}
                />

                <div className="flex-1 overflow-hidden pt-4">
                    <TextArea
                        placeholder="Customize feedback..."
                        value={customFeedback}
                        onChange={(e) => setCustomFeedback(e.target.value)}
                    />
                </div>
            </div>

            {/* Always-visible button */}
            <div className="flex justify-center pt-2">
                <UpdateButton label="Update Feedback" onClick={() => setCustomFeedback("")} />
            </div>
        </div>
    );
}
