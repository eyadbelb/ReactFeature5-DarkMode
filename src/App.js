// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [myTheme, setTheme] = useState(theme.light);
  const [iconName, seticone] = useState("Dark theme");
  const toggleCurrentTheme = () => {
    if (myTheme === theme.light) {
      setTheme(theme.dark);
      seticone("Light Theme");
    }
    if (myTheme === theme.dark) {
      setTheme(theme.light);
      seticone("Dark Theme");
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>{iconName}</ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
