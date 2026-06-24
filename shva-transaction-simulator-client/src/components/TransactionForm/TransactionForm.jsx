import './TransactionForm.css';

function TransactionForm({
    selectedRegion,
    setSelectedRegion,
    onSimulate,
    loading,
    hour,
    setHour,
    minute,
    setMinute,
}) {
    function handleHourChange(e) {
        let value = e.target.value;

        if (value > 23) value = 23;

        setHour(value);
    }

    function handleMinuteChange(e) {
        let value = e.target.value;

        if (value > 59) value = 59;

        setMinute(value);
    }

    return (
        <div className="transaction-form-wrapper">
            <div className="search-box">
                <label>Region</label>

                <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                >
                    <option value="Israel">Israel</option>
                    <option value="France">France</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                </select>
            </div>

            <div className="time-card">
                <h3>Enter time</h3>

                <div className="time-display">
                    <input
                        type="number"
                        min="0"
                        max="23"
                        value={hour}
                        onChange={handleHourChange}
                        className="time-input"
                    />

                    <div className="dots">
                        :
                    </div>

                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={minute}
                        onChange={handleMinuteChange}
                        className="time-input inactive"
                    />
                </div>

                <div className="time-labels">
                    <span>Hour</span>
                    <span>Minute</span>
                </div>

                <div className="form-footer">
                    <button className="cancel-btn">
                        Cancel
                    </button>

                    <button
                        className="simulate-btn"
                        onClick={onSimulate}
                        disabled={loading}
                    >
                        {loading
                            ? 'Loading...'
                            : 'Ok'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TransactionForm;