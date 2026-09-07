import { useState } from "react";
import "./App.css";

function App() {
  const customer = "Sandra";
  const accountNumber = "123456789";

  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState([]);
  const [activeForm, setActiveForm] = useState(null); // "deposit" or "withdraw"
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleConfirm() {
    const value = parseFloat(amount);

    if (!value || value <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    if (activeForm === "withdraw" && value > balance) {
      setError("Insufficient balance.");
      return;
    }

    const newTransaction = {
      type: activeForm === "deposit" ? "Deposit" : "Withdrawal",
      amount: value,
      date: new Date().toLocaleString(),
      balanceAfter: activeForm === "deposit" ? balance + value : balance - value,
    };

    setBalance(newTransaction.balanceAfter);
    setTransactions([newTransaction, ...transactions]);
    setAmount("");
    setError("");
    setActiveForm(null);
  }

  function handleCancel() {
    setActiveForm(null);
    setAmount("");
    setError("");
  }

  return (
    <div className="bank-container">
      <h1>Bank Management System</h1>

      <div className="account-card">
        <div className="card-header">
          <h2>Welcome, {customer}</h2>
          <span className="status-badge">● Active</span>
        </div>

        <p>Account Number: <strong>{accountNumber}</strong></p>

        <div className="balance">
          <span>Current Balance</span>
          <span className="balance-amount">${balance.toFixed(2)}</span>
        </div>

        <div className="actions">
          <button className="deposit-btn" onClick={() => setActiveForm("deposit")}>
            ⬆ Deposit
          </button>
          <button className="withdraw-btn" onClick={() => setActiveForm("withdraw")}>
            ⬇ Withdraw
          </button>
        </div>

        {activeForm && (
          <div className="form-box">
            <p>Enter amount to {activeForm}:</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 100"
            />
            {error && <p className="error">{error}</p>}
            <div className="form-actions">
              <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
      </div>

      {transactions.length > 0 && (
        <div className="transaction-card">
          <h3>Transaction History</h3>
          <ul className="transaction-list">
            {transactions.map((t, index) => (
              <li key={index} className={`transaction-item ${t.type === "Deposit" ? "deposit" : "withdrawal"}`}>
                <span>{t.type === "Deposit" ? "⬆" : "⬇"} {t.type}</span>
                <span>${t.amount.toFixed(2)}</span>
                <span className="transaction-date">{t.date}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
