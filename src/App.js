import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import RootNavigation from "./layouts/RootNavigation";
import LoginPage from "./pages/LoginPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootNavigation />,
      children: [
        { path: "/", element: <HomePage/>},
        { path: "/login", element: <LoginPage/> },
        { path: "/profile/:profileId", element: <ProfilePage/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
