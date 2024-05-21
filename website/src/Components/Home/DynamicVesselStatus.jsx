import { useEffect, useState } from "react";
import "../../Style/VesselsComponent.css";

import { MainVessel as Card } from "../Cards";
import VesselDB from "../../Services/Vessels";

function DynamicVesselStatus() {
  const [vessels, setVessels] = useState([]);

  useEffect(() => {
    async function Job() {
      const dataVessel = await VesselDB();
      setVessels([dataVessel[0], dataVessel[dataVessel.length - 1], dataVessel[dataVessel.length - 2]]);
    }
    Job();
  }, []);

  return (
    <div className="c-vessels-section">
      <p id="c-vessels-card-user" style={{textAlign: "start"}}>Your vessel status:</p>
      <div className="c-vessels-card-container">
        {
          vessels.map((vessel, i) => <Card key={"d-vessel-" + i} data={vessel} />)
        }
      </div>
    </div>
  )
}

export default DynamicVesselStatus;