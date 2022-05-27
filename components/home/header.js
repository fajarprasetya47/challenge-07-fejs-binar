import NavToggle from '../../static/nav'

export default function HeaderHome() {
    return (
        <>
            <div className="header-navbar sticky-top">
                <div id="logo">
                    <img src='/img/logo.svg' alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="?">Our Services</a></li>
                        <li><a href="?">Why Us</a></li>
                        <li><a href="?">Testimonial</a></li>
                        <li><a href="?">FAQ</a></li>
                        <li><button type="button" className="btn btn-success">Register</button></li>
                    </ul>
                    <div className='nav-toggle-close btn' onClick={NavToggle}>
                        <img src='/img/fi_close.svg' alt="fi_close" />
                    </div>
                </nav>
                <div className='nav-toggle btn' onClick={NavToggle}>
                <img src='/img/fi_menu.svg' alt="fi_menu" />
                </div>
            </div>
        </>
    )
}