function App() {
 let customer = "sandra";
 let accountNumber = 123456789;
 let balance = 5000;

  return (
    <div>
      <h1>Bank Management System</h1>
      <p>Welcome, {customer} to our bank</p>
    <p> with the account of {accountNumber}</p>
    
    <p> your balance is: ${balance}</p>




    </div>
  )
}

export default App