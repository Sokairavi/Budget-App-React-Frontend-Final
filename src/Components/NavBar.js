import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="navbar">
        <h1>Welcome to Budgeting App</h1>
            <button className="transaction-button">
                <Link to="/transactions">TRANSACTIONS</Link>
            </button>
            <button className="new-button">
                <Link to="/transactions/new">NEW</Link>
            </button>
        </nav>
    );
}