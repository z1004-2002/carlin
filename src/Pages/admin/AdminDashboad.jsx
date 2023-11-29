import React, { useState, useEffect, useSyncExternalStore } from "react";
import ContentViewer from "../../components/admin/ContentViewer";
import DashHeader from "../../components/admin/DashHeader";
import SideBar from "../../components/admin/SideBar";
import "./../../assets/style/dashboard.css"
import liv1 from "../../assets/liv1.jpg"
import liv2 from "../../assets/liv2.jpg"

const livres = [liv1, liv2]

export default function AdminDashboad() {
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
        },
        {
            "notice_id": 82,
            "typdoc": "a",
            "tit1": "La sagesse du bibliothécaire",
            "ed1_id": 19,
            "year": "2004",
            "mention_edition": "",
            "npages": "109 p.",
            "n_resume": "",
            "origine_catalogage": 7,
            "statut": 1,
            "indexation_lang": ""
        },
    ])


    useEffect(() => {
        setDimension(window.innerWidth);
    }, [data]);

    return (
        <div className='admindashboard'>
            <div className="flex cont flex-column">
                <DashHeader />
                <div className="conten">
                    <div className="livres">
                        {data.map((livre) => <div className="item">
                            <img src={liv2} alt="" />
                            <div className="texte">
                                <div className="title">{livre.tit1}</div>
                                <div className="info">
                                    <p>
                                        Auteur : <span>{ }</span>
                                    </p>
                                    <p>
                                        Année : <span>{livre.year}</span>
                                    </p>
                                    <p>
                                        Nombre de pages : <span>{livre.npages}</span>
                                    </p>
                                    <p>
                                        Type : <span>Livre</span>
                                    </p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <SideBar dimension={dimension} status={toggleVal} />
            </div>
        </div>
    )
}
