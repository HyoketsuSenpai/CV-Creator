import './../../styles/Custom_Section.css';
import { useState, type ReactNode } from "react";

function CustomSection({heading, children, call}: {heading: string, children: ReactNode, call: ()=>void}){
    const [editMode, setEditMode] = useState(false);

    if(!editMode){
    return (
        <section>
            <div className="section-header">
                <h2>{heading}</h2>
                <button className="edit-btn" onClick={()=>setEditMode(true)}>Edit</button>
            </div>
        </section>
    );
    }

    return (
        <section>
            <div className="section-header">
                <h2>{heading}</h2>
            </div>
            {children}
            <button className="submit-btn" onClick={()=>{call(); setEditMode(false)}}>Submit</button>
        </section>
    );
}

export default CustomSection;