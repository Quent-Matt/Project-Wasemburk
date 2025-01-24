import React from "react";
import prefiltre from "../assets/IMG-20231123-WA0000.jpg";
import evacuationAir from "../assets/IMG-20241030-WA0001.jpg";
import imagemachine from "../assets/20241105_100639.jpg";
import imagemachine2 from "../assets/20220127_100944.jpg";
import imagemachine3 from "../assets/IMG-20241105-WA0001.jpeg";

export default function InstallationWD440PT() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Installation de la machine WD 440 PT</h1>
            <p className="mt-4 text-lg">
                Bienvenue sur la page d'installation de la machine <strong>WD 440 PT</strong>.
                Veuillez suivre les instructions pour installer correctement votre appareil.
            </p>
            <img
                src={prefiltre}
                alt="Machine WD 440 PT prefiltre"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div>préfiltres</div>
            <img src={evacuationAir}
                 alt="Machine WD 440 PT evacuation d'air"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                 />
            <div>Evacuation air 50mm
                Arrivée d'eau froide et chaude ( 10 litres par min , eau chaude min 50 degrés </div>
            <img src={imagemachine}
                 alt="Machine"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                 />
            <img src={imagemachine2}
                 alt="Machine"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                 />
            <div>ici pour deux PT wd 440 et un pt prévisionnel  préfiltres à double filtration </div>
            <img src={imagemachine3}
                 alt="Machine"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                 />

        </div>
    );
}