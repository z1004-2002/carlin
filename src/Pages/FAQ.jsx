import React from 'react'
import Header from "../components/Header";
import "./../assets/style/faq.css"
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function FAQ() {
    return (
        <div className='faq'>
            <Header />
            <div className="link">
                <ul>
                    <li>
                        <Link to="/home"><FaHome /></Link>
                    </li>
                    <li><FaChevronRight /></li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="contenus">
                <div className="left">
                    <div className="title">FAQ</div>

                    <div class="cadre">
                        <div class="cadre-accordeon">
                            <input type="radio" name="accordeon" id="votre_menu1" />
                            <div class="accordeon">
                                <label for="votre_menu1">Comment nous contacter ?</label>
                                <div class="nav">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint quidem quod unde impedit natus maxime perspiciatis quo esse. Fuga possimus,
                                        voluptatem omnis reiciendis voluptates reprehenderit quis modi distinctio dolores
                                        aliquid itaque sequi neque, eos molestiae ea tempora saepe odit provident veniam
                                        earum magnam. Dolor, magni consequatur. Dolor magnam aliquid quia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cadre-accordeon">
                            <input type="radio" name="accordeon" id="votre_menu2" />
                            <div class="accordeon">
                                <label for="votre_menu2">Comment renouveler mon abonnement en ligne ?</label>
                                <div class="nav">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint quidem quod unde impedit natus maxime perspiciatis quo esse. Fuga possimus,
                                        voluptatem omnis reiciendis voluptates reprehenderit quis modi distinctio dolores
                                        aliquid itaque sequi neque, eos molestiae ea tempora saepe odit provident veniam
                                        earum magnam. Dolor, magni consequatur. Dolor magnam aliquid quia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cadre-accordeon">
                            <input type="radio" name="accordeon" id="votre_menu3" />
                            <div class="accordeon">
                                <label for="votre_menu3">Comment s'inscrire en ligne</label>
                                <div class="nav">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint quidem quod unde impedit natus maxime perspiciatis quo esse. Fuga possimus,
                                        voluptatem omnis reiciendis voluptates reprehenderit quis modi distinctio dolores
                                        aliquid itaque sequi neque, eos molestiae ea tempora saepe odit provident veniam
                                        earum magnam. Dolor, magni consequatur. Dolor magnam aliquid quia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cadre-accordeon">
                            <input type="radio" name="accordeon" id="votre_menu4" />
                            <div class="accordeon">
                                <label for="votre_menu4">Comment accéder à mon dossier d'abonné ?</label>
                                <div class="nav">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint quidem quod unde impedit natus maxime perspiciatis quo esse. Fuga possimus,
                                        voluptatem omnis reiciendis voluptates reprehenderit quis modi distinctio dolores
                                        aliquid itaque sequi neque, eos molestiae ea tempora saepe odit provident veniam
                                        earum magnam. Dolor, magni consequatur. Dolor magnam aliquid quia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="right">


                    <div className="title">FAQ</div>

                    <div class="cadre">
                        <div class="cadre-accordeon">
                            <input type="radio" name="accordeon" id="votre_menu11" />
                            <div class="accordeon">
                                <label for="votre_menu11">Aide contextuelle ?</label>
                                <div class="nav">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint quidem quod unde impedit natus maxime perspiciatis quo esse. Fuga possimus,
                                        voluptatem omnis reiciendis voluptates reprehenderit quis modi distinctio dolores
                                        aliquid itaque sequi neque, eos molestiae ea tempora saepe odit provident veniam
                                        earum magnam. Dolor, magni consequatur. Dolor magnam aliquid quia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cadre-accordeon">
                            <input type="radio" name="accordeon" id="votre_menu12" />
                            <div class="accordeon">
                                <label for="votre_menu12">Fonctionnalité</label>
                                <div class="nav">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint quidem quod unde impedit natus maxime perspiciatis quo esse. Fuga possimus,
                                        voluptatem omnis reiciendis voluptates reprehenderit quis modi distinctio dolores
                                        aliquid itaque sequi neque, eos molestiae ea tempora saepe odit provident veniam
                                        earum magnam. Dolor, magni consequatur. Dolor magnam aliquid quia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cadre-accordeon">
                            <input type="radio" name="accordeon" id="votre_menu13" />
                            <div class="accordeon">
                                <label for="votre_menu13">Comment renouveler mon abonnement en ligne ?</label>
                                <div class="nav">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint quidem quod unde impedit natus maxime perspiciatis quo esse. Fuga possimus,
                                        voluptatem omnis reiciendis voluptates reprehenderit quis modi distinctio dolores
                                        aliquid itaque sequi neque, eos molestiae ea tempora saepe odit provident veniam
                                        earum magnam. Dolor, magni consequatur. Dolor magnam aliquid quia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
