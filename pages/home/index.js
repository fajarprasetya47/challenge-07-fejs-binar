import Head from 'next/head'
import ChartMobil from '../../components/home/chartMobil'
import CtaBanner from '../../components/home/ctabanner'
import Faq from '../../components/home/faq'
import FooterHome from '../../components/home/footer'
import HeaderHome from '../../components/home/header'
import Hero from '../../components/home/hero'
import Service from '../../components/home/service'
import Testimonial from '../../components/home/testimonial'
import Whyus from '../../components/home/whyus'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='content'>
                <HeaderHome />
                <Hero head={true} />
                <Service />
                <Whyus />
                <ChartMobil />
                <Testimonial />
                <CtaBanner />
                <Faq />
                <FooterHome />
            </div>
        </>
    )
}
