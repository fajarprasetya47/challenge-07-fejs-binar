import Head from "next/head";
import FormCariMobil from "../../../components/home/Form/FormCariMobil";
import FooterHome from "../../../components/home/footer";
import HeaderHome from "../../../components/home/header";
import Hero from "../../../components/home/hero";
import ListMobil from "../../../components/home/Cars/ListMobil";

export default function Cars() {
    return (
        <>
            <Head>
                <title>Home - List Mobil</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="content">
                <HeaderHome />
                <Hero />
                <div id="minus55"></div>
                <FormCariMobil disabled role="edit"/>
                <ListMobil/>
                <FooterHome />
            </div>
        </>
    )
}