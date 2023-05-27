import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

type ThemeContextType = {
  isDarkMode: boolean;
  handleThemeChange: (_: boolean) => void;
};

const defaultThemeContext = {
  isDarkMode: false,
  handleThemeChange: (_: boolean) => {},
};

// ----------------------------------------------------------------------

export default function ThemeProvider({
  children,
}: Props): ReactElement<React.ReactNode> {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const cachedTheme = localStorage.getItem("theme");
    if (cachedTheme) {
      setDarkMode(cachedTheme === "dark");
      document.documentElement.className = cachedTheme === "dark" ? "dark" : "";
    }
  }, []);

  const handleThemeChange = useCallback((checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
    document.documentElement.className = checked ? "dark" : "";
  }, []);

  const value = useMemo(
    () => ({ isDarkMode, handleThemeChange }),
    [isDarkMode, handleThemeChange]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export function useThemeContext() {
  return useContext(ThemeContext);
}
