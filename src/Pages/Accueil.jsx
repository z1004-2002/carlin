import React, { useEffect } from "react";
import Header from "../components/Header";
import "./../assets/style/home.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import liv1 from "../assets/liv1.jpg"
import liv2 from "../assets/liv2.jpg"
import liv3 from "../assets/liv3.jpg"
import liv4 from "../assets/liv4.jpg"
import liv5 from "../assets/liv5.jpeg"

let liste = [liv1,liv2,liv3,liv4,liv5]

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
                            {liste.map((livre)=><div className="item"><img src={livre} alt="livre" /></div>)}
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