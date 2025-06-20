import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home/Home.jsx";
import UserFeed from "./pages/UserFeed/UserFeed.jsx";
import Layout from './Layout/Layout';
const queryClient = new QueryClient();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserFeed />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);
