import React from "react";
import { render } from "react-dom";
import Store from "./Store";
import registerServiceWorker from './registerServiceWorker';
import App from './App'
 
 
render(
  <App store={Store} />,
  document.getElementById('root')
);
registerServiceWorker();
