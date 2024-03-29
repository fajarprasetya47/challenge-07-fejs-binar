import FormCariMobil from "../../../components/home/Form/FormCariMobil"
import FooterHome from "../../../components/home/footer"
import HeaderHome from "../../../components/home/header"
import Hero from "../../../components/home/hero"
import Head from 'next/head'

export default function searchCar() {
    return(
        <>
            <Head>
                <title>Home - Cari Mobil</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="content">
                <HeaderHome/>
                <Hero head={true}/>
                <div id="minus55"></div>
                <FormCariMobil/>
                <FooterHome/>
            </div>
        </>
    )
}