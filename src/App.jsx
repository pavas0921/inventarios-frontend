import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./App.css";
import "./index.css";
import { CustomRouterProvider } from "./router";

function App() {
  const theme = createTheme({
    direction: 'rtl',
    // other theme properties
  });

  return (
    <>
      <CustomRouterProvider>
        <ThemeProvider theme={theme}>

        </ThemeProvider>
      </CustomRouterProvider>

    </>
  );
}

export default App;
