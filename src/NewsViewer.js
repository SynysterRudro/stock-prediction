import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const NewsViewer = () => {
    const [newsData, setNewsData] = useState([]);
    const [displayedNews, setDisplayedNews] = useState(10);
    const [showLabeling, setShowLabeling] = useState({});
    const [showFullNews, setShowFullNews] = useState({});

    useEffect(() => {
        fetch('/News.csv')
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        setNewsData(result.data);
                    },
                });
            });
    }, []);

    const handleLoadMore = () => {
        setDisplayedNews(displayedNews + 10);
    };

    const handleShowLabeling = (index) => {
        setShowLabeling((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleShowFullNews = (index) => {
        setShowFullNews((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Function to convert label numbers to descriptive text
    const getLabelText = (label) => {
        switch (label) {
            case '0':
                return 'Negative';
            case '1':
                return 'Positive';
            case '2':
                return 'Neutral';
            default:
                return 'Unknown';
        }
    };

    return (
        <div style={{ backgroundColor: '#121212', color: '#e0e0e0', minHeight: '100vh', padding: '20px' }}>
            {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>News Feed</h1> */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {newsData.slice(0, displayedNews).map((item, index) => (
                    <div key={index} style={{
                        backgroundColor: '#1e1e1e',
                        borderRadius: '8px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        position: 'relative'
                    }}>
                        <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>{item.Title}</h2>
                        <p>
                            {showFullNews[index] ? item.News : `${item.News.slice(0, 100)}...`}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                            <button
                                onClick={() => handleShowFullNews(index)}
                                style={{
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '0.9em',
                                }}
                            >
                                {showFullNews[index] ? 'See Less' : 'See More'}
                            </button>
                            <button
                                onClick={() => handleShowLabeling(index)}
                                style={{
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '0.9em',
                                }}
                            >
                                {showLabeling[index] ? 'Hide Labeling' : 'Predict'}
                            </button>
                        </div>
                        {showLabeling[index] && (
                            <p style={{
                                marginTop: '15px',
                                padding: '10px',
                                backgroundColor: '#333',
                                borderRadius: '5px',
                            }}>
                                <strong>Labeling:</strong> {getLabelText(item.Labeling)}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {displayedNews < newsData.length && (
                <button
                    onClick={handleLoadMore}
                    style={{
                        display: 'block',
                        margin: '20px auto',
                        backgroundColor: '#444',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Load More News
                </button>
            )}
        </div>
    );
};

export default NewsViewer;
