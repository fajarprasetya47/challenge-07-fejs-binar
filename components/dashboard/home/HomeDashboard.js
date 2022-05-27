import TableCar from "./TableCar";
import TableOrder from "./TableOrder";

export default function HomeDashboard() {
    return (
        <>
            <div className="mb-3 d-flex">
                <h3>Dashboard</h3>
            </div>
            <TableOrder/>
            <TableCar/>
        </>
    )
}