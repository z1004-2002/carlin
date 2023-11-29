import React, { useState, useEffect } from "react";
import DashHeader from "../../components/admin/DashHeader";
import SideBar from "../../components/admin/SideBar";
import "./../../assets/style/dashboard.css"
import "./../../assets/style/livre.css"
import { useParams } from "react-router-dom";

export default function AdminDashboad() {
    const [dimension, setDimension] = useState();
    const [toggleVal, setToggleVal] = useState(true);
    const { id } = useParams();

    const [data, setData] = useState({
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
    })


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://pmbservice.onrender.com/books/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                setData(JSON.parse(result))
            })
            .catch(error => console.log('error', error));

        setDimension(window.innerWidth);
    }, [id]);

    return (
        <div className='admindashboard'>
            <div className="flex cont flex-column">
                <DashHeader />
                <div className="conten monlivre">
                    <div className="title">
                        {data.tit1}
                    </div>
                    <div className="info">
                        <p>
                            <span>Auteur :</span>
                        </p>
                        <p>
                            <span>Editeur : </span>
                        </p>
                        <p>
                            <span>Impression : </span>
                        </p>
                        <p>
                            <span>Collection : </span>
                        </p>
                        <p>
                            <span>Date : </span>{data.year} 
                        </p>
                        <p>
                            <span>Type de documents : </span>Livre
                        </p>
                    </div>
                    <div className="resume">
                        <p>Resume :</p>
                        <p>
                            {data.n_resume}
                        </p>
                    </div>
                </div>
                <SideBar dimension={dimension} status={toggleVal} />
            </div>
        </div>
    )
}
