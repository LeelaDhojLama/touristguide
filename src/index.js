import React from 'react';
import * as serviceWorker from "./serviceWorker";
import ReactDOM from 'react-dom';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {Provider} from "react-redux";
import {store} from "./store";

const theme = createTheme({
    palette: {},
    overrides: {
        MuiTypography: {
            h3: {
                fontSize: "1.2rem",
            },
            h5: {
                fontSize: "0.9rem"
            },
            body1: {
                fontSize: "0.9rem",
                fontFamily: [
                    'Raleway',
                ].join(','),
            },
            gutterBottom: {
                marginBottom: 0
            }
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <MobileView>
                    <App/>
                </MobileView>
                <BrowserView>
                    Open website using mobile phones
                </BrowserView>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
