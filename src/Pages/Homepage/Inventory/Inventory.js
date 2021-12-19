import React from 'react';
import Data from '../Data/Data';

const Inventory = () => {
    const handleAddData = () => {
        fetch('http://localhost:5000/addReviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Data)
        })
    }
    return (
        <div>
            <button onClick={handleAddData}>add data</button>
        </div>
    );
};

export default Inventory;