// import { useHistory } from "react-router-dom";

import ArrowImage from "../../Assets/return.png";

function Lable({data}) {
  // const history = useHistory();

  return (
    <div className="menu-lable-container">
      {/* <img id="go-back-arrow" src={ArrowImage} alt="Go Back" /> */}
      {
        data.map((elem, i) => {
          const { text_value, color_hex } = elem;

          return (
            <div key={"menu-lable-" + i} className="lable-container">
              <div className="color-circle" style={{backgroundColor: color_hex}} />
              <p id="lable-text">{text_value}</p>
            </div>
          );
        })
      }
    </div>
  )
}

export default Lable;