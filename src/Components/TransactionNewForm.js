// import React from 'react'

import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });
  const navigate = useNavigate();

  
  const addTransaction = () => {
    axios
      .post(`${API_URL}/transactions`, transaction)
      .then((res) => {
        navigate(`/transactions`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction();
  };

  return (
    <div className="new">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <h2>Add An Item</h2>
          <br></br>
          <h3>Date</h3>
          <input
            id="date"
            value={transaction.date}
            type="text"
            placeholder="Date"
            onChange={handleTextChange}
          />
          <br></br>
          <h3>Name</h3>
          <input
            id="item_name"
            value={transaction.item_name}
            type="text"
            placeholder="Name"
            onChange={handleTextChange}
          />
          <br></br>
          <h3>Amount</h3>
          <input
            id="amount"
            value={transaction.amount}
            type="number"
            placeholder="Amount"
            onChange={handleNumberChange}
          />
          <br></br>
          <h3>From</h3>
          <input
            id="from"
            value={transaction.from}
            type="text"
            placeholder="From"
            onChange={handleTextChange}
          />

          <br></br>
          <br></br>
          <button type="submit" className="form" value="submit">
            CREATE NEW ITEM
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default TransactionNewForm;