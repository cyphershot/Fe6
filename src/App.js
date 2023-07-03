import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Form from './scenes/form';
import Invoice from './scenes/invoice';
import Login from './scenes/login';
import Register from './scenes/Register';
import Edit from './scenes/edit';
import PrivateRoute from './auth/PrivateRoute';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ToastContainer position="top-right" />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="*"
              element={
                <>
                  <Sidebar />
                  <main className="content">
                    <Topbar />
                    <Routes>
                      <Route
                        path="/dash"
                        element={
                          <PrivateRoute>
                            <Dashboard />
                          </PrivateRoute>
                        }
                      />

                      <Route
                        path="/team"
                        element={
                          <PrivateRoute>
                            <Team />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/form"
                        element={
                          <PrivateRoute>
                            <Form />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/invoice/:id"
                        element={
                          <PrivateRoute>
                            <Invoice />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/edit/:id"
                        element={
                          <PrivateRoute>
                            <Edit />
                          </PrivateRoute>
                        }
                      />
                    </Routes>
                  </main>
                </>
              }
            />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
