import React from 'react';
import pressioncirculation from "../../assets/PressionCirculation/20240715_095343.jpg";
import pressioncirculation1 from "../../assets/PressionCirculation/20240715_094839.jpg";
import pressioncirculation2 from "../../assets/PressionCirculation/20240715_094905.jpg";
import pressioncirculation3 from "../../assets/PressionCirculation/20240715_094925.jpg";
import pressioncirculation4 from "../../assets/PressionCirculation/20240715_095310.jpg";
import pressioncirculation5 from "../../assets/PressionCirculation/20240715_095107.jpg";


export default function PressionCirculation() {
    return (
        <div>
           <h2 className="text-5xl pb-12 pt-4 text-emerald-700 font-medium">Erreur : Pas de pression de circulation</h2>
            <div>
                <div>Il existe plusieurs cause pour ce message</div>
                <div>
                    1 ere cause, le tube hélicoïdal est obstrué par un objet  cliqué ici
                    2ème cause,  le bras oscillant ne tourne pas      cliqué ici
                    3ème  cause , le niveau d'eau est trop bas      cliqué ici
                </div>
                <h2>  1 ere cause  le tube hélicoïdal est obstrué</h2>

                <img
                    src={pressioncirculation}
                    alt="Machine WD 440 (PT) pression circulation"
                    className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <div>Dévisser la bague.</div>
                <img
                    src={pressioncirculation1}
                    alt="Machine WD 440 (PT) pression circulation"
                    className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <img
                    src={pressioncirculation2}
                    alt="Machine WD 440 (PT) pression circulation"
                    className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <div>nspecter l'intérieur à la recherche d'un objet.</div>
                <img
                    src={pressioncirculation3}
                    alt="Machine WD 440 (PT) pression circulation"
                    className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <div>Nettoyer le filtre</div>
                <img
                    src={pressioncirculation4}
                    alt="Machine WD 440 (PT) pression circulation"
                    className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <img
                    src={pressioncirculation5}
                    alt="Machine WD 440 (PT) pression circulation"
                    className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <div>Visser la bague</div>
            </div>
        </div>
    )
}