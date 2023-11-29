import React, { useState, useEffect, useSyncExternalStore } from "react";
import ContentViewer from "../../components/admin/ContentViewer";
import DashHeader from "../../components/admin/DashHeader";
import SideBar from "../../components/admin/SideBar";
import "./../../assets/style/dashboard.css"
import liv1 from "../../assets/liv1.jpg"
import liv2 from "../../assets/liv2.jpg"
import { Link } from "react-router-dom";
import Book from "../../components/Book";

const livres = [liv1, liv2]

export default function Livre() {
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
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://pmbservice.onrender.com/books/", requestOptions)
            .then(response => response.text())
            .then(result => {
                setData(JSON.parse(result))
            })
            .catch(error => console.log('error', error));


        setDimension(window.innerWidth);
    }, [data]);

    return (
        <div className='admindashboard'>
            <div className="flex cont flex-column">
                <DashHeader />
                <div className="conten">
                    <div className="livres">
                        {data.map((livre) => <Book livre={livre}/>)}
                    </div>
                </div>
                <SideBar dimension={dimension} status={toggleVal} />
            </div>
        </div>
    )
}
