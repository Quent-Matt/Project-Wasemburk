import React from 'react';
import pressioncirculation from "../../assets/PressionCirculation/20240715_095343.jpg";
import pressioncirculation1 from "../../assets/PressionCirculation/20240715_094839.jpg";
import pressioncirculation2 from "../../assets/PressionCirculation/20240715_094905.jpg";
import pressioncirculation3 from "../../assets/PressionCirculation/20240715_094925.jpg";
import pressioncirculation4 from "../../assets/PressionCirculation/20240715_095310.jpg";
import pressioncirculation5 from "../../assets/PressionCirculation/20240715_095107.jpg";
import pompeVidange from "../../assets/pompeVidange/20240619_112305.jpg";
import ImageModal from "../../composent/ImageModal.jsx";


export default function PressionCirculation() {
    return (
        <div>
           <h2 className="text-5xl pb-12 pt-4 text-emerald-700 font-medium">Erreur : Pas de pression de circulation</h2>
            <div>
                <div className="text-xl flex justify-center pt-4">Il existe plusieurs cause pour ce message</div>
                <div>
                    1 ere cause, le tube hélicoïdal est obstrué par un objet  cliqué ici
                    2ème cause,  le bras oscillant ne tourne pas      cliqué ici
                    3ème  cause , le niveau d'eau est trop bas      cliqué ici
                </div>
                <h2>  1 ere cause  le tube hélicoïdal est obstrué</h2>
                <ImageModal src={pressioncirculation} alt="machine WD 440 PT pression circulation"/>

                <div className="text-xl flex justify-center pt-4">Dévisser la bague.</div>
                <ImageModal src={pressioncirculation1} alt="machine WD 440 PT pression circulation"/>
                <ImageModal src={pressioncirculation2} alt="machine WD 440 PT pression circulation"/>

                <div className="text-xl flex justify-center pt-4">nspecter l'intérieur à la recherche d'un objet.</div>
                <ImageModal src={pressioncirculation3} alt="machine WD 440 PT pression circulation"/>

                <div className="text-xl flex justify-center pt-4">Nettoyer le filtre</div>
                <ImageModal src={pressioncirculation4} alt="machine WD 440 PT pression circulation"/>
                <ImageModal src={pressioncirculation5} alt="machine WD 440 PT pression circulation"/>
                <div className="text-xl flex justify-center pt-4">Visser la bague</div>
            </div>
        </div>
    )
}