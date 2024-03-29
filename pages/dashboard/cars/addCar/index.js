import Head from 'next/head'
import AddCarAdmin from '../../../../components/dashboard/cars/AddcarAdmin';
import Content from '../../../../components/dashboard/Content';
import NavbarHeader from '../../../../components/dashboard/NavbarHeader';
import Sidebar from "../../../../components/dashboard/Sidebar";


export default function AddCar(){
    return(
        <>
            <Head>
                <title>Dashboard - Cars</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarHeader/>
            <Sidebar car />
            <Content titleMenu="Cars" subMenu="List Cars" subSubMenu="Add Car">
                <AddCarAdmin/>
            </Content>
        </>
    )
}