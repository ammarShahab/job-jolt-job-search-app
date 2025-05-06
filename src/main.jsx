import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-left"></Toaster>
      </HelmetProvider>
    </StrictMode>
  </AuthProvider>
);
