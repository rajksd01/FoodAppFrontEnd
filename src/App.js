import React from "react";
import "../App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Support from "./components/Support";
import { Work } from "./components/Work";
import  Cart  from "./components/Cart";
import Career from "./components/Career";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

function App() {
  return (
    <>
      <>
        <Provider store={appStore}>
          <Header />
          <Outlet />
          <Footer />
        </Provider>
      </>
    </>
  );
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);
export default App;
