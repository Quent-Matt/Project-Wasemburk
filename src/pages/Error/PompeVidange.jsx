import React from 'react';
import pompeVidange from "../../assets/pompeVidange/20240619_112305.jpg";
import pompeVidange1 from "../../assets/pompeVidange/20240619_112403.jpg";
import pompeVidange2 from "../../assets/pompeVidange/20240619_113000.jpg";
import pompeVidange3 from "../../assets/pompeVidange/20240619_113015.jpg";
import pompeVidange4 from "../../assets/pompeVidange/20240619_113025.jpg";
import pompeVidange5 from "../../assets/pompeVidange/20240619_113058.jpg";

export default function PompeVidange() {

    return (
        <div>
            <h2 className="text-5xl pb-12 pt-4 text-emerald-700 font-medium">Erreur : Dysfonctionement de la Pompe de vidange</h2>
            <div className="text-xl flex justify-center pt-4">Il y aura de l'eau dans le tuyau blanc ainci que dans la
                pompe de vidange, prévoyer un récipient et des
                essuies .</div>
            <img
                src={pompeVidange}
                alt="Machine WD 440 (PT) pompe vidange"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">
                Couper le tiewrap
            </div>
            <img
                src={pompeVidange1}
                alt="Machine WD 440 (PT) pompe vidange"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">Retirer le tuyau blanc </div>
            <img
                src={pompeVidange2}
                alt="Machine WD 440 (PT) pompe vidange"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">Retirer le clapet anti-retour et insérer un nouveau
                clapet. </div>
            <img
                src={pompeVidange3}
                alt="Machine WD 440 (PT) pompe vidange"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4">Connecter le tuyau .</div>
            <img
                src={pompeVidange4}
                alt="Machine WD 440 (PT) pompe vidange"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <img
                src={pompeVidange5}
                alt="Machine WD 440 (PT) pompe vidange"
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="text-xl flex justify-center pt-4"> Fixer un tiewrap.</div>
        </div>
    )
}