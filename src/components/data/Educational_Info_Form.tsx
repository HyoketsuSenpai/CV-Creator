import SingleInput from './Single_Input';
import CustomSection from "./Custom_Section";
import { useState } from 'react';



function EducationalInfoForm({ submit }: {
    submit: (
        data: {
        schoolName: string,
        titleOfStudy: string,
        startDate: string,
        endDate: string,
        present: boolean
    }) => void
}) {

    const [schoolName, setSchoolName] = useState("Big Boi University");
    const [titleOfStudy, setTitleOfStudy] = useState("Computer Science");
    const [startDate, setStartDate] = useState("2024-09-09");
    const [endDate, setEndDate] = useState("");
    const [present, setPresent] = useState(true);

    return (
        <CustomSection heading="Educational Information" call={()=>submit({
                schoolName,
                titleOfStudy, 
                startDate,
                endDate,
                present
            })}>

            <SingleInput 
            className="schoolName"
            text="School Name"
            value={schoolName}
            handleChange={(e)=>setSchoolName(e.target.value)}
            />

            <SingleInput 
                className="titleOfStudy"
                text="Title of Study"
                value={titleOfStudy}
                handleChange={(e)=>setTitleOfStudy(e.target.value)}
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

        </CustomSection>
    );
}

export default EducationalInfoForm;