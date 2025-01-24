
import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function NavBar() {


    return (
        <main className="flex flex-col justify-between">
            <div className="p-4 bg-emerald-700 text-white font-lato text-xl">Wasemburk</div>
            <div className="flex flex-row bg-emerald-600 text-white pl-4 gap-5">
                <div className="relative group">
                    <div className="p-4 cursor-pointer">WD 440</div>
                    <div className="absolute left-0 hidden group-hover:block bg-emerald-600 text-white p-2 rounded-b-md border border-emerald-700 ">
                        <Link to="/instalationwd440">
                            <button className="block w-full text-left p-2 hover:bg-emerald-500 rounded-md">Installation</button>
                        </Link>
                        <Link to="/erreurwd440">
                        <button className="block w-full text-left p-2 hover:bg-emerald-500 rounded-md">Message d'erreur</button>
                        </Link>
                    </div>
                </div>

                <div className="relative group">
                    <div className="p-4 cursor-pointer">WD 440 PT</div>
                    <div className="absolute left-0 hidden group-hover:block bg-emerald-600 text-white p-2 rounded-b-md border border-emerald-700">
                        <Link to="/instalationwd440pt">
                            <button className="block w-full text-left p-2 hover:bg-emerald-500 rounded-md">Installation</button>
                        </Link>
                        <Link to="/erreurwd440pt">
                            <button className="block w-full text-left p-2 hover:bg-emerald-500 rounded-md">Message d'erreur</button>
                        </Link>
                    </div>
                </div>

                <div className="relative group">
                    <div className="p-4 cursor-pointer">Dry</div>
                    <div className="absolute left-0 hidden group-hover:block bg-emerald-600 text-white p-2 rounded-b-md border border-emerald-700">
                        <Link to="/instalationdry">
                            <button className="block w-full text-left p-2 hover:bg-emerald-500 rounded-md">Installation</button>
                        </Link>
                        <Link to="/erreurdry">
                            <button className="block w-full text-left p-2 hover:bg-emerald-500 rounded-md">Message d'erreur</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>

    );
}