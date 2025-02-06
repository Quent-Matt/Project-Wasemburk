import React from "react";
import installWd from "../assets/InstallationWD/20250129_080840 (1).jpg";
import installWd1 from "../assets/InstallationWD/20250129_080814.jpg";

export default function InstallationWD440() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Installation de la machine WD 440</h1>
            <p className="mt-4 text-lg">
                Bienvenue sur la page d'installation de la machine <strong>WD 440</strong>.
                Veuillez suivre les instructions pour installer correctement votre appareil.
            </p>
            <div className="text-xl flex justify-center pt-4">
                Réducteur de pression ( 3 bars )
            </div>
            <div className="text-xl flex justify-center pt-4">
                Évacuation air en 50mm
            </div>
            <div className="text-xl flex justify-center pt-4">
                Prise 220 V  et  RJ45
            </div>
            <div className="text-xl flex justify-center pt-4">
                Vanne eau froide 10L/min
            </div>
            <div className="text-xl flex justify-center pt-4">
                Vanne eau chaude min 50°C , 10L:min
            </div>
            <img
                src={installWd}
                alt="Machine WD 440 "
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">Evacuation </div>
            <img
                src={installWd1}
                alt="Machine WD 440 "
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
        </div>
    );
}