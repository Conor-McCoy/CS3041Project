import { useState } from "react";
import UpdateButton from "../components/UpdateButton";
import TextArea from "../components/TextArea";

export default function JobListingPage() {
    const [details, setDetails] = useState("");

    const handleReset = () => {
        setDetails("");
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-4">
            <TextArea
                placeholder="Enter details about the job listing..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
            />
            <UpdateButton label="Update Feedback" onClick={handleReset} />
        </div>
    );
}
