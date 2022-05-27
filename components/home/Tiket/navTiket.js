export default function NavTiket() {
    return (
        <>
            <div id="nav-tiket">
                <div className="d-flex">
                    <a><img src="/img/fi_arrow-left.svg" alt="fi_arrow-left" /></a>
                    <div className="mx-2">
                        <strong className="fw-bold">Tiket</strong>
                        <p>Order ID: xxxxxxxx</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="d-flex">
                        <div className="mx-2">
                            <img src="/img/fi_check.svg" alt="fi_check" />
                        </div>
                        <span>Pilih Metode</span>
                    </div>
                    <div className="mx-2">
                        <img src="/img/Line-process.svg" alt="Line-process" />
                    </div>
                    <div className="d-flex">
                        <div className="mx-2">
                            <img src="/img/fi_check.svg" alt="fi_check" />
                        </div>
                        <span>Bayar</span>
                    </div>
                    <div className="mx-2">
                        <img src="/img/Line-process.svg" alt="Line-process" />
                    </div>
                    <div className="d-flex">
                        <div className="mx-2"><img src="/img/step3.svg" alt="step3"/></div>
                        <span>Tiket</span>
                    </div>
                </div>
            </div>
        </>
    )
}