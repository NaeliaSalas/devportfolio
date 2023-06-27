import "./toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <FontAwesomeIcon icon={faSun} className="t-icon" />
      <FontAwesomeIcon icon={faMoon} className="t-icon" />
      <div
        className={`t-button ${theme.state.darkMode ? 'dark' : 'light'}`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Toggle;
