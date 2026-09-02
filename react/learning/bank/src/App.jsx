import "./App.css";

function App() {
  let customer = "Sandra";
  let accountNumber = "123456789";
  let balance = 5000;

  return (
    <div className="bank-container">

      <h1>Bank Management System</h1>

      <div className="account-card">
        <h2>Welcome, {customer}</h2>

        <p>Account Number: {accountNumber}</p>

        <p className="balance">
          Your Balance
          <span>${balance}</span>
        </p>
      </div>

    </div>
  );
}

export default App;