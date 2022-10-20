import { useRoutes } from "react-router-dom";
import Inicio from "./Inicio";
import Login from "./Login";
import Navbar from "./Navbar"
import Ofertas from "./Ofertas";

export default function Router() {
    let element = useRoutes([
        {
          element: <Login />,
          children: [
            { path: "/", element: <Login /> },
            { path: "signup", element: <Login /> }
          ]
        },
        {
          element: <Navbar />,
          children: [
            { path: "home", element: <Inicio /> },
            { path: "offers", element: <Ofertas /> }
          ]
        }
      ]);
    
      return element;
}
