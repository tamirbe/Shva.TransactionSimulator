const API_URL = 'https://localhost:8080/api/Transactions';

export async function simulateTransaction(data) {
    const response = await fetch(`${API_URL}/simulate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to simulate transaction');
    }

    return response.json();
}

export async function getApprovedTransactions() {
    const response = await fetch(`${API_URL}/approved`);

    if (!response.ok) {
        throw new Error('Failed to fetch approved transactions');
    }

    return response.json();
}