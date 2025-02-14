import React, { useState } from "react";

export default function ImageModal({ src, alt }) {
    const [isOpen, setIsOpen] = useState(false);
    const [zoom, setZoom] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: "50%", y: "50%" });

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setZoom(false); // Réinitialise le zoom à la fermeture
    };

    const handleZoom = (e) => {
        if (!zoom) {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            setZoomPosition({ x: `${x}%`, y: `${y}%` });
            setZoom(true);
        } else {
            setZoom(false);
        }
    };

    return (
        <>
            {/* Image cliquable pour ouvrir le modal */}
            <img
                src={src}
                alt={alt}
                className="mt-6 w-full max-w-md mx-auto rounded-lg shadow-lg cursor-pointer"
                onClick={openModal}
            />

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-4 rounded-lg relative flex justify-center items-center"
                        style={{
                            maxWidth: "80vw",
                            maxHeight: "80vh",
                            overflow: "hidden",
                        }}
                        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l’image
                    >
                        {/* Conteneur de l'image avec redimensionnement forcé */}
                        <div
                            className="cursor-pointer flex justify-center items-center"
                            onClick={handleZoom}
                            style={{
                                width: "70vw",
                                height: "70vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="transition-transform duration-300 object-contain"
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: "auto",
                                    height: "auto",
                                    transform: zoom ? "scale(2)" : "scale(1)",
                                    transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}