import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import Login from './Login';
import Header from './Header';

import Inicio from './Inicio';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Ofertas from './Ofertas';
import Nosotros from './Nosotros';

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
       {/*    <Route path="/ofertas1" element={<Navbar2 />} /> */}
        </Routes>

        {/* <Alerts className="container" alrt={alert} /> */}

        <Navbar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/nosotros" element={<Nosotros />} />
       

          <Route
             path="*"
             element={<NotFound />}
           />
        </Routes>
      </Router>


    </>
  );
}

