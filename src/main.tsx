import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/auth'; //hook de autenticação
import GlobalStyles from './styles/global';
import theme from './styles/theme.ts';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
    <ToastContainer/>
  </React.StrictMode>
)
