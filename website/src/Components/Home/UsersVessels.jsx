import { useContext } from "react";
import { Global } from "../../Context";
import { useNavigate } from "react-router-dom";
import "../../Style/VesselsComponent.css"

import Card from "../Cards/usersVessel";

function UsersVessels() {
  const { user } = useContext(Global);
  const navigate = useNavigate();


  const handlePress = () => {

  }

  return (
    <div className="c-vessels-section">
      <p id="c-vessels-card-user" style={{textAlign: "start"}}>Vessels under your care:</p>
      <div className={`c-vessels-card-container ${user.vessels === 0 && "c-vesssel-empty-container"}`}>
        {
          user.vessels !== 0 && (
            ["MV 01", "MV 02", "MV 03", "MV 04"].map((vessel, i) => <Card key={"mv-" + i} data={vessel} />)
          )
        }
        <div
          className={`c-vessels-card-user c-vessel-card-user-add ${user.vessels === 0 && "c-vesssel-empty"}`}
          onClick={handlePress}
        >
          <p id="c-vessels-card-user"><strong>+</strong> Add</p>
        </div>
      </div>
    </div>
  )
}

export default UsersVessels;
