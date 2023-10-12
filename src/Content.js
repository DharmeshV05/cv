import { useState } from "react";
import PersonalInfo from "./Components/CVForm/PersonalInfo";
import Experience from "./Components/CVForm/experience";
import Education from "./Components/CVForm/education";
import Preview from "./Components/CVPreview/preview";
import { v4 as uuidv4 } from "uuid";

import ReactToPrint from "react-to-print";

export default function Content() {
  let componentRef = null;
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [title, setTitle] = useState(null);
  const [decription, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  function onFirstName(event) {
    setFirstName(event.target.value);
  }
  function onLastName(event) {
    setLastName(event.target.value);
  }

  function onTitle(event) {
    setTitle(event.target.value);
  }

  function onEmail(event) {
    setEmail(event.target.value);
  }
  function onDescription(event) {
    setDescription(event.target.value);
  }

  function onAddress(event) {
    setAddress(event.target.value);
  }
  function onPhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function addExperience(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    const id = uuidv4();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const desc = e.target[4].value;

    let newExperience = { id, position, company, start, end, desc };
    setExperience([...experience, newExperience]);
    clear(e);
  }

  function clear(e) {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
  }
  function deleteExperience(id) {
    console.log(id);
    setExperience((currentExperience) => {
      return currentExperience.filter((exp) => exp.id !== id);
    });
  }

  function saveExperience(e, id) {
    e.preventDefault();

    let position = e.target[0].value;
    let company = e.target[1].value;
    let start = e.target[2].value;
    let end = e.target[3].value;
    let desc = e.target[4].value;
    let updateExp = { position, company, start, end, desc };
    setExperience(
      experience.map((exp) => {
        if (exp.id === id) {
          return { ...exp, ...updateExp };
        } else {
          return exp;
        }
      })
    );
  }

  function addEducation(e) {
    e.preventDefault();
    console.log("Clicked on Add education");
    const id = uuidv4();
    const course = e.target[0].value;
    const university = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    let newEducation = { id, course, university, start, end };
    setEducation([...education, newEducation]);
    clear(e);
  }

  function saveEducation(e, id) {
    e.preventDefault();

    const course = e.target[0].value;
    const university = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const updateEdu = { course, university, start, end };
    setEducation(
      education.map((edu) => {
        if (edu.id === id) {
          return { ...edu, ...updateEdu };
        } else {
          return edu;
        }
      })
    );
  }
  function deleteEducation(id) {
    setEducation((currentEducation) => {
      return currentEducation.filter((edu) => edu.id !== id);
    });
  }
  function reset() {
    const empty = [];
    setEducation(empty);
    setExperience(empty);
    setFirstName("");
    setLastName("");
    setTitle("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
  }
  function loadExample() {
    reset();
    setFirstName("Dharma");

    setLastName("WAGNER");
    setTitle("DIGITAL MARKETING ANALYST");
    setEmail("dharmeshdv@gmail.com");
    setAddress("Virar sn");
    setPhoneNumber("1122 33 44");
    const experience1 = {
      id: uuidv4(),
      position: "Mern Stack Intern",
      company: "CS",

      start: "Current",
      end: "April 2023",
      desc: `This repository is a MERN stack web application
       example that showcases the integration of
        MongoDB, Express.js, React, and Node.js to create a 
        full-fledged web application. The key components and 
        features `,
    };

    const experience2 = {
      id: uuidv4(),
      position: "Intern",
      company: "Command",

      start: "August 2020",
      end: "April 2021",
      desc: `
       Communicated with candidates across each step of the application
      process, and updated the status of each candidate in Greenhouse
       Coordinated with external recruiting agencies to assess the
      qualifications of candidates they submitted for technical roles
       Gathered hiring paperwork, and communicated required
      documents needed from hires during onboarding
       Participated in interviews, and provided feedback and information
      to candidates regarding status 2-3 days after interviews
      `,
    };
    const education2 = {
      course: "B.S. in Management",
      university: "University of Virar",
      start: `August 2020`,
      end: `May 2022`,
    };

    const education1 = {
      course: "B.S. Comuter Science",
      university: "University of Mumbai",
      start: `August 2022`,
      end: `Present`,
    };

    setEducation([education1, education2]);
    setExperience([experience1, experience2]);
  }

  function generatePrint() {
    return (
      <>
        <ReactToPrint
          trigger={() => {
            return <button>Print CV</button>;
          }}
        />
      </>
    );
  }

  return (
    <>
      <div className="content">
        <section className="cv-form">
          <PersonalInfo
            onFirstName={onFirstName}
            onLastName={onLastName}
            onTitle={onTitle}
            onEmail={onEmail}
            onDescription={onDescription}
            onAddress={onAddress}
            onPhoneNumber={onPhoneNumber}
          />
          <Experience
            onSubmit={addExperience}
            deleteExperience={deleteExperience}
            experience={experience}
            saveExperience={saveExperience}
          />
          <Education
            addEducation={addEducation}
            education={education}
            saveEducation={saveEducation}
            deleteEducation={deleteEducation}
          />
          <section className="btn-container">
            <button className="btn btn-load" onClick={loadExample}>
              Load Example
            </button>
            <button className="btn btn-reset" onClick={reset}>
              Reset
            </button>
            <ReactToPrint
              trigger={() => {
                return <button className="btn btn-print">Print CV</button>;
              }}
              content={() => componentRef}
              documentTitle="Cv"
              pageStyle="print"
            />
          </section>
        </section>

        <div className="preview" ref={(el) => (componentRef = el)}>
          <Preview
            firstName={firstName}
            lastName={lastName}
            title={title}
            phoneNumber={phoneNumber}
            description={decription}
            address={address}
            email={email}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    </>
  );
}
