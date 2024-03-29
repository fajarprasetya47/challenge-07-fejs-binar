import Head from 'next/head'
import ListcarAdmin from '../../../components/dashboard/cars/ListcarAdmin';
import Content from '../../../components/dashboard/Content';
import NavbarHeader from '../../../components/dashboard/NavbarHeader';
import Sidebar from "../../../components/dashboard/Sidebar";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import { setCars } from '../../../static/redux/actions/carsAction';

export default function Dashboard() {
    const dispatch = useDispatch();
    const [car, setCar] = useState();
    const {cars} = useSelector((state)=>state.carsReducer)

    useEffect(()=>{
        if(cars){
            setCar(cars)
        }else{
            dispatch(setCars());
            setCar(cars)
        }
    })
    return (
        <>
            <Head>
                <title>Dashboard - Cars</title>
                <meta name="description" content="Create by Fajar Prasetya" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarHeader/>
            <Sidebar car />
            <Content titleMenu="Cars" subMenu="List Cars">
                <ListcarAdmin cars={car}/>
            </Content>
        </>
    )
}