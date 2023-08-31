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
      <ThemeProvider theme={theme}>
        <CustomRouterProvider />
      </ThemeProvider>

    </>
  );
}

export default App;
