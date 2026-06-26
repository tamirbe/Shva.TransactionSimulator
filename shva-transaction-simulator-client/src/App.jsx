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
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';

    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) return storedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

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

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  const isHebrew = language === 'he';

  return (
    <div className={`app ${isHebrew ? 'rtl' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

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
              language={language}
            />
            <TransactionResult result={result} language={language} />
          </div>

          <div className="right-side">
            <Hero language={language} />
          </div>
        </section>

        <ApprovedTransactionsList
          transactions={approvedTransactions}
          language={language}
        />
      </main>
    </div>
  );
}

export default App;