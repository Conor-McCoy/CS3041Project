import DropdownContent from "../components/DropdownContent.tsx";
import UploadButton from "../components/UploadButton.tsx";
import Divider from "../components/Divider";
import TextBannerHalf from "../components/TextBannerHalf.tsx";
import { useState } from "react";
import JobBoardPage from "./JobBoardPage.tsx";
import JobListingPage from "./JobListingPage.tsx";
import CustomizeFeedback from "./CustomizeFeedback.tsx";
import TextBannerDark from "../components/TextBannerDark.tsx";

function MainPage() {
    const [exclusiveSidebar, setExclusiveSidebar] = useState<"jobListing" | null>("jobListing");
    const [showFeedback, setShowFeedback] = useState(false);
    const [showJobBoard, setShowJobBoard] = useState(true);

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
        <div className="w-full bg-[#ECECEC] rounded-lg px-6 py-6 shadow-md border border-gray-300 overflow-y-auto h-full flex flex-col">
            {content}
        </div>
    );

    const hasSidebar = exclusiveSidebar || showFeedback || showJobBoard;

    return (
        <div className="w-full min-h-screen bg-[#3F425C] flex flex-col items-center justify-start">
            {/* Optional top nav/header */}
            <div className="w-full bg-[#2E3050] shadow-md py-4 mb-8">
                <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-white gap-2">
                    <div>
                        <h1 className="text-xl font-bold tracking-wide">Resume Analyzer</h1>
                        <p className="text-sm text-gray-300">Upload your resume below to begin analysis</p>
                    </div>
                    <span className="text-sm text-gray-400">CS 3041 Final Project — Conor McCoy</span>
                </div>
            </div>

            <div
                className={`flex flex-row items-start w-full max-w-[1100px] ${hasSidebar ? "gap-8" : "gap-0 justify-center"} flex-wrap`}
            >
                {/* Main Form */}
                <div
                    className={`min-h-[90vh] overflow-y-auto bg-[#ECECEC] rounded-lg px-6 pt-6 pb-4 flex flex-col items-center gap-4 shadow-md border border-gray-300  ${
                        hasSidebar ? "w-[520px]" : "flex-1 max-w-[960px]"
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
                    <TextBannerDark label="Feedback" underline />

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
                {hasSidebar && (
                    <div className={`flex flex-col w-full max-w-[520px] h-[90vh]`}>
                        {showJobBoard && (
                            <div className={`pb-6 flex-[0.35]`}>
                                {renderSidebar(<JobBoardPage onClose={() => setShowJobBoard(false)} />)}
                            </div>
                        )}

                        {exclusiveSidebar === "jobListing" && (
                            <div className={`${showJobBoard ? "flex-[0.65]" : "h-full"}`}>
                                {renderSidebar(<JobListingPage onClose={() => setExclusiveSidebar(null)} />)}
                            </div>
                        )}

                        {showFeedback && (
                            <div className={`${showJobBoard ? "flex-[0.65]" : "h-full"}`}>
                                {renderSidebar(<CustomizeFeedback onClose={() => setShowFeedback(false)} />)}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="mt-12 w-full text-center text-sm text-gray-300 bg-[#2E3050]">
                <p className="py-4">
                    Made for CS 3041 by Conor McCoy. Portions of this application were built with help from ChatGPT.
                </p>
            </footer>

        </div>
    );
}

export default MainPage;
