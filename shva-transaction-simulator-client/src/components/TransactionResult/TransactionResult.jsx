import './TransactionResult.css';

function TransactionResult({ result }) {
    if (!result) return null;

    return (
        <section className="transaction-result-card" aria-live="polite">
            <h3>
                Status:
                <span className="transaction-status">{result.status}</span>
            </h3>

            <p>
                Local Time:{' '}
                {new Date(result.localTime).toLocaleString()}
            </p>
        </section>
    );
}

export default TransactionResult;