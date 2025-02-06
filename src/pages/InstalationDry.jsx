import React from "react";
import installDry from "../assets/InstallationDry/image.png";
import installDry1 from "../assets/InstallationDry/dry 11.png";
import installDry2 from "../assets/InstallationDry/dry 2.png";
import installDry3 from "../assets/InstallationDry/20250203_090940.jpg";
import installDry4 from "../assets/InstallationDry/20250203_090948.jpg";

export default function InstallationDry() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Installation de la machine Dry</h1>
            <p className="mt-4 text-lg">
                Bienvenue sur la page d'installation de la machine <strong>Dry</strong>.
                Veuillez suivre les instructions pour installer correctement votre appareil.
            </p>
            <img
                src={installDry}
                alt="Machine Dry"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={installDry1}
                alt="Machine Dry"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={installDry2}
                alt="Machine Dry "
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={installDry3}
                alt="Machine Dry"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={installDry4}
                alt="Machine Dry"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />

        </div>
    );
}