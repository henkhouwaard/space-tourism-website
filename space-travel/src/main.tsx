import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import Crew from "./Crew.tsx";
import Destination from "./Destination.tsx";
import CrewMember from "./CrewMember.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DestinationDetails from "./DestinationDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      {
        path: "destination",
        element: <Destination />,
        children: [
          { index: true, element: <Navigate to="moon" /> },
          {
            path: ":name",
            element: <DestinationDetails />,
          },
        ],
      },
      {
        path: "crew",
        element: <Crew />,
        children: [
          { index: true, element: <Navigate to="commander" /> },
          {
            path: ":role",
            element: <CrewMember />,
          },
        ],
      },
      {
        path: "destination/:name",
        element: <Destination />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
