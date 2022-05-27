export default function Faq() {
    return (
        <>
            <section id="faq">
                <div className="faq-text">
                    <h3>Frequently Asked Question</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="faq-list">
                    <div className="card-faq dropdown">
                        <div className="card-faq-text">Apa saja syarat yang dibutuhkan?</div>
                        <img src="/img/drop-down.svg" />
                    </div>
                    <div className="card-faq">
                        <div className="card-faq-text">Berapa hari minimal sewa mobil lepas kunci?</div>
                        <img src="/img/drop-down.svg" />
                    </div>
                    <div className="card-faq">
                        <div className="card-faq-text">Berapa hari sebelumnya sabaiknya booking sewa mobil?</div>
                        <img src="/img/drop-down.svg" />
                    </div>
                    <div className="card-faq">
                        <div className="card-faq-text">Apakah Ada biaya antar-jemput?</div>
                        <img src="/img/drop-down.svg" />
                    </div>
                    <div className="card-faq">
                        <div className="card-faq-text">Bagaimana jika terjadi kecelakaan</div>
                        <img src="/img/drop-down.svg" />
                    </div>
                </div>
            </section>
        </>
    )
}