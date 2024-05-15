import { useState, useEffect } from "react";

import Lable from "./Components/Lable";
import Board from "./Board";

import StatusDB  from "./Services/Status";

function App() {
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

export default App;
