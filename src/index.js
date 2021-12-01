import React from "react"
import { render } from "react-dom"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import App from "./App.js"

render(<App />, document.getElementById("root"))

serviceWorkerRegistration.register();

reportWebVitals();