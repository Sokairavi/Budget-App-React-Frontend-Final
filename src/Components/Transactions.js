import { useState, useEffect } from "react";


import Transaction from "./Transaction";


import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
 
  const [transactions, setTransactions] = useState([]);

 
  useEffect(() => {

    axios
      .get(`${API_URL}/transactions`)
    
      .then((res) => {
        console.log(res)
        setTransactions(res.data);
      })
    
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Transactions">
    <h1>Assets and Liabilities:</h1>
      <section>
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;