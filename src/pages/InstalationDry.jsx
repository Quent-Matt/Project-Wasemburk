import React,{useState} from "react";
import installDry from "../assets/InstallationDry/image.png";
import installDry1 from "../assets/InstallationDry/dry 11.png";
import installDry2 from "../assets/InstallationDry/dry 2.png";
import installDry3 from "../assets/InstallationDry/20250203_090940.jpg";
import installDry4 from "../assets/InstallationDry/20250203_090948.jpg";
import installDry5 from "../assets/InstallationDry/instal dry.png";
import ImageModal from "../composent/ImageModal.jsx";

export default function InstallationDry() {

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Installation de la machine Dry</h1>
            <p className="mt-4 text-lg">
                Bienvenue sur la page d'installation de la machine <strong>Dry</strong>.
                Veuillez suivre les instructions pour installer correctement votre appareil.
            </p>
            <ImageModal src={installDry5} alt="machine dry"/>
            <ImageModal src={installDry} alt="machine dry"/>
            <ImageModal src={installDry1} alt="machine dry"/>
            <ImageModal src={installDry2} alt="machine dry"/>
            <ImageModal src={installDry3} alt="machine dry"/>
            <ImageModal src={installDry4} alt="machine dry"/>

        </div>
    );
}