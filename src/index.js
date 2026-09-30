import react from "react";
import reactDom from "react-dom/client";
import App from "../components/App.js";
import { BrowserRouter } from "react-router";

 



 const root = reactDom.createRoot(document.getElementById('root'));
 root.render(
   <BrowserRouter>
    <App/>
    </BrowserRouter>
 )