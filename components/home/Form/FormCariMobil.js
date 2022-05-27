import * as React from 'react';
import { useDispatch } from 'react-redux';
import {useRouter} from 'next/router'
import { setCars } from '../../../static/redux/actions/carsAction';

import InputTipeDriver from "./InputTipeDriver"
import PilihTanggal from "./PilihTanggal"
import InputWaktuJemput from "./InputWaktuJemput"
import InputPenumpang from "./InputPenumpang"

export default function FormCariMobil({ zIndex, onClick, position, disabled, role }) {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const [formInputData, setFormInputData] = React.useState({
        tipeDriver: '',
        tanggal: null,
        waktuJemput: '',
        penumpang: ''
    })

    const handleInputChange = (e) => {
        const inputFieldValue = e.target.value;
        const inputFieldName = e.target.name;
        const newInputValue = {
            ...formInputData,
            [inputFieldName]: inputFieldValue
        }
        setFormInputData(newInputValue);
    }
    const handleInputDateChange = (e) => {
        const newInputValue = {
            ...formInputData,
            tanggal: e?.toISOString()
        }
        setFormInputData(newInputValue);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(setCars());
        if (data) router.push('/home/cars');
    }

    return (
        <>
            <div className="container-sm" style={{ zIndex: `${zIndex}`, position: `${position}` }}>
                <div className="card cari-mobil shadow p-3">
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Tipe Driver</p>
                        <InputTipeDriver handleInputChange={handleInputChange} value={formInputData.tipeDriver} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Tanggal</p>
                        <PilihTanggal handleInputChange={handleInputDateChange} value={formInputData.tanggal} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Waktu Jemput/Ambil</p>
                        <InputWaktuJemput handleInputChange={handleInputChange} value={formInputData.waktuJemput} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Jumlah Penumpang (optional)</p>
                        <InputPenumpang handleInputChange={handleInputChange} value={formInputData.penumpang} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1">
                        {role==="edit"? (
                            <button type="submit" onClick={handleFormSubmit} className="btn btn-outlined-blue" disabled={disabled}>Edit</button>
                            ) : <></>}
                        {!role ? <button type="submit" onClick={handleFormSubmit} className="btn btn-success" disabled={disabled}>Cari Mobil</button> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}