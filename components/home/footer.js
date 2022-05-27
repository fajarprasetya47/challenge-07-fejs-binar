export default function FooterHome() {
    return (
        <>
            <footer>
                <div id="address">
                    <div id="addr-addr">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                    <div id="addr-email">binarcarrental@gmail.com</div>
                    <div id="addr-phone">081-233-334-808</div>
                </div>
                <div id="nav">
                    <ul>
                        <li><a href="?">Our Service</a></li>
                        <li><a href="?">Why Us</a></li>
                        <li><a href="?">Testimonial</a></li>
                        <li><a href="?">FAQ</a></li>
                    </ul>
                </div>
                <div id="sosmed">
                    Connect with us
                    <div className="sosmed-group">
                        <a href="-#"><img src='/img/icon_facebook.svg' alt="icon_facebook" /></a>
                        <a href="-#"><img src='/img/icon_instagram.svg' alt="icon_instagram" /></a>
                        <a href="-#"><img src='/img/icon_twitter.svg' alt="icon_twitter" /></a>
                        <a href="-#"><img src='/img/icon_mail.svg' alt="icon_mail" /></a>
                        <a href="-#"><img src='/img/icon_twitch.svg' alt="icon_twitch" /></a>
                    </div>
                </div>
                <div id="copyright">
                    <span>Copyright Binar 2022</span>
                    <img src='/img/logo.svg' alt="logo" />
                </div>
            </footer>
        </>
    )
}