import React, { useState, useEffect, useSyncExternalStore } from "react";
import ContentViewer from "../../components/admin/ContentViewer";
import DashHeader from "../../components/admin/DashHeader";
import SideBar from "../../components/admin/Side";
import "./../../assets/style/dashboard.css"
import liv1 from "../../assets/liv1.jpg"
import liv2 from "../../assets/liv2.jpg"
import { Link } from "react-router-dom";
import Book from "../../components/Book";

const livres = [liv1, liv2]

export default function Admin() {
    const [dimension, setDimension] = useState();
    const [toggleVal, setToggleVal] = useState(true);
    const [data, setData] = useState([
        {
            "notice_id": 79,
            "typdoc": "a",
            "tit1": "Les loups",
            "ed1_id": 16,
            "year": "2006",
            "mention_edition": "",
            "npages": "1 vol. (non paginé [31] p.)",
            "n_resume": " ",
            "origine_catalogage": 7,
            "statut": 1,
            "indexation_lang": ""
        }
    ])


    useEffect(() => {

        setDimension(window.innerWidth);
    }, [data]);

    return (
        <div className='admindashboard'>
            <div className="flex cont flex-column">
                <DashHeader />
                <div className="conten">
                    <div className="form">
                        <form className="md:mt-5 md:text-center">
                            <input

                                required
                                type="text"
                                className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
                                placeholder="Username.."
                            ></input>
                            <input

                                required
                                type="email"
                                className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
                                placeholder="Email address.."
                            ></input>
                            <input
                                required
                                type="date"
                                className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
                                placeholder="date de naissanse"
                            ></input>
                            <input
                                required
                                type="text"
                                className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[260px]"
                                placeholder="Centre d'intérêt"
                            ></input>
                            <button
                                type="reset"
                                className="mt-5 w-[260px] shadow-md bg-gradient-to-br from-rose-600 to-rose-500 text-white font-bold p-2 rounded-lg"
                            >
                                Enregistrer
                            </button>
                        </form>
                    </div>
                </div>
                <SideBar dimension={dimension} status={toggleVal} />
            </div>
        </div>
    )
}
