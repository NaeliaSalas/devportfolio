// Toggle.js

import "./toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className='t'>
      <FontAwesomeIcon
        icon={faSun}
        className={`t-icon ${!theme.state.darkMode ? "active" : ""}`}
      />
      <FontAwesomeIcon
        icon={faCloudMoon}
        className={`t-icon ${theme.state.darkMode ? "active" : ""}`}
      />
      <div
        className={`t-button ${theme.state.darkMode ? "dark" : "light"}`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Toggle;
