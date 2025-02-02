import React from "react";
import prefiltre from "../assets/InstallationPT/IMG-20231123-WA0000.jpg";
import evacuationAir from "../assets/InstallationPT/IMG-20241030-WA0001.jpg";
import imagemachine from "../assets/InstallationPT/20241105_100639.jpg";
import imagemachine2 from "../assets/InstallationPT/20220127_100944.jpg";
import imagemachine3 from "../assets/InstallationPT/IMG-20241105-WA0001.jpeg";
import imagemachine4 from "../assets/InstallationPT/insta/20191029_095840.jpg";
import imagemachine5 from "../assets/InstallationPT/insta/20191029_095827.jpg";
import imagemachine6 from "../assets/InstallationPT/insta/20191029_095756.jpg";
import imagemachine7 from "../assets/InstallationPT/insta/20211104_090127.jpg";
import imagemachine8 from "../assets/InstallationPT/insta/20220126_091542.jpg";
import imagemachine9 from "../assets/InstallationPT/insta/20220128_114157.jpg";
import imagemachine10 from "../assets/InstallationPT/insta/20220128_114214.jpg";
import imagemachine11 from "../assets/InstallationPT/insta/20220128_114224.jpg";
import imagemachine12 from "../assets/InstallationPT/insta/unnamedph6.jpg";


export default function InstallationWD440PT() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Installation de la machine WD 440 PT</h1>
            <p className="mt-4 text-lg">
                Bienvenue sur la page d'installation de la machine <strong>WD 440 PT</strong>.
                Veuillez suivre les instructions pour installer correctement votre appareil.
            </p>
            <img
                src={imagemachine9}
                alt="Machine WD 440 PT"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
                <div className="text-xl flex justify-center pt-4">Accès aux robinets, prise 220V , prise rj45, évacuation de l'air vicié</div>
            <img
                src={imagemachine6}
                alt="Machine WD 440 PT"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={imagemachine5}
                alt="Machine WD 440 PT "
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={imagemachine4}
                alt="Machine WD 440 PT"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={imagemachine7}
                alt="Machine WD 440 PT"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={imagemachine12}
                alt="Machine WD 440 PT "
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={imagemachine8}
                alt="Machine WD 440 PT "
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={imagemachine10}
                alt="Machine WD 440 PT"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={imagemachine11}
                alt="Machine WD 440 PT"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={prefiltre}
                alt="Machine WD 440 PT prefiltre"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">Préfiltres</div>
            <img src={evacuationAir}
                 alt="Machine WD 440 PT evacuation d'air"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">Evacuation air 50mm
                Arrivée d'eau froide et chaude ( 10 litres par min , eau chaude min 50 degrés
            </div>
            <img src={imagemachine}
                 alt="Machine"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img src={imagemachine2}
                 alt="Machine"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">ici pour deux PT wd 440 et un pt prévisionnel préfiltres à double filtration</div>
            <img src={imagemachine3}
                 alt="Machine"
                 className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />

        </div>
    );
}