import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            %nbsp; | %nbsp;
            <Link to="/order/new">New Order</Link>
        </nav>
    );
}