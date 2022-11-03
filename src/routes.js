import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Layout/Navbar"
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound"
export default function Router() {
    let element = useRoutes([
      
        {
          element: <Login />,
          children: [
            { path: "/", element: <Login /> },
            { path: "signup", element: <Login />},
           
          ]
        },
        {
          element: <Navbar />,
          children: [
            { path: "home", element: <Home /> },
            { path: "offers", element: <Offers /> },
            { path: "*", element: <NotFound /> },
          ]
        },
       
      ]);
    
      return element;
}
