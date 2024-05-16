import { useState, useEffect } from "react";

import { Lable, Board } from  "../Components/VesselBoard";
import StatusDB  from "../Services/Status";
import "../Style/VesselBoard.css"

function VesselBoard() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    async function Job() {
      const dataStatus = await StatusDB();
      setStatus(dataStatus);
    }
    Job();
    }, []);

  return (
    <div className="board-container">
      <Lable data={status} />
      <Board />
    </div>
  );
}

export default VesselBoard;
