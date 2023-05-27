import { ReactElement } from "react";
import { useThemeContext } from "../context/themeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export function DarkModeToggle(): ReactElement<"button"> {
  const { isDarkMode, handleThemeChange } = useThemeContext();

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={handleThemeChange}
      size={24}
      sunColor="#eb5c60"
      moonColor="#53b7b9"
    />
  );
}
