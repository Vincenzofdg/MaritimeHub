import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JsonData from "../Data/Agency.json";

import PDF from "../Templates/Maersk";

import "../Style/OKTB.css"
import PlusImg from "../Assets/plus.png";

function OKTB() {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    crew: {
        p1: {
          Name: '',
          Nationality: '',
          BirthDate: '',
          Document: ''
        }
      }
    }
  );
  const [crewCount, setCrewCount] = useState(1);
  const indice =["Name", "Nationality", "Birth Date", "Document"];

  const crewInputRow = (count) => {
    
    return (
      <div className="oktb-container-crew-indice" key={count + "oktb-row"}>
        {
          indice.map((elem, i) => {
            const formatedKey = elem.replace(' ', '');

            return (
              <input 
                key={count + "oktb-column-" + (i + 1) }
                className="oktb-crew-indice"
                type="text"
                value={forms.crew[`p${count}`][formatedKey]}
                onChange={({target: {value}}) => setForms(pastValues => ({
                  ...pastValues,
                  crew: {
                    ...pastValues.crew,
                    [`p${count}`]: {
                      ...pastValues.crew[`p${count}`],
                      [formatedKey]: value
                    }
                  }
                }))}
              />
            )
            }
          )
        }
      </div>
    )
  }

  const handleAddRow = () => {
    setForms(p => ({
      ...p,
      crew: {
        ...p.crew,
        [`p${crewCount + 1}`]: {
          Name: '',
          Nationality: '',
          BirthDate: '',
          Document: ''
        }
      }
    }));
    setCrewCount(p => p + 1)
  };

  const handlePDF = () => {
    const generatePDF = PDF.OKTB(forms);
    !generatePDF && window.alert("Missing Fields");
  }

  return (
    <div className="oktb-container-form">
      <div className="oktb-container-header">
        <div className="oktb-header-agency">
          <p id="oktb-title-agency">Select the Agency:</p>
          <select className="oktb-header-agency-select" onChange={({target: {value}}) => setForms(p => ({...p, template: value}))}>
            <option hidden defaultValue={'none'}>-</option>
            {
              JsonData.map((data, _i) => {
                const { name } = data;
                const formatName = name.toLowerCase();

                return <option key={formatName} value={formatName}>{name}</option>
              })
            }
          </select>
        </div>
      </div>
      <div className="oktb-container-crew">
        <div className="oktb-container-crew-indice">
          {
            indice.map((e, i) => (
              <div key={"oktb-crew-menu-" + i} className="oktb-crew-indice">
                <p id="oktb-crew-indice">{e}</p>
              </div>
            ))
          }
        </div>
          {[...Array.from({length: crewCount})].map((_e, i) => crewInputRow(i + 1))}
          <div className="oktb-add-crew-member">
            <img
              src={PlusImg}
              id="oktb-add-crew-member"
              alt="Add Crew Member"
              onClick={handleAddRow}
            />
          </div>
      </div>

      <div className="oktb-container-flight-detail">
          <div className="oktb-flight-detail-title">
            <p id="oktb-flight-detail-title">Flight Detail:</p>
          </div>
          <textarea
            id="oktb-flight-detail-information"
            // rows="10"
            // cols="150"
            placeholder="Enter flight details here..."
            onChange={({target: {value}}) => setForms(p => ({...p, flight: value}))}
          />
      </div>

      <div className="oktb-container-result">
        <button
          id="oktb-result-btn"
          style={{backgroundColor: "#FA8072", color: "black"}}
          type="button"
          onClick={() => navigate("/home")}
        >
          Cancel
        </button>
        { 
          !!forms.template && (
            <button
              id="oktb-result-btn"
              type="button"
              // disabled={true}
              style={{backgroundColor: "#AFE1AF", color: "black"}}
              onClick={handlePDF}
            >
              Download PDF
            </button>
          )
        }
      </div>

    </div>
  );
}

export default OKTB;
