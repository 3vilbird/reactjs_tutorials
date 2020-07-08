import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currrentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currrentTheme.backgroundColor}`,
        color: `${currrentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1> theme toggler</h1>
      <p>
        Creates a Context object. When React renders a component that subscribes<br></br>
        to this Context object it will read the current context value from the<br></br>
        closest matching Provider above it in the tree. The defaultValue<br></br>
        argument is only used when a component does not have a matching Provider<br></br>
        above it in the tree. This can be helpful for testing components in<br></br>
        isolation without wrapping them. Note: passing undefined as a Provider<br></br>
        value does not cause consuming components to use defaultValue<br></br>
      </p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currrentTheme.border}`,
        }}
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default HeroSection;
