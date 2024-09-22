import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//components and pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

const AppComponent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
