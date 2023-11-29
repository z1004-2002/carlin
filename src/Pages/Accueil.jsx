import React, { useEffect } from "react";
import Header from "../components/Header";
import "./../assets/style/home.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import liv2 from "../assets/liv2.jpg"
import { Link } from "react-router-dom";

let liste = [
    {
        notice_id: 161,
        typdoc: "a",
        tit1: "The Mind of Jesus",
        ed1_id: 70,
        year: "",
        mention_edition: "",
        npages: "170",
        n_resume: "",
        origine_catalogage: 1,
        statut: 1,
        indexation_lang: "en_UK"
    },
    {
        "notice_id": 385,
        "typdoc": "a",
        "tit1": "The unlighted lustre",
        "ed1_id": 107,
        "year": "",
        "mention_edition": "",
        "npages": "278",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
    },
    {
        "notice_id": 386,
        "typdoc": "a",
        "tit1": "the harpercollins study bible",
        "ed1_id": 167,
        "year": "",
        "mention_edition": "",
        "npages": "2337",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
    },
    {
        "notice_id": 387,
        "typdoc": "a",
        "tit1": "the life of continual rejoicing",
        "ed1_id": 127,
        "year": "",
        "mention_edition": "",
        "npages": "127",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
    },
    {
        "notice_id": 392,
        "typdoc": "a",
        "tit1": "1 CORINTHIANS",
        "ed1_id": 127,
        "year": "",
        "mention_edition": "",
        "npages": "112",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
    },
]

export default function Accueil() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home">
            <Header />
            <section>
                <div className="head">
                    <span>Nouvelles Acquisitions</span>
                </div>
                <div className="body">
                    <div className="left">
                        <FaChevronLeft />
                    </div>
                    <div className="slider">
                        <div className="content_slide">
                            {liste.map((livre) => <div className="item">
                                    <img src={liv2} alt="livre" />
                                    <Link to={"/home/livre/"+livre.notice_id}>
                                        <p>
                                        {livre.tit1}</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="right">
                        <FaChevronRight />
                    </div>
                </div>
                <div className="foot">
                    <span><FaChevronRight /> DECOUVIR TOUTES LES NOUVEAUTES</span>
                </div>
            </section>
        </div>
    );
};