import "./App.css";
import logo from "./logo.svg"
import StyledButton, { AnimatedLogo, FancyButton , SubmitButton} from "./components/Button/Button";
import { ThemeProvider } from "styled-components";

const theme = {
  dark:{
    primary: "#000",
    secondary: "#fff"
  },
  light:{
    primary: "#fff",
    secondary: "#000"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outlined">Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as={"a"}>Button</FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton >Submit Button</SubmitButton>
      <div>
        <br />
      </div>
      <AnimatedLogo src={logo}/>
      <div>
        <br />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
