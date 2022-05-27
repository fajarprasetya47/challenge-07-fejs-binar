export default function NavbarHeader() {
    return (
        <>
            <div id="nav-dashboard" className="sticky-top">
                <div className="nav-dashboard-logo">
                    <img src="/img/logo2.svg" alt="logo" />
                </div>
                <div className="nav-dashboard-btn-menu ">
                    <img src='/img/fi_menu.svg' alt="fi_menu" />
                </div>
                <div className="nav-dashboard-search ms-auto">
                    <div class="input-group">
                        <div className="input-group-text">
                            <img src="/img/fi_search.svg"/>
                        </div>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outlined-blue" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className="nav-dashboard-user ms-auto ms-md-0">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="user-avatar me-1">
                            <span className="initials">U</span>
                        </div>
                        <strong className="align-self-center">Unis Badri</strong>
                        <div className="ms-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}