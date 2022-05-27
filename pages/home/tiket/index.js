import Head from 'next/head'
import HeaderHome from "../../../components/home/header"
import FooterHome from "../../../components/home/footer"
import NavTiket from "../../../components/home/Tiket/navTiket"
import Invoice from '../../../components/home/Tiket/invoice'

export default function Tiket() {
    return(
        <>
            <Head>
                <title>Home - Tiket</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='content'>
                <HeaderHome/>
                <NavTiket/>
                <Invoice/>
                <FooterHome/>
            </div>
        </>
    )
}