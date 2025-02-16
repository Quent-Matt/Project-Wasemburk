import ImageModal from "../../../composent/ImageModal.jsx";
import flowfiltre from "../../../assets/DysfonctionnementFlowFiltre/20250204_152311.jpg";
import flowfiltre1 from "../../../assets/DysfonctionnementFlowFiltre/20250204_152301.jpg";
import flowfiltre2 from "../../../assets/DysfonctionnementFlowFiltre/20250204_152319.jpg";
import flowfiltre3 from "../../../assets/DysfonctionnementFlowFiltre/20250204_152326.jpg";
import flowfiltre4 from "../../../assets/DysfonctionnementFlowFiltre/20250204_152337.jpg";
import flowfiltre5 from "../../../assets/DysfonctionnementFlowFiltre/20250204_152351.jpg";
import flowfiltre6 from "../../../assets/DysfonctionnementFlowFiltre/20250204_152413.jpg";
import flowfiltre7 from "../../../assets/DysfonctionnementFlowFiltre/di16.png"
import React from "react";
import { Link } from "react-router-dom";


export default function DysfonctionnementFlowFiltre() {
    return (
        <div>
            <h2 className="text-5xl pb-12 pt-4 text-emerald-700 font-medium">Ims dysfonctionnement flow filtre</h2>
            <div className="text-xl flex justify-center pt-4">petite clé</div>
            <ImageModal src={flowfiltre1} alt="ims flow filtre"/>
            <div className="text-xl flex justify-center pt-4">1749 plus OK</div>
            <ImageModal src={flowfiltre} alt="ims flow filtre"/>
            <div className="text-xl flex justify-center pt-4">Test § adjustment</div>
            <ImageModal src={flowfiltre2} alt="ims flow filtre"/>
            <div className="text-xl flex justify-center pt-4">PLC I/O </div>
            <ImageModal src={flowfiltre3} alt="ims flow filtre"/>
            <div className="text-xl flex justify-center pt-4">UIM W INPUT</div>
            <ImageModal src={flowfiltre4} alt="ims flow filtre"/>
            <div className="text-xl flex justify-center pt-4">Si le DI 16 ou le DI 17 a son point vert allumé <Link to="/Erreur-IMS-dysfonctionnement-flow-filtre/Di-16" className="text-blue-500 underline ml-2">
                    Cliquer ici
            </Link> </div>
            <ImageModal src={flowfiltre5} alt="ims flow filtre"/>
                <ImageModal src={flowfiltre7} alt="ims flow filtre"/>


        </div>
    )
}