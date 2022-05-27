import { Grid } from 'gridjs-react';

export default function TableOrder() {
    return (
        <>
            <div class="mb-4" id="table-list-order">
                <div class="mb-3 fw-bolder">
                    <img src="/img/Rectangle.svg" className="me-2" />
                    <b>List Order</b>
                </div>
                <div class="mb-4">
                    <Grid
                        columns={['No', 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status']}
                        data={[
                            [1, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [2, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [3, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [4, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [5, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [6, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [7, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [8, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [9, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
                            [10, 'User Email', 'Car', 'Start Rent', 'Finish Rent', 'Price', 'Status'],
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