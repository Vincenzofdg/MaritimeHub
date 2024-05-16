import { useNavigate } from "react-router-dom";

import UserImage from "../../Assets/no_user.png";
import VesselImage from "../../Assets/vessel.png";
import OKTBImage from "../../Assets/oktb.png";
import DEPOMImage from "../../Assets/depom.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-user-image-container">
        <img className="home-user-image" src={UserImage} alt="Unknow User" />
      </div>
      <div className="home-user-info-container">
        <p id="home-user-name">Fabricio dos Santos</p>
        <p id="home-user-name">Navios: 00</p>
      </div>
      <div className="home-user-actions-container">
        <div className="menu-action-container" onClick={() => navigate("/vessel-board")}>
          <img id="menu-action-icon" src={VesselImage} alt="Vessel" />
          <p id="menu-action-text">Vessels</p>
        </div>
      </div>
      <div className="home-user-actions-container">
        <div className="menu-action-container">
          <img id="menu-action-icon" src={OKTBImage} alt="Vessel" />
          <p id="menu-action-text">OKTB</p>
        </div>
        <div className="menu-action-container">
          <img id="menu-action-icon" src={DEPOMImage} alt="Vessel" />
          <p id="menu-action-text">DEPOM</p>
        </div>
      </div>
    </div>
  )
}

export default Header;