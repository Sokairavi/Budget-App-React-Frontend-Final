import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <div className="Transaction">
      {/* <ul>{`/transactions/${index}`}</ul> */}
      <li>
        <h3>{transaction.date}</h3>

        <Link to={`/transactions/${index}`}>{transaction.item_name} </Link>

        <h3>${transaction.amount}</h3>

      </li>
      {/* <li>{transaction.date}<br></br>{transaction.item_name}<br></br>{transaction.amount}</li> */}
    </div>
  );
}

export default Transaction;