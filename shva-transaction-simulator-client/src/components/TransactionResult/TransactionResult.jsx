function TransactionResult({ result }) {
    if (!result) return null;

    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Status: {result.status}</h3>

            <p>
                Local Time:{' '}
                {new Date(result.localTime).toLocaleString()}
            </p>
        </div>
    );
}

export default TransactionResult;