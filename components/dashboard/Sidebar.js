import { useEffect, useState } from "react"

export default function Sidebar({ dashboard, car }) {
    const [sidebar, setSidebar] = useState(
        {
            dashboard: "sidebar-link",
            car: "sidebar-link"
        })

    useEffect(() => {
        if(dashboard){
            setSidebar({dashboard: "sidebar-link-active", car: "sidebar-link" });
        }
        if(car){
            setSidebar({dashboard: "sidebar-link", car: "sidebar-link-active" })
        }
    },[]);

    return (
        <>
            <div className="sidebar">
                <div className="text-center logo">
                    <img src='/img/logo3.svg' alt="logo" />
                </div>

                <div className={sidebar.dashboard}>
                    <a href="/dashboard" >
                        <div className="sidebar-link-icon"><img src='/img/fi_home.svg' alt="fi_home" /></div>
                        Dashboard
                    </a>
                </div>

                <div className={sidebar.car}>
                    <a href="/dashboard/cars">
                        <div className="sidebar-link-icon"><img src='/img/fi_truck.svg' alt="fi_truck" /></div>
                        Cars
                    </a>
                </div>
            </div>
        </>
    )
}