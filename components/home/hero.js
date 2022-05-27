import {useRouter} from 'next/router';

export default function Hero({ head }) {
    const router = useRouter();
    return (
        <>
            <section id="hero">
                {head ?
                    <>
                        <div className="hero-text">
                            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p>
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                                untuk sewa mobil selama 24 jam.
                            </p>
                            <button className="btn btn-success" onClick={()=>router.push('/home/searchCar')} >Mulai Sewa Mobil</button>
                        </div>
                        <img src="/img/img_car.png" alt="hero-car" srcSet="" />

                    </>
                    : <div style={{ marginBottom: '100px' }}></div>
                }
            </section>
        </>
    )
}