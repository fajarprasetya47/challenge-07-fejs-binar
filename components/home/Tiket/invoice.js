import PdfViewTiket from "./pdfViewTiket";

export default function Invoice() {
    return (
        <>
            <div id="invoice">
                <div className="text-center">
                    <img src="/img/fi_check-success.svg" alt="fi_check-success" />
                    <p className="fw-bold mt-3">Pembayaran Berhasil!</p>
                    <p className="text-muted fw-light">Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </div>
                <div className="card p-3">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="fw-bold">Invoice</p>
                            <p className="text-muted">no invoice</p>
                        </div>
                        <div>
                            <a href="/pdf/example.pdf" className="btn btn-outlined-blue" download>
                                <img src="/img/fi_download.svg" alt="fi_download" />
                                <span className="ms-1">Unduh</span>
                            </a>
                        </div>
                    </div>
                    <PdfViewTiket/>
                </div>
            </div>
        </>
    )
}