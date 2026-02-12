import './../../styles/CV.css';

function CV({name, email, phoneNumber, schoolName, titleOfStudy,startDate, endDate, present, companyName, positionTitle, res, cstartDate, cendDate, cpresent}:{
    name: string,
    email: string,
    phoneNumber: string,
    schoolName: string,
    titleOfStudy: string,
    startDate: string,
    endDate: string,
    present: boolean,
    companyName: string,
    positionTitle: string,
    res: string,
    cstartDate: string,
    cendDate: string,
    cpresent: boolean
}){
    return (<div className='CV'>
        {/* personal Info */}
        <div className="PI">
            <h2>{name}</h2>
            <p>{email}  |  {phoneNumber}</p>
        </div>
        <hr />
        {/* Educational Info */}
        <div className="EI">
            <h2>Education</h2>
            <h3>{schoolName}</h3>
            <div>
                <p>{titleOfStudy}</p>
                <p>{startDate} - {present? "Present" : endDate}</p>
            </div>
        </div>
        {/* exp */}
        <div className="WI">
            <h2>Work Experience</h2>
            <h3>{companyName}</h3>
            <div>
                <div>
                    <p>{positionTitle}</p>
                    <p>{res}</p>
                </div>
                <p>{cstartDate} - {cpresent? "Present" : cendDate}</p>
            </div>
        </div>
    </div>)
}

export default CV;