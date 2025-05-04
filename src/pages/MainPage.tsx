import TextBannerLight from "../components/TextBannerLight.tsx";
import DropdownContent from "../components/DropdownContent.tsx";
import UploadButton from "../components/UploadButton.tsx";
import Divider from "../components/Divider";
import TextBannerHalf from "../components/TextBannerHalf.tsx";
import { useState } from "react";
import JobBoardPage from "./JobBoardPage.tsx";
import JobListingPage from "./JobListingPage.tsx";
import CustomizeFeedback from "./CustomizeFeedback.tsx";

function MainPage() {
    const [exclusiveSidebar, setExclusiveSidebar] = useState<"jobListing" | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showJobBoard, setShowJobBoard] = useState(false);

    const toggleJobBoard = () => {
        setShowJobBoard((prev) => !prev);
    };

    const toggleExclusive = (type: "jobListing") => {
        setShowFeedback(false);
        setExclusiveSidebar((prev) => (prev === type ? null : type));
    };

    const toggleFeedback = () => {
        setExclusiveSidebar(null);
        setShowFeedback((prev) => !prev);
    };

    const renderSidebar = (content: React.ReactNode) => (
        <div className="w-full bg-[#ECECEC] rounded-lg px-4 py-6 shadow-lg overflow-hidden h-full flex flex-col">
            {content}
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-[#3F425C] py-10 px-4 flex justify-center">
            <div
                className={`flex flex-row items-start w-full px-4 max-w-[1100px] ${
                    exclusiveSidebar || showFeedback || showJobBoard ? "gap-8 justify-start" : "justify-center"
                }`}
            >
                {/* Main Form */}
                <div
                    className={`h-[90vh] overflow-y-auto bg-[#ECECEC] rounded-lg px-4 pt-6 pb-4 flex flex-col items-center gap-4 ${
                        exclusiveSidebar || showFeedback || showJobBoard ? "w-full max-w-[520px]" : "w-[520px]"
                    }`}
                >
                    <UploadButton onFileSelect={(file) => console.log("Selected:", file?.name)} />
                    <Divider />

                    <div className="flex w-full gap-2">
                        <TextBannerHalf
                            label="Connect to Job Board"
                            underline
                            className="w-[calc(50%-4px)] bg-[#1F1FC2] text-white rounded-md p-4"
                            onClick={toggleJobBoard}
                        />
                        <TextBannerHalf
                            label="Add Application Details"
                            underline
                            className="w-[calc(50%-4px)] bg-[#1F1FC2] text-white rounded-md p-4"
                            onClick={() => toggleExclusive("jobListing")}
                        />
                    </div>

                    <Divider />
                    <TextBannerLight label="Feedback" underline />

                    <DropdownContent
                        label="Spelling & Grammar"
                        content={[
                            "The phrase ‘I was responsible of handling…’ is slightly off.",
                            "Consider ‘responsible for handling.’",
                            "The sentence ‘Led projects that improves process’ mixes tenses.",
                            "Consider ‘improved’ instead of ‘improves.’",
                            "Check spelling in ‘enviroment’; it should be ‘environment’.",
                        ]}
                    />
                    <DropdownContent
                        label="Spacing & Formatting"
                        content={[
                            "Inconsistent line spacing between sections. Standardize spacing to improve readability",
                            "The margins vary slightly between Education and Experience — consider aligning them for a cleaner layout.",
                            "Your section headers could stand out more. Consider bolding or increasing the font size slightly.",
                            "The date formatting is inconsistent (e.g., ‘Jan 2022–March 2023’ vs. ‘03/2023–05/2024’) — pick one format and use it throughout.",
                            "Use a single font type throughout the document to maintain a professional appearance.",
                        ]}
                    />
                    <DropdownContent
                        label="Content & Flow"
                        content={[
                            "The resume starts with Experience, but a Summary section at the top could help recruiters quickly understand your profile.",
                            "Some sections feel unbalanced — for example, three bullet points for one job and ten for another.",
                            "A few job descriptions repeat similar phrasing (e.g., ‘Worked with team’, ‘Worked on project’) — consider rephrasing to keep it engaging.",
                            "The Education section might be more effective after your Work Experience, especially if you have relevant job history.",
                        ]}
                    />
                    <DropdownContent
                        label="Other"
                        content={[
                            "Your resume doesn’t include links to your portfolio, GitHub, or LinkedIn.",
                            "Your resume lacks dates for some roles.",
                            "No file name provided — save your resume as something like ‘Firstname_Lastname_Resume.pdf’ before submitting.",
                            "If you're open to multiple types of roles, think about tailoring different versions of your resume for each one",
                        ]}
                    />
                    <Divider />
                    <TextBannerHalf
                        label="Customize Feedback"
                        underline
                        className="w-full bg-[#1F1FC2] text-white rounded-md p-4"
                        onClick={toggleFeedback}
                    />
                    <Divider />
                </div>

                {/* Sidebars */}
                {(showJobBoard || exclusiveSidebar || showFeedback) && (
                    <div className="flex flex-col w-full max-w-[520px] h-[90vh]">
                        {showJobBoard && (
                            <div className={"flex-[0.35] pb-6"}>
                                {renderSidebar(<JobBoardPage onClose={() => setShowJobBoard(false)} />)}
                            </div>
                        )}

                        {exclusiveSidebar === "jobListing" && (
                            <div className={"flex-[0.65]"}>
                                {renderSidebar(<JobListingPage onClose={() => setExclusiveSidebar(null)} />)}
                            </div>
                        )}

                        {showFeedback && (
                            <div className={"flex-[0.65]"}>
                                {renderSidebar(<CustomizeFeedback onClose={() => setShowFeedback(false)} />)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainPage;
