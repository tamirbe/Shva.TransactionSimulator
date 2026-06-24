import { useState } from 'react';

import './ApprovedTransactionsList.css';

import arrow from '../../assets/icons/arrow.svg';

function ApprovedTransactionsList({
    transactions,
}) {
    const [currentIndex, setCurrentIndex] =
        useState(0);

    const visibleTransactions =
        transactions.slice(
            currentIndex,
            currentIndex + 3,
        );

    function handleNext() {
        if (
            currentIndex + 3 <
            transactions.length
        ) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function handlePrev() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <section className="approved-section">
            <h2>Approved Transactions</h2>

            <div className="transactions-wrapper">
                <button
                    className="arrow-button"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <img src={arrow} alt="Arrow" />
                </button>

                <div className="transactions-grid">
                    {visibleTransactions.map(
                        (transaction) => (
                            <div
                                key={transaction.id}
                                className="transaction-card"
                            >
                                <h3>
                                    Time:
                                    {' '}
                                    {new Date(
                                        transaction.localTime,
                                    ).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </h3>

                                <p>
                                    Time Zone:
                                    {' '}
                                    {transaction.region}
                                </p>
                            </div>
                        ),
                    )}
                </div>

                <button
                    className="arrow-button right"
                    onClick={handleNext}
                    disabled={
                        currentIndex + 3 >= transactions.length
                    }
                >
                    <img src={arrow} alt="Arrow" />
                </button>
            </div>
        </section>
    );
}

export default ApprovedTransactionsList;