import React, {useState} from "react";

export default function ErreurWD440PT() {
    const items = [
        { id: 1, name: "Erreur 404" },
        { id: 2, name: "Erreur 405" },
        { id: 3, name: "Erreur 406" },
        { id: 4, name: "Erreur 407" },
        { id: 5, name: "Erreur 408" },
    ];
    const [search, setSearch] = useState("");
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Message d'erreur de la machine WD 440 PT</h1>
            <p className="mt-4 text-lg">
                Bienvenue sur la page des messages d'erreurs de la machine <strong>WD 440 PT</strong>.
                Veuillez suivre les instructions pour réparer correctement votre appareil.
            </p>


            <input
                type="text"
                placeholder="Rechercher une erreur..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="mt-6 w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="mt-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <div
                            key={item.id}
                            className="p-2 bg-gray-100 rounded-lg shadow-sm mb-2 hover:bg-gray-200"
                        >
                            {item.name}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Aucune erreur trouvée.</p>
                )}
            </div>
        </div>
    );
}