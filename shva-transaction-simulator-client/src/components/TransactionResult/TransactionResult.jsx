import './TransactionResult.css';

function TransactionResult({ result, language }) {
    if (!result) return null;

    const isHebrew = language === 'he';

    return (
        <section className="transaction-result-card" aria-live="polite">
            <h3>
                {isHebrew ? 'סטטוס:' : 'Status:'}
                <span className="transaction-status">{result.status}</span>
            </h3>

            <p>
                {isHebrew ? 'שעה מקומית:' : 'Local Time:'}{' '}
                {new Date(result.localTime).toLocaleString()}
            </p>
        </section>
    );
}

export default TransactionResult;