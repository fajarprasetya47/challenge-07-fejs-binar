import Button from '../Button/Button'
import { useRouter } from 'next/router'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { setBtnPilihMobil } from '../../../static/redux/actions/buttonAction'

export default function ListMobil({ car }) {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const detail = useSelector((state)=>state.detailReducer);
    const btn = useSelector((state)=>state.buttonReducer);
    const {cars} = useSelector((state)=>state.carsReducer);  

    useEffect(()=>{
        dispatch(setBtnPilihMobil());
        if(!cars) router.push('/home/searchCar')
    },[dispatch]);

    return (
        <>
            <div className="container-sm">
                <div className="hasil-pencarian my-4">
                    {cars!==undefined ? cars?.map((data) => (
                        <div key={data.id} className="card">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="card-img px-4 mb-2">
                                    <img src={data.image} alt="car" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <p className="card-text" id="namaTipeMobil">{data?.name}/Manual</p>
                                <p className="card-text fw-bold" id="hargaMobil">Rp.{data.price?.toLocaleString('id-ID')}/hari</p>
                                <p className="card-text" id="detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p className="card-text" id="capacity">
                                    <img src='/img/fi_users.svg' alt="user" className='me-2' />
                                    {detail.capacity}
                                </p>
                                <p className="card-text" id="tipe">
                                    <img src='/img/fi_settings.svg' alt="setting" className='me-2' />
                                    {detail.tipeMobil}
                                </p>
                                <p className="card-text" id="tahun">
                                    <img src='/img/fi_calendar.svg' alt="calendar" className='me-2' />
                                    {detail.tahun}
                                </p>
                                <div className="d-flex">
                                    <Button className='btn btn-success w-100' onClick={() => router.push("/home/cars/"+data.id)} placeholder={btn.placeholder}/>
                                </div>
                            </div>
                        </div>
                    )) : <></> }
                </div>
            </div>
        </>
    )
}