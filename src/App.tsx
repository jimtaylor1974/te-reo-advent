import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import { GlobalStyles } from "./components/GlobalStyles";
import { Routes } from "./components/Routes";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
