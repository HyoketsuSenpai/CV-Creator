import './../../styles/Custom_Section.css';
import { useState, type ReactNode } from "react";

function CustomSection({heading, children, call}: {heading: string, children: ReactNode, call: ()=>void}){
    const [editMode, setEditMode] = useState(true);

    if(!editMode){
    return (<section>
        <h2>{heading}</h2>
        <button onClick={()=>setEditMode(true)}>Edit</button>
        </section>);
    }

    return (<section>
        <h2>{heading}</h2>
        {children}
        <button onClick={()=>{call(); setEditMode(false)}}>Submit</button>
    </section>);
}

export default CustomSection;