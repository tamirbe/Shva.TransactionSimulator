import { useMemo, useState } from 'react';
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
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const regions = [
        'Israel',
        'France',
        'USA',
        'Japan',
        'Cyprus',
        'Italy',
    ];

    const filteredRegions = useMemo(() => {
        return regions.filter((region) =>
            region.toLowerCase().includes(search.toLowerCase()),
        );
    }, [search]);

    function selectRegion(region) {
        setSelectedRegion(region);
        setSearch(region);
        setIsOpen(false);
    }

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
                <label>
                    {isHebrew ? 'אזור' : 'Region'}
                </label>

                <input
                    type="text"
                    placeholder={isHebrew ? 'חיפוש...' : 'Search'}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    className="search-input"
                />

                <button
                    className="clear-btn"
                    onClick={() => {
                        setSearch('');
                        setIsOpen(false);
                    }}
                >
                    ✕
                </button>

                {isOpen && (
                    <div className="dropdown">
                        {filteredRegions.map((region) => (
                            <div
                                key={region}
                                className="dropdown-item"
                                onClick={() => selectRegion(region)}
                            >
                                {region}
                            </div>
                        ))}

                        {filteredRegions.length === 0 && (
                            <div className="dropdown-empty">
                                No results
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="time-card">
                <h3>
                    {isHebrew ? 'הזן שעה' : 'Enter time'}
                </h3>

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

                                <span className="time-input-label">
                                    דקה
                                </span>
                            </div>

                            <div className="dots">:</div>

                            <div className="time-input-group">
                                <input
                                    type="number"
                                    min="0"
                                    max="23"
                                    value={hour}
                                    onChange={handleHourChange}
                                    className="time-input"
                                />

                                <span className="time-input-label">
                                    שעה
                                </span>
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

                                <span className="time-input-label">
                                    Hour
                                </span>
                            </div>

                            <div className="dots">:</div>

                            <div className="time-input-group">
                                <input
                                    type="number"
                                    min="0"
                                    max="59"
                                    value={minute}
                                    onChange={handleMinuteChange}
                                    className="time-input inactive"
                                />

                                <span className="time-input-label">
                                    Minute
                                </span>
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