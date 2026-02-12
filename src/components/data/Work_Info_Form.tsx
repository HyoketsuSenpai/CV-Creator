import { useState } from "react";
import CustomSection from "./Custom_Section";
import SingleInput from "./Single_Input";

function WorkInfoForm({ submit }: {
    submit: (
        data: {
        companyName: string,
        positionTitle: string,
        res: string,
        startDate: string,
        endDate: string,
        present: boolean
    }) => void
}){
    const [companyName, setCompanyName] = useState("Old Man's Basement");
    const [positionTitle, setPositionTitle] = useState("Plumber");
    const [res, setRes] = useState("Take care of stuff.");
    const [startDate, setStartDate] = useState("2025-01-07");
    const [endDate, setEndDate] = useState("");
    const [present, setPresent] = useState(true);

    return (<CustomSection heading="Work Experience" call={()=>submit({
        companyName,
        positionTitle,
        res,
        startDate,
        endDate,
        present
    })}>
            <SingleInput 
                className="companyName"
                text="Company Name"
                value={companyName}
                handleChange={(e)=>setCompanyName(e.target.value)}
            />

            <SingleInput 
                className="positionTitle"
                text="Position Title"
                value={positionTitle}
                handleChange={(e)=>setPositionTitle(e.target.value)}
            />

            <SingleInput 
                className="res"
                text="Main Responsibilities"
                inputType="textarea"
                value={res}
                handleChange={(e)=>setRes(e.target.value)}
            />    
        
            <SingleInput 
                className="StartDate"
                inputType="date"
                text="Start Date"
                value={startDate}
                handleChange={(e)=>setStartDate(e.target.value)}
            />

            <SingleInput 
                className="EndDate"
                inputType="date"
                text="End Date"
                disabled={present}
                value={endDate}
                handleChange={(e)=>setEndDate(e.target.value)}
            />


            <label htmlFor="present">Present</label>
            <input type="checkbox" name="present" id="present" value="Present" checked={present} onClick={()=>setPresent(!present)} />
            <br />
    </CustomSection>)


}

export default WorkInfoForm;