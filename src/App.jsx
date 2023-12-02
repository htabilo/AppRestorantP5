import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes/Home";
import { SobreNosotros } from "./Routes/SobreNosotros";
import { Menu } from "./Routes/Menu";
import { Reservas } from "./Routes/Reservas";
import { Contact } from "./Routes/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/reservas" element={< Reservas/>} />
     </Routes>
    
    <footer className="bg-body-tertiary">
      <p className="p-3 m-0 text-center">copyright</p>
    </footer>
   
    </>
  );
}

export default App;
