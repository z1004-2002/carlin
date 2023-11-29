import React from "react";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import "../../assets/style/header.css"

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header abel" >
      <div className="contenu">
        <Link to={"/"}>
          <span className="logo">
            <img src={logo} alt="" srcset="" />
          </span>
        </Link>
        <ul>
          <li><FaHome className="icon_home" /></li>
          <li>
            <span>LE RESEAU ET SES BIBLIOTHEQUES</span>
            <FaChevronDown />
          </li>
          <li>
            <span>NOS COLLECTIONS</span>
            <FaChevronDown />
          </li>
        </ul>
      </div>
      <div className="circle">
        <ul>
          <li>
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
            <li> </li><li>|</li><li> <span>HORAIRES</span>
              <FaChevronDown/>
            </li>
          </ul>
        </div>
        <div className="line2">
          <span className="title">MON TABLEAU DE BOARD</span>
        </div>
        <div className="line3">
          <div className="left">

          </div>
          <div className="right">
            <Link to="/"><span>RETOUR A L'ACCUEIL</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
