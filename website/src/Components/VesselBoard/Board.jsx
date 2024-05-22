import { useState, useEffect } from "react";
import { MainVessel as Card } from "../Cards";
import VesselDB from "../../Services/Vessels";

function Board() {
  const [vessels, setVessels] = useState([]);

  useEffect(() => {
    const updateMinutes = 300000; // 5 min

    async function Job() {
      const dataVessel = await VesselDB();
      setVessels(dataVessel);
    }

    Job();

    const interval = setInterval(async () => {
      console.log("Atualizando vessels");
      const updatedData = await VesselDB();
      setVessels(updatedData);
    }, updateMinutes);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vessel-card-container">
      {vessels.map((vessel, i) => <Card key={"vessel-" + i} data={vessel} />)}
    </div>
  );
}

export default Board;
