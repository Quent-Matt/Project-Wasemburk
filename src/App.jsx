import React from "react";
import NavBar from "./composent/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InstallationDry from "./pages/InstalationDry.jsx";
import ErreurDry from "./pages/ErreurDry.jsx";
import InstallationWD440 from "./pages/InstalationWD440.jsx";
import InstallationWD440PT from "./pages/InstalationWD440PT.jsx";
import ErreurWD440 from "./pages/ErreurWD440.jsx";
import ErreurWD440PT from "./pages/ErreurWD440PT.jsx";
import PompeVidange from "./pages/Error/PompeVidange.jsx";
import PressionCirculation from "./pages/Error/PressionCirculation.jsx";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="p-4">
                    <Routes>
                        <Route path="Project-Wasemburk/" element={<Home />} />
                        <Route path="/instalationdry" element={<InstallationDry />} />
                        <Route path="/erreurdry" element={<ErreurDry />} />
                        <Route path="/instalationwd440" element={<InstallationWD440 />} />
                        <Route path="/erreurwd440" element={<ErreurWD440 />} />
                        <Route path="/instalationwd440pt" element={<InstallationWD440PT />} />
                        <Route path="/erreurwd440pt" element={<ErreurWD440PT />} />
                        

                        <Route path="/Erreur-pompe-Vidange" element={<PompeVidange />} />/
                        <Route path="/Erreur-pression-circulation" element={<PressionCirculation />} />/
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;