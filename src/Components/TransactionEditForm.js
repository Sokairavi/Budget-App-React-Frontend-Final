import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();

  const navigate = useNavigate;

  const [transaction, setTransaction] = useState({
    item_name: "",
    date: "",
    amount: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((error) => console.error(error));
  }, [index]);

  const updateTransaction = () => {
    axios
      .put(`${API_URL}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction();
  };

  return (
    <div className="edit">
    <fieldset>
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        {/* <h2>Add a new item</h2> */}
        <h3>Date</h3>
        <input
          id="date"
          value={transaction.date}
          type="text"
          placeholder="Date"
          onChange={handleTextChange}
        />
        <h3>Name</h3>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          placeholder="Name"
          onChange={handleTextChange}
        />
        <h3>Amount</h3>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          placeholder="Amount"
          onChange={handleNumberChange}
        />
        <h3>From</h3>
        <input
          id="from"
          value={transaction.category}
          type="text"
          placeholder="From"
          onChange={handleTextChange}
          
        />
        <br />
        <br></br>
        {/* change the input closing tag to <input /> instead of <input></input> ------------ FIX */}
        <input type="submit"UPDATE ITEM/>
      </form>
      <br></br>
      <Link to={`/transactions/${index}`}>
        <button>BACK</button>
      </Link>
      </fieldset>
    </div>
  );
}

export default TransactionEditForm;