import Head from 'next/head'
import Content from '../../components/dashboard/Content';
import HomeDashboard from '../../components/dashboard/home/HomeDashboard';
import NavbarHeader from '../../components/dashboard/NavbarHeader';
import Sidebar from "../../components/dashboard/Sidebar";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarHeader />
            <Sidebar dashboard />
            <Content titleMenu="Dashboard" subMenu="Dashboard">
                <HomeDashboard/>
            </Content>
        </>
    )
}