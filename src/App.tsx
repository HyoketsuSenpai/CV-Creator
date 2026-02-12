import { useState } from 'react';
import './App.css'
import EducationalInfoForm from './components/data/Educational_Info_Form';
import PersonalInfoForm from './components/data/Personal_Info_Form';
import WorkInfoForm from './components/data/Work_Info_Form';
import CV from './components/display/CV';


function App() {

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("JohnDoe@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0912367890");

  const [schoolName, setSchoolName] = useState("Big Boi University");
  const [titleOfStudy, setTitleOfStudy] = useState("Computer Science");
  const [startDate, setStartDate] = useState("2024-09-09");
  const [endDate, setEndDate] = useState("");
  const [present, setPresent] = useState(true);

  const [companyName, setCompanyName] = useState("Old Man's Basement");
  const [positionTitle, setPositionTitle] = useState("Plumber");
  const [res, setRes] = useState("Take care of stuff.");
  const [cstartDate, setCStartDate] = useState("2025-01-07");
  const [cendDate, setCEndDate] = useState("");
  const [cpresent, setCPresent] = useState(true);


  return (
    <>
    <div className='container'>
      <div>
          <PersonalInfoForm submit={(data: { name: string; email: string; phoneNumber: string })=>{
            setName(data.name);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
          }} />
          
          <EducationalInfoForm submit={(data: {
            schoolName: string,
            titleOfStudy: string,
            startDate: string,
            endDate: string,
            present: boolean
          })=>{
            setSchoolName(data.schoolName);
            setTitleOfStudy(data.titleOfStudy);
            setStartDate(data.startDate);
            setEndDate(data.endDate);
            setPresent(data.present);
          }}/>
        
        <WorkInfoForm submit={(data: {
          companyName: string,
          positionTitle: string,
          res: string,
          startDate: string,
          endDate: string,
          present: boolean
        })=>{
          setCompanyName(data.companyName);
          setPositionTitle(data.positionTitle);
          setRes(data.res);
          setCStartDate(data.startDate);
          setCEndDate(data.endDate);
          setCPresent(data.present);
        }}
        />
      </div>
      <div className='display'>
        <CV 
          name={name}
          email={email}
          phoneNumber={phoneNumber}

          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          startDate={startDate}
          endDate={endDate}
          present={present}

          companyName={companyName}
          positionTitle={positionTitle}
          res={res}
          cstartDate={cstartDate}
          cendDate={cendDate}
          cpresent={cpresent}/>
      </div>
    </div>
    </>

  )
}

export default App
