import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);


  const handleDelete = () => {
    axios
      .delete(`${API_URL}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };

  return (
    <div className="list">
      <h3>{transaction.item_name}</h3>
      <h3>{transaction.date}</h3>
      <h3>${transaction.amount}</h3>
      <h3>{transaction.from}</h3>
      <h3>{transaction.category}</h3>
      <Link to={`/transactions`}>
        <button className="back-button">Back</button>
      </Link>
      <Link to={`/transactions/${index}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TransactionDetails;