import Dashboard from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route  } from 'react-router-dom';
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team"
import Form from "./scenes/form";
import Invoice from "./scenes/invoice";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
  
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={ <Team /> } />
        <Route path="/form" element={ <Form /> } />
        <Route path="/invoice" element={ <Invoice /> } />

        
       </Routes>


      </main>

    </div>

    </ThemeProvider>

    </ColorModeContext.Provider>

  );
  
}

export default App;
