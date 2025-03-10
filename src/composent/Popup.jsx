import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [showPopUp, setShowPopUp] = useState(true);

    useEffect(() => {

        if (sessionStorage.getItem('popupAccepted')) {
            setShowPopUp(false);
        }
    }, []);

    const handleAccept = () => {

        setShowPopUp(false);
        sessionStorage.setItem('popupAccepted', 'true');
    };

    if (!showPopUp) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold">Vous êtes sur un site non-officiel !</h2>
                <p className="mt-4">Acceptez si vous copmprenez</p>
                <button
                    onClick={handleAccept}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Accepter
                </button>
            </div>
        </div>
    );
};

export default Popup;