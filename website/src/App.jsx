import { useState, useEffect } from "react";

import Lable from "./Components/Lable";
import Card from "./Components/VesselCard";

import VesselDB from "./Services/Vessels";
import StatusDB  from "./Services/Status";

function App() {
  const [vessels, setVessels] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    async function Job() {
      const dataVessel = await VesselDB();
      const dataStatus = await StatusDB();

      setVessels(dataVessel);
      setStatus(dataStatus);
    }
    Job();
    }, []);

  return (
    <div className="board-container">
      <Lable data={status} />
      <div className="vessel-card-container">
        {
          vessels.map((vessel, i) => <Card key={"vessel-" + i} data={vessel} />)
        }
      </div>
    </div>
  );
}

export default App;
