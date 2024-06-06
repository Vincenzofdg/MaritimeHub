import { useNavigate } from "react-router-dom";

import "../../Style/LogOut.css";
import LogOutBtn from "../../Assets/log_out.png";
import {storage} from "../../Hooks";

function LogOut() {
  const navigate = useNavigate();

  const handleClick = () => {
    storage.delete("token");
    navigate("/");
  }

  return (
    <div className="log-out-container">
      <img 
        className="log-out-btn"
        src={LogOutBtn}
        onClick={handleClick}
        alt="Log Out"
      />
    </div>
  )
}

export default LogOut;