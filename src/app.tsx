import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateTripPage from "../src/pages/create-trip";
import TripDetailsPage from "../src/pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: < TripDetailsPage />,
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
