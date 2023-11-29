import React from 'react'
import liv2 from "../assets/liv2.jpg"
import "../assets/style/book.css"
import { Link } from 'react-router-dom'

export default function Book({livre}) {
    return (
        <div className="item">
            <img src={liv2} alt="" />
            <div className="texte">
                <Link to={"/home/livre/" + livre.notice_id}>
                    <div className="title">{livre.tit1}</div>
                </Link>
                <div className="info">
                    <p>
                        Auteur : <span>{ }</span>
                    </p>
                    <p>
                        Editeur : <span></span>
                    </p>
                    <p>
                        Impression : <span>{livre.npages}</span>
                    </p>
                    <p>
                        Collection : <span> </span>
                    </p>
                    <p>
                        Date : <span>{livre.year}</span>
                    </p>
                    <p>
                        Type de documents : <span>Livre</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
