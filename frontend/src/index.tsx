import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '@assets/css/index.css';
import App from './App';
import './i18n';
import { store } from './store';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                        <SnackbarProvider maxSnack={3}>
                            <App />
                        </SnackbarProvider>
                    </ThemeProvider>
                </StyledEngineProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
