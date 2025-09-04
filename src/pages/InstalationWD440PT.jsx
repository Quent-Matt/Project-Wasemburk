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
import imagemachine13 from "../assets/InstallationPT/lation/20250203_090921.jpg";
import imagemachine14 from "../assets/InstallationPT/lation/20250203_090804.jpg";
import imagemachine15 from "../assets/InstallationPT/lation/20250203_090827.jpg";
import imagemachine16 from "../assets/InstallationPT/lation/20250203_090837.jpg";
import imagemachine17 from "../assets/InstallationPT/lation/20250203_090852.jpg";
import imagemachine18 from "../assets/InstallationPT/lation/20250203_090910.jpg";
import imagemachine19 from "../assets/InstallationPT/lation/20250203_090928.jpg";
import imagemachine20 from "../assets/InstallationPT/pt-dimention1.jpg";
import imagemachine21 from "../assets/InstallationPT/pt-dimention2.jpg";
import installDry5 from "../assets/InstallationDry/instal dry.png";
import ImageModal from "../composent/ImageModal.jsx";

export default function InstallationWD440PT() {
    return (
        <div className="p-6">
                <h1 className="text-3xl font-bold">Installation de la machine WD 440 PT</h1>
                <p className="mt-4 text-lg">
                        Bienvenue sur la page d'installation de la machine <strong>WD 440 PT</strong>.
                        Veuillez suivre les instructions pour installer correctement votre appareil.
                </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <ImageModal src={imagemachine21} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine20} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine9} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine6} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine5} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine4} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine7} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine12} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine8} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine10} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine11} alt="machine WD 440 PT"/>
                <ImageModal src={prefiltre} alt="machine WD 440 PT"/>
                <ImageModal src={evacuationAir} alt="machine WD 440 PT" />
                <ImageModal src={imagemachine} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine2} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine3} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine13} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine14} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine15} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine16} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine17} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine18} alt="machine WD 440 PT"/>
                <ImageModal src={imagemachine19} alt="machine WD 440 PT"/>
            </div>
        </div>
    );
}
