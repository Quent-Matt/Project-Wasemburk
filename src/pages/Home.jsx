import React from "react"
import fond_ecran from "../assets/fond d\'écran.png";
import Popup from "../composent/Popup.jsx";

export default function Home() {
    return (

        <div>
            <Popup />
            <h1 className="text-3xl font-bold text-emerald-700">
                Bienvenue sur le site Wasemburk !
            </h1>
            <p className="mt-4 text-lg">
                Découvrez nos machines en cliquant sur les options dans la barre de navigation ci-dessus.
            </p>
            <img
                src={fond_ecran}
                alt="Employés wasemburk "
                className="mt-6 w-full max-w-xl mx-auto rounded-lg shadow-lg"
            />
        </div>
    )
}