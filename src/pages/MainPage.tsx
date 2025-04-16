import TextBanner from "../components/TextBanner";
import DropdownContent from "../components/DropdownContent.tsx";
import Checkboxes from "../components/Checkboxes.tsx";
import UploadButton from "../components/UploadButton.tsx";
import TextArea from "../components/TextArea.tsx";
import SplitTextBanner from "../components/SplitTextBanner.tsx";
import InstructionText from "../components/InstructionText.tsx";
import Divider from "../components/Divider";

function MainPage() {
    return (
        <div className="w-full min-h-screen bg-[#4C4C4C] flex justify-center py-10">
            <div className="w-full max-w-[520px] bg-[#ECECEC] rounded-lg px-4 py-6 flex flex-col items-center gap-4 h-auto">
                {/* Upload Button */}
                <UploadButton onFileSelect={(file) => console.log("Selected:", file?.name)} />

                <Divider />

                {/* Split Text Banner */}
                <SplitTextBanner
                    leftText="Connect to Job Board"
                    underlineLeft={true}
                    rightText="Add Application Details"
                    underlineRight={true}
                />

                <Divider />

                {/* FEEDBACK banner */}
                <TextBanner label="Feedback" underline />

                {/* Dropdowns */}
                <DropdownContent
                    label="Spelling & Grammar"
                    content={["The phrase ‘I was responsible of handling…’ is slightly off.", "Consider ‘responsible for handling.’", "The sentence ‘Led projects that improves process’ mixes tenses.", "Consider ‘improved’ instead of ‘improves.’", "Check spelling in ‘enviroment’; it should be ‘environment’."]}
                />
                <DropdownContent
                    label="Spacing & Formatting"
                    content={["Inconsistent line spacing between sections. Standardize spacing to improve readability", "The margins vary slightly between Education and Experience — consider aligning them for a cleaner layout.", "Your section headers could stand out more. Consider bolding or increasing the font size slightly.", "The date formatting is inconsistent (e.g., ‘Jan 2022–March 2023’ vs. ‘03/2023–05/2024’) — pick one format and use it throughout.", "Use a single font type throughout the document to maintain a professional appearance."]}
                />
                <DropdownContent
                    label="Content & Flow"
                    content={["The resume starts with Experience, but a Summary section at the top could help recruiters quickly understand your profile.", "Some sections feel unbalanced — for example, three bullet points for one job and ten for another. Aim for consistency unless one role is significantly more important.", "A few job descriptions repeat similar phrasing (e.g., ‘Worked with team’, ‘Worked on project’) — consider rephrasing to keep it engaging.", "The Education section might be more effective after your Work Experience, especially if you have relevant job history."]}
                />
                <DropdownContent
                    label="Other"
                    content={["Your resume doesn’t include links to your portfolio, GitHub, or LinkedIn. Adding one or two can strengthen your profile.", "Your resume lacks dates for some roles. Even approximate timeframes help recruiters understand your timeline.", "No file name provided — save your resume as something like ‘Firstname_Lastname_Resume.pdf’ before submitting.", "If you're open to multiple types of roles, think about tailoring different versions of your resume for each one"]}
                />

                <Divider />

                {/* Instruction text */}
                <InstructionText
                    text="Customize feedback by selecting sections below and describing what type of feedback you are looking for:"
                />

                {/* Checkboxes */}
                <Checkboxes
                    options={["Education", "Work Experience", "Skills", "Projects"]}
                    onChange={(selected) => console.log("Selected:", selected)}
                />

                {/* Text area */}
                <TextArea placeholder="Customize feedback..." />

                {/* UPDATE FEEDBACK banner */}
                <TextBanner label="Update Feedback" underline />
            </div>
        </div>
    );
}

export default MainPage;
