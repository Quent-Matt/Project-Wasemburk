
import flowfiltre6 from "../../../assets/DysfonctionnementFlowFiltre/20250204_152413.jpg";
import ImageModal from "../../../composent/ImageModal.jsx";
import React from "react";
import {Link} from "react-router-dom";

export default function DI16() {
    return (
        <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-xl">
        Prendre un objet et taper sur le capteur noir jusqu'à ce que le point vert s'éteigne.
    <br />
    Le DI 16 pour le capteur de flux à droite et le DI 17 pour celui de gauche.
    <br />
    Si cela se répète, appeler le service technique de Wassenburg.
</div>

    <ImageModal src={flowfiltre6} alt="ims flow filtre" />

    <Link to="/Erreur-IMS-dysfonctionnement-flow-filtre">
        <button className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-600">
            Revenir à l'erreur
        </button>
    </Link>
</div>
    )
}