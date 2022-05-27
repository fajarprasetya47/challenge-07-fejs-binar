export default function Content({ children, titleMenu, subMenu, subSubMenu }) {
    return (
        <>
            <div id="dashboard-wrapper">
                <div id="nav-content">
                    <div className="nav-content-title-menu">{titleMenu}</div>
                    <div className="nav-content-submenu">{subMenu}</div>
                </div>
                <div id="content-dashboard">
                    <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item">{titleMenu}</li>
                            {subSubMenu ?
                                <>
                                    <li className="breadcrumb-item fw-bold">{subMenu}</li>
                                    <li className="breadcrumb-item active">{subSubMenu}</li>
                                </> 
                            : <li className="breadcrumb-item active">{subMenu}</li> } 
                        </ol>
                    </nav>
                    {children}
                </div>
            </div>
        </>
    )
}