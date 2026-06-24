import { useEffect, useState } from 'react';
import {
  getApprovedTransactions,
  simulateTransaction,
} from './services/transactionService';

function App() {
  const [region, setRegion] = useState('Israel');
  const [approvedTransactions, setApprovedTransactions] = useState([]);
  const [result, setResult] = useState(null);

  async function loadApprovedTransactions() {
    try {
      const data = await getApprovedTransactions();
      setApprovedTransactions(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadApprovedTransactions();
  }, []);

  async function handleSimulation() {
    try {
      const response = await simulateTransaction({
        region,
        submittedUtc: new Date().toISOString(),
      });

      setResult(response);

      loadApprovedTransactions();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Shva Transaction Simulator</h1>

      <br />

      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="Israel">Israel</option>
        <option value="France">France</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
      </select>

      <button
        onClick={handleSimulation}
        style={{
          marginLeft: '10px',
          padding: '8px 16px',
        }}
      >
        Simulate Transaction
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>Status: {result.status}</h3>

          <p>
            Local Time:
            {' '}
            {new Date(result.localTime).toLocaleString()}
          </p>
        </div>
      )}

      <hr style={{ margin: '30px 0' }} />

      <h2>Approved Transactions</h2>

      {approvedTransactions.map((transaction) => (
        <div
          key={transaction.id}
          style={{
            padding: '12px',
            marginBottom: '10px',
            background: 'white',
            borderRadius: '8px',
          }}
        >
          <p>Region: {transaction.region}</p>
          <p>Status: {transaction.status}</p>
          <p>
            Local Time:
            {' '}
            {new Date(transaction.localTime).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;