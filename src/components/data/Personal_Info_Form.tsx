import { useState } from "react";
import SingleInput from './Single_Input';
import CustomSection from "./Custom_Section";

function PersonalInfoForm({submit}: {submit: (data: { name: string; email: string; phoneNumber: string }) => void}) {
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("JohnDoe@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("0912367890");

    return (
        <CustomSection heading="Personal Information" call={()=>submit({name, email, phoneNumber})}>
            <SingleInput 
            className="name"
            text="Name"
            value={name}
            handleChange={(e)=>setName(e.target.value)}
            />

            <SingleInput 
                className="email"
                text="Email"
                value={email}
                handleChange={(e)=>setEmail(e.target.value)}
            />
        
            <SingleInput 
                className="phoneNumber"
                text="Phone Number"
                value={phoneNumber}
                handleChange={(e)=>setPhoneNumber(e.target.value)}
            />
        </CustomSection>
    );
}

export default PersonalInfoForm;