import { Grid } from 'gridjs-react';

export default function TableCar() {
    return (
        <>
            <div class="mb-4" id="table-list-car">
                <div class="mb-3 fw-bolder">
                    <img src="/img/Rectangle.svg" className="me-2" />
                    <b>List Car</b>
                </div>
                <div class="mb-4">
                    <Grid
                        columns={['No', 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at']}
                        data={[
                            [1, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [2, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [3, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [4, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [5, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [6, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [7, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [8, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [9, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                            [10, 'Name', 'Category', 'Price', 'Start Rent', 'Finish Rent', 'Created at', 'Updated at'],
                        ]}
                        sort={true}
                        style={{
                            table: {
                                borderRadius: '2px',
                                fontSize: '14px',

                            },
                            th: {
                                background: '#CFD4ED',
                                color: '#000',
                                fontWeight: '700',
                                padding: '12px 16px',
                                border: 'none'
                            },
                            td: {
                                padding: '12px 16px',
                                border: 'none',
                                fontWeight: '300',
                            }
                        }}
                    />
                </div>
            </div>
        </>
    )
}