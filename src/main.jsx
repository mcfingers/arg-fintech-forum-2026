import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./store/LanguageContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeVideo from "./components/HomeVideo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home-video",
    element: <HomeVideo />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
