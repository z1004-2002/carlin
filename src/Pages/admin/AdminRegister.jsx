import React from "react";
import { Link } from "react-router-dom";
import liv1 from "../../assets/logo.png"
import "../../assets/style/login.css"

export default function AdminRegister() {
    return (
        <div className="flex login">
            <div className="w-[50%] h-[100vh] md:hidden flex justify-center items-center p-6">
                <img
                    className="w-[100%] object-fill"
                    src={liv1}
                    alt="book-holder"
                ></img>
            </div>
            <div className="w-[50%] md:w-[100%] h-[100vh] filter flex flex-col justify-center items-center">

                <div className="formulaire">
                    <p className="font-bold text-lg md:text-center md:text-2xl">
                        <span>LOGIN</span>
                    </p>

                    <form className="md:mt-3 md:text-center">
                        <input
                            required
                            type="email"
                            className="md:w-[80%] bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[100%]"
                            placeholder="Email address.."
                        ></input>
                        <input
                            required
                            type="password"
                            className="md:w-[80%] md:my-5 bg-transparent border-b-slate-700 border-2 outline-none mt-5 p-2 w-[100%]"
                            placeholder="Password"
                        ></input>
                    </form>
                </div>
                <button className="login_button w-[200px] py-1 mt-4 rounded-sm text-white font-bold text-lg shadow-lg">
                    Enregistrer
                </button>

            </div>
        </div>
    );
};
