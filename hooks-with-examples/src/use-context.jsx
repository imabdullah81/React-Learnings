import { createContext,useContext } from "react";
const ThemeContext = createContext();

export default function Context() {
  return (
    <ThemeContext.Provider value="light">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Theme is {theme}</button>;
}
