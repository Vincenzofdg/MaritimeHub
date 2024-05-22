import { useState } from "react";
import PropTypes from "prop-types";
import {Global as Context} from ".";

function Provider({ children }) {
  const [token, setToken] = useState("")
  const [user, setUser] = useState({});

  const obj = {
    token, setToken,
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