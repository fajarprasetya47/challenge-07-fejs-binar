export default function AddCarAdmin() {
    return (
        <>
            <div className="mb-2 d-flex">
                <div style={{ flexBasis: "30%" }}>
                    <h3>Add New Car</h3>
                </div>
            </div>

            <form enctype="multipart/form-data" className="form-add-car">
                <div className="card p-3 mb-5" id="formAddCar">
                    <div className="row mb-3 form-add-car-name">
                        <div className="col-2">
                            <label for="name" className="required-label">Nama</label>
                        </div>
                        <div className="col-4">
                            <input type="text" className="form-control" name="name" id="name" required />
                        </div>
                    </div>
                    <div className="row mb-3 form-add-car-price">
                        <div className="col-2">
                            <label for="price" className="required-label">Harga</label>
                        </div>
                        <div className="col-4">
                            <input type="text" className="form-control" name="price" id="price" required />
                        </div>
                    </div>
                    <div className="row mb-4 form-add-car-img">
                        <div className="col-2">
                            <label for="img" className="required-label">Foto</label>
                        </div>
                        <div className="col-4">
                            <input type="file" className="form-control" name="img" id="img" accept="image/*" required />
                            <small className="text-muted">File size max.2MB</small>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-2">
                            <label for="startRent">Start Rent</label>
                        </div>
                        <div className="col-4">
                            -
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-2">
                            <label for="finishRent">Finish Rent</label>
                        </div>
                        <div className="col-4">
                            -
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-2">
                            <label for="created">Created at</label>
                        </div>
                        <div className="col-4">
                            -
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-2">
                            <label for="updated">Updated at</label>
                        </div>
                        <div className="col-4">
                            -
                        </div>
                    </div>
                </div>

                <div className="position-relative">
                    <div className="bottom-1 start-0">
                        <a href="/dashboard/cars" className="btn btn-outlined-blue me-3">Cancel</a>
                        <button type="submit" className="btn btn-dark-blue">Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}