import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter} from "react-router-dom";
import App from "./components/App";

/* add the NavBar component to our App component */

ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById("root")
);