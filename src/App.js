import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>Portfolio</Body>
    </ThemeProvider>
  );
}

export default App;
