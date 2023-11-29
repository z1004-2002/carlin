import React from "react";
import { FaChevronDown, FaHome, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/logo.png"
import "../assets/style/header.css"

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="contenu">
        <Link to={"/"}>
          <span className="logo">
            <img src={logo} alt="" srcset="" />
          </span>
        </Link>
        <ul>
          <li><Link to="/"><FaHome className="icon_home" /></Link></li>
          <li>
            <span>LE RESEAU ET SES BIBLIOTHEQUES</span>
            <FaChevronDown />
          </li>
          <li>
            <span>NOS COLLECTIONS</span>
            <FaChevronDown />
          </li>
          <li>
            <span>RESOURCES EN LIGNE</span>
            <FaChevronDown />
          </li>
          <li>
            <span>SE FORMER</span>
            <FaChevronDown />
          </li>
          <li>
            <span>AIDE A LA RECHERCHE</span>
            <FaChevronDown />
          </li>
          <li>
            <span>LA VIE DU RESEAU</span>
            <FaChevronDown />
          </li>
        </ul>
      </div>
      <div className="circle">
        <ul>
          <li>
            {/*<Link to="/dashboard"><span>Mon compte</span></Link>
            <FaChevronDown />*/}
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            FR|EN
          </li>
        </ul>
      </div>
      <div className="ban"></div>
      <div className="contenu2">
        <div className="line1">
          <ul>
            <li><Link to="/home/faq">FAQ</Link> </li><li>|</li><li> <span>HORAIRES</span>
              <FaChevronDown/>
            </li>
          </ul>
        </div>
        <div className="line2">
          <span className="title">Trouver un document</span>
        </div>
        <div className="line3">
          <div className="left">
            <select name="champ1" id="champ1">
              <option value="1">Tous Les Documents</option>
              <option value="2">Livres</option>
              <option value="3">Revues et journaux</option>
              <option value="4">CD et Vinyles</option>
              <option value="5">DVD</option>
            </select>
            <select name="champ2" id="champ2">
              <option value="1">Dans Toutes Les Bibliothèques</option>
              <option value="2">Bibloiotheque de Bertoua</option>
              <option value="2">Bibloiotheque du centre d'excellence</option>
              <option value="2">Bibloiotheque de la WCL</option>
            </select>
            <input type="text" />
            <span className="ok">OK</span>
          </div>
          <div className="right">
            <span>RECHERCHE AVANCEE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
