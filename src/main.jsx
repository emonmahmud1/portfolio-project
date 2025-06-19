import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import Home from './pages/Home/Home.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
