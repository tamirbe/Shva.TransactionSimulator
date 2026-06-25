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
    language,
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

    const isHebrew = language === 'he';

    return (
        <div className="transaction-form-wrapper">
            <div className="search-box">
                <label>{isHebrew ? 'אזור' : 'Region'}</label>

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
                <h3>{isHebrew ? 'הזן שעה' : 'Enter time'}</h3>

                <div className="time-display">
                    {isHebrew ? (
                        <>
                            <div className="time-input-group">
                                <input
                                    type="number"
                                    min="0"
                                    max="59"
                                    value={minute}
                                    onChange={handleMinuteChange}
                                    className="time-input inactive"
                                />
                                <span className="time-input-label">{isHebrew ? 'דקה' : 'Minute'}</span>
                            </div>

                            <div className="dots">
                                :
                            </div>

                            <div className="time-input-group">
                                <input
                                    type="number"
                                    min="0"
                                    max="23"
                                    value={hour}
                                    onChange={handleHourChange}
                                    className="time-input"
                                />
                                <span className="time-input-label">{isHebrew ? 'שעה' : 'Hour'}</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="time-input-group">
                                <input
                                    type="number"
                                    min="0"
                                    max="23"
                                    value={hour}
                                    onChange={handleHourChange}
                                    className="time-input"
                                />
                                <span className="time-input-label">{isHebrew ? 'שעה' : 'Hour'}</span>
                            </div>

                            <div className="dots">
                                :
                            </div>

                            <div className="time-input-group">
                                <input
                                    type="number"
                                    min="0"
                                    max="59"
                                    value={minute}
                                    onChange={handleMinuteChange}
                                    className="time-input inactive"
                                />
                                <span className="time-input-label">{isHebrew ? 'דקה' : 'Minute'}</span>
                            </div>
                        </>
                    )}
                </div>

                <div className="form-footer">
                    <button className="cancel-btn">
                        {isHebrew ? 'ביטול' : 'Cancel'}
                    </button>

                    <button
                        className="simulate-btn"
                        onClick={onSimulate}
                        disabled={loading}
                    >
                        {loading
                            ? (isHebrew ? 'טוען...' : 'Loading...')
                            : (isHebrew ? 'אישור' : 'Ok')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TransactionForm;