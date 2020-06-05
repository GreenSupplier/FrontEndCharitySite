import React, {useState} from "react";

import ItemForm from "../../SustainableDevelopment/FormComps/itemForm";
import DropdownForm from "./dropdownForm";

const ImpactedIndividualDetails = ({ setForm, formData, navigation }) => {
  const { nameOfImpactedIndividual,
          appliedBefore,
          timeSinceLastApplication,
          fullAddress,
          impactedIndividualContactEmail, 
          impactedIndividualContactNumber,
          currentEmploymentSituation,
          householdIncomPerYear,
          numberOfChildren
        } = formData;

  const { next , previous } = navigation;

  let [selectedBoolean,setBoolean] = useState(false);

  const booleanChange =(event)=>{
    setBoolean(event.target.value);
    formData.appliedBefore = event.target.value;
    
  }

  return (
    <div className="form">
       <h2>Apply - Impacted Individual's Details</h2> <h3>Please ensure all fields are filled in</h3>

      <form onSubmit={()=>{next()}}>

      <ItemForm
        label="Name of Impacted Individual"
        name="nameOfImpactedIndividual"
        value={nameOfImpactedIndividual}
        onChange={setForm}
        />
   
        <>
        <label>Has The Individual Applied Before?</label>
            <br></br>
            <label htmlFor="yes">Yes</label>
            <input id="yes" name="applied" type="radio" value={true} onChange={booleanChange}></input>
                
            <label htmlFor="no">No</label>
            <input id="no" name="applied" type="radio" value={false} defaultChecked onChange={booleanChange}></input>
            
       </>
      <ItemForm
        label="Time Since Last Application (if applicable)"
        name="timeSinceLastApplication"
        value={timeSinceLastApplication}
        onChange={setForm}
        />
      <ItemForm
        label="Full Address"
        name="fullAddress"
        value={fullAddress}
        onChange={setForm}
        />
      <ItemForm
        label="Contact Number"
        name="impactedIndividualContactNumber"
        value={impactedIndividualContactNumber}
        onChange={setForm}
        />
    <ItemForm
        label="Contact Email"
        name="impactedIndividualContactEmail"
        value={impactedIndividualContactEmail}
        onChange={setForm}
        type="email"
        />
    <div>
        <label>Number of Children</label>
        <select
        name="numberOfChildren"
        value={numberOfChildren}
        onChange={setForm}>
            {/* <option defaultValue >Select Amount</option> */}
            <option value="0">No Children</option>
            <option value="1-2">1-2 Children</option>
            <option value="3-4">3-4 Children</option>
            <option value="5+">5+ Children</option>
        </select>
    </div>
      
    <div>
        <label>Current Employment Status</label>
        <select
        name="currentEmploymentSituation"
        value={currentEmploymentSituation}
        onChange={setForm}>
            {/* <option defaultValue >Select Amount</option> */}
            <option value="Full Time Empoyment">Full Time Empoyment</option>
            <option value="Part Time Empoyment">Part Time Empoyment</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Retired">Retired</option>
        </select>
    </div>
      
    <div>
        <label>Household Income Per Year</label>
        <select
        name="householdIncomPerYear"
        value={householdIncomPerYear}
        onChange={setForm}>
            {/* <option defaultValue >Select Amount</option> */}
            <option value="Under £10,000">Under £10,000</option>
            <option value="£10,000-£16,000">£10,000-£16,000 </option>
            <option value="£16,000-£18,000">£16,000-£18,000</option>
            <option value="18,000-£20,000">£18,000-£20,000</option>
            <option value="Over £20,000">Over £20,000</option>
        </select>
    </div>
    
      <div className="fundingNavDiv"> 
        <div onClick={previous} id="back">
          <input  className="" id="fundingNavButtons" value="Back" ></input>
        </div>
        
        <div   id="next">
            <input  className="" id="fundingNavButtons" type="submit" value="Next" ></input>
        </div>
      </div>

    </form>
    </div>
  );
};

export default ImpactedIndividualDetails;