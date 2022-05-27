export default function ListcarAdmin({ cars }) {
    return (
        <>
            <div className="mb-2 d-flex flex-wrap">
                <div className="mb-1" style={{flexBasis: '30%'}}>
                    <h3>List Car</h3>
                </div>
                <div style={{textAlign: 'right', flexBasis: '70%'}}>
                    <a href="/dashboard/cars/addCar" className="btn btn-dark-blue">
                        <img src="/img/fi_plus.svg" className="me-2" alt="fi_plus" />
                        Add New Car
                    </a>
                </div>
            </div>

            <div className="d-flex mb-4 flex-wrap">
                <button className="btn btn-category-car-active me-3 my-2">All</button>
                <button className="btn btn-category-car me-3 my-2">Small</button>
                <button className="btn btn-category-car me-3 my-2">Medium</button>
                <button className="btn btn-category-car me-3 my-2">Large</button>
            </div>

            <div className="list-car-container">
                {cars ? cars?.map((data) => (
                    <div key={data?.id} className="card mb-3 me-3">
                        <div className="card-body">
                            <div className="card-img">
                                <img src={data?.image} alt="car" className="w-100 h-100" />
                            </div>
                            <p className="card-text" id="namaTipeMobil">{data?.name}/Category </p>
                            <p className="card-text fw-bold" id="hargaMobil">Rp.{data?.price?.toLocaleString('id-ID')}/hari</p>
                            <p className="card-text text-muted" id="startFinishRent">
                                <img src="/img/fi_key.svg" alt="fi_key" />
                                    {data['start_rent_at']} - {data['finish_rent_at']}
                            </p>
                            <p className="card-text text-muted" id="updated">
                                <img src="/img/fi_clock.svg" alt="fi_clock" />
                                    Updated at {data?.updatedAt}
                            </p>
                            <div className="card-list-button">
                                <a href="#" className="btn btn-outline-danger"><img src="/img/fi_trash.svg" alt="fi_trash" /> Delete</a>
                                <a href="#" className="btn btn-success"><img src="/img/fi_edit.svg" alt="fi_edit" /> Edit</a>
                            </div>
                        </div>
                    </div>
                )) : <></>}
            </div>

        </>
    )
}