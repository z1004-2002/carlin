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
let liste2 = [
    {
        "notice_id": 366,
        "typdoc": "a",
        "tit1": "austin farrer: the essential sermons",
        "ed1_id": 175,
        "year": "",
        "mention_edition": "",
        "npages": "211",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 367,
        "typdoc": "a",
        "tit1": "GREAT CHAPTERS OF THE BIBLE",
        "ed1_id": 181,
        "year": "",
        "mention_edition": "",
        "npages": "379",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 368,
        "typdoc": "a",
        "tit1": "sunday teaching: the collects, epistles and gospels",
        "ed1_id": 175,
        "year": "",
        "mention_edition": "",
        "npages": "372",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 369,
        "typdoc": "a",
        "tit1": "GREAT PERSONAL WORKERS",
        "ed1_id": 127,
        "year": "",
        "mention_edition": "",
        "npages": "191",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 370,
        "typdoc": "a",
        "tit1": "my lord delayeth his coming",
        "ed1_id": 182,
        "year": "",
        "mention_edition": "",
        "npages": "31",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        }
]

let liste3 = [
    {
        "notice_id": 354,
        "typdoc": "a",
        "tit1": "TO SHEW THYSELF APPROVED",
        "ed1_id": 127,
        "year": "",
        "mention_edition": "",
        "npages": "113",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 355,
        "typdoc": "a",
        "tit1": "NEVER ALONE",
        "ed1_id": 175,
        "year": "",
        "mention_edition": "",
        "npages": "224",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 356,
        "typdoc": "a",
        "tit1": "PREFACE TO BIBLE STUDY",
        "ed1_id": 176,
        "year": "",
        "mention_edition": "",
        "npages": "128",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 357,
        "typdoc": "a",
        "tit1": "sermons of robert murray m'cheyne",
        "ed1_id": 134,
        "year": "",
        "mention_edition": "",
        "npages": "187",
        "n_resume": "",
        "origine_catalogage": 1,
        "statut": 1,
        "indexation_lang": ""
        },
        {
        "notice_id": 358,
        "typdoc": "a",
        "tit1": "WATER FROM MANY WELLS",
        "ed1_id": 177,
        "year": "",
        "mention_edition": "",
        "npages": "103",
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

            <section>
                <div className="head">
                    <span>Couramment demandés</span>
                </div>
                <div className="body">
                    <div className="left">
                        <FaChevronLeft />
                    </div>
                    <div className="slider">
                        <div className="content_slide">
                            {liste2.map((livre) => <div className="item">
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
                    <span><FaChevronRight /> Voir Plus ...</span>
                </div>
            </section>
            <section>
                <div className="head">
                    <span>
                        LES CLASSICS
                    </span>
                </div>
                <div className="body">
                    <div className="left">
                        <FaChevronLeft />
                    </div>
                    <div className="slider">
                        <div className="content_slide">
                            {liste3.map((livre) => <div className="item">
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
                    <span><FaChevronRight /> Voir Plus ...</span>
                </div>
            </section>
        </div>
    );
};