import React, { useState, useEffect } from "react";
import ContentViewer from "../../components/admin/ContentViewer";
import DashHeader from "../../components/admin/DashHeader";
import SideBar from "../../components/admin/SideBar";
import "./../../assets/style/dashboard.css"
import liv1 from "../../assets/liv1.jpg"
import liv2 from "../../assets/liv2.jpg"
import liv3 from "../../assets/liv3.jpg"
import liv4 from "../../assets/liv4.jpg"
import liv5 from "../../assets/liv5.jpeg"

const livres = [liv1,liv2,liv3,liv4,liv5,liv1,liv2,liv3,liv4,liv5]

export default function AdminDashboad() {
    const [dimension, setDimension] = useState();
    const [toggleVal, setToggleVal] = useState(true);
    

    useEffect(() => {
        setDimension(window.innerWidth);
    }, []);

    return (
        <div className='admindashboard'>
            <div className="flex cont flex-column">
                <DashHeader />
                <div className="conten">
                    <div className="livres">
                        {livres.map((livre)=><div className="item"><img src={livre} alt="" /></div>)}
                    </div>
                </div>
                <SideBar dimension={dimension} status={toggleVal} />
            </div>
        </div>
    )
}
