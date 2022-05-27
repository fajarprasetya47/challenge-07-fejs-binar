import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import HeaderHome from '../../../components/home/header';
import Hero from '../../../components/home/hero';
import FormCariMobil from '../../../components/home/Form/FormCariMobil';
import DetailMobil from '../../../components/home/Cars/DetailMobil';
import FooterHome from '../../../components/home/footer';
import Head from 'next/head';

export default function DetailCars() {
    const router = useRouter();
    const { idCar } = router.query;
    const {cars} = useSelector((state)=>state.carsReducer);

    return (
        <>
            <Head>
                <title>Home - Detail Mobil</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='content'>
                <HeaderHome />
                <Hero />
                <div id="minus55"></div>
                <FormCariMobil disabled role="edit"/>
                <DetailMobil id={idCar} car={cars} />
                <FooterHome />
            </div>
        </>
    )
}