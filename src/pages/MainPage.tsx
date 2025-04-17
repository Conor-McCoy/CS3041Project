import TextBannerLight from "../components/TextBannerLight.tsx";
import DropdownContent from "../components/DropdownContent.tsx";
import Checkboxes from "../components/Checkboxes.tsx";
import UploadButton from "../components/UploadButton.tsx";
import TextArea from "../components/TextArea.tsx";
import InstructionText from "../components/InstructionText.tsx";
import Divider from "../components/Divider";
import TextBannerHalf from "../components/TextBannerHalf.tsx";
import {useState} from "react";
import JobBoardPage from "./JobBoardPage.tsx";
import JobListingPage from "./JobListingPage.tsx";
import TextBannerDark from "../components/TextBannerDark.tsx";
import UpdateButton from "../components/UpdateButton.tsx";

function MainPage() {
    const [activeSidebar, setActiveSidebar] = useState<"jobBoard" | "jobListing" | null>(null);
    const [customFeedback, setCustomFeedback] = useState("");

    return (
        <div className="w-full min-h-screen bg-[#3F425C] py-10 flex justify-center">
            <div
                className={`flex flex-row items-start w-full px-4 max-w-[1100px] ${
                    activeSidebar ? "gap-8 justify-start" : "justify-center"
                }`}
            >
                {/* Main Page — always rendered */}
                <div className="w-full max-w-[520px] bg-[#ECECEC] rounded-lg px-4 py-6 flex flex-col items-center gap-4 h-auto">
                    {/* Upload Button */}
                    <UploadButton onFileSelect={(file) => console.log("Selected:", file?.name)} />

                    <Divider />

                    <div className="flex w-full gap-2">
                        <TextBannerHalf
                            label="Connect to Job Board"
                            underline
                            className="w-[calc(50%-4px)] bg-[#1F1FC2] text-white rounded-md hover:brightness-100"
                            onClick={() => setActiveSidebar("jobBoard")}
                        />
                        <TextBannerHalf
                            label="Add Application Details"
                            underline
                            className="w-[calc(50%-4px)] bg-[#1F1FC2] text-white rounded-md hover:brightness-100"
                            onClick={() => setActiveSidebar("jobListing")}
                        />
                    </div>

                    <Divider />
                    <TextBannerLight label="Feedback" underline />

                    {/* Dropdowns */}
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
                    <InstructionText text="Customize feedback by selecting sections below and describing what type of feedback you are looking for:" />

                    <Checkboxes
                        options={["Education", "Work Experience", "Skills", "Projects"]}
                        onChange={(selected) => console.log("Selected:", selected)}
                    />

                    <TextArea
                        placeholder="Customize feedback..."
                        value={customFeedback}
                        onChange={(e) => setCustomFeedback(e.target.value)}
                    />

                    <UpdateButton label="Update Feedback" onClick={() => setCustomFeedback("")} />
                </div>

                {/* Sidebar Panel — conditionally rendered */}
                {activeSidebar && (
                    <div className="w-full max-w-[520px] bg-[#ECECEC] rounded-lg px-4 py-6 shadow-lg overflow-y-auto max-h-[90vh]">
                        <div className="flex items-center justify-between mb-4 h-9">
                            <div className="flex-1 min-w-0 pl-8">
                                <TextBannerDark
                                    label={activeSidebar === "jobBoard" ? "Job Board Connection" : "Application Details"}
                                    underline
                                />
                            </div>
                            <button
                                className="text-3xl text-gray-600 hover:text-black px-2 mt-[-6px]"
                                onClick={() => setActiveSidebar(null)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>

                        <Divider />

                        {activeSidebar === "jobBoard" && <JobBoardPage />}
                        {activeSidebar === "jobListing" && <JobListingPage />}
                    </div>
                )}
            </div>

        </div>
    );
}

export default MainPage;
