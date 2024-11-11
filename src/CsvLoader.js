import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const CsvLoader = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Load CSV from public folder
        fetch('/News.csv')
            .then((response) => response.text())
            .then((csvText) => {
                // Parse CSV with PapaParse
                Papa.parse(csvText, {
                    header: true, // Set to true if you have headers in the CSV
                    skipEmptyLines: true,
                    complete: (result) => {
                        setData(result.data); // Set the parsed data to state
                    },
                });
            });
    }, []);

    return (
        <div>
            <h1>CSV Data</h1>
            <table>
                <thead>
                    <tr>
                        {/* Dynamically render headers */}
                        {data.length > 0 &&
                            Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {/* Render rows */}
                    {data.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, i) => (
                                <td key={i}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CsvLoader;
