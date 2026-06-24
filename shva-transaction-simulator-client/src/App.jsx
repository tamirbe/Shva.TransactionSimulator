import { useEffect, useState } from 'react';

import {
  getApprovedTransactions,
  simulateTransaction,
} from './services/transactionService';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionResult from './components/TransactionResult/TransactionResult';
import ApprovedTransactionsList from './components/ApprovedTransactionsList/ApprovedTransactionsList';

import './styles/global.css';

function App() {
  const [region, setRegion] = useState('Israel');
  const [approvedTransactions, setApprovedTransactions] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hour, setHour] = useState('20');
  const [minute, setMinute] = useState('00');

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
      setLoading(true);
      const customDate = new Date();

      customDate.setHours(Number(hour));
      customDate.setMinutes(Number(minute));
      const response = await simulateTransaction({
        region,
        submittedUtc: customDate.toISOString(),
      });

      setResult(response);

      await loadApprovedTransactions();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <Header />

      <main className="main-container">
        <section className="hero-section">
          <div className="left-side">
            <TransactionForm
              selectedRegion={region}
              setSelectedRegion={setRegion}
              onSimulate={handleSimulation}
              loading={loading}
              hour={hour}
              setHour={setHour}
              minute={minute}
              setMinute={setMinute}
            />
          </div>

          <div className="right-side">
            <Hero />

            <TransactionResult result={result} />
          </div>
        </section>

        <ApprovedTransactionsList
          transactions={approvedTransactions}
        />
      </main>
    </div>
  );
}

export default App;