import { useState } from "react";
import PropTypes from "prop-types";
import {Global as Context} from ".";

function Provider({ children }) {
  const [user, setUser] = useState({username: "", password: ""});

  const obj = {
    user, setUser
  };

  return (
    <Context.Provider value={obj}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;