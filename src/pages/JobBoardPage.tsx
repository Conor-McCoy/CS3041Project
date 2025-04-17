import ConnectButton from "../components/ConnectButton";
import {FaLinkedin, FaBriefcase} from "react-icons/fa";
import InstructionText from "../components/InstructionText.tsx";
import Divider from "../components/Divider.tsx";

export default function JobBoardPage() {
    return (
        <div className="flex flex-col items-center gap-4 mt-4">

            <InstructionText
                text="Connect your LinkedIn or Indeed profile to help customize your resume
                with relevant details pulled directly from your job history and skills."
            />

            <Divider/>

            <ConnectButton
                label="Connect to LinkedIn"
                platformColor="#0077B5"
                icon={<FaLinkedin className="text-white"/>}
            />
            <ConnectButton
                label="Connect to Indeed"
                platformColor="#003A9B"
                icon={<FaBriefcase className="text-white"/>}
            />
        </div>
    );
}
