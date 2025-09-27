import React, { useState } from 'react';

const AmountTracker = () => {
  const [amounts, setAmounts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Add or update amount
  const handleAddOrUpdate = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;

    if (editIndex !== null) {
      const updated = [...amounts];
      updated[editIndex] = value;
      setAmounts(updated);
      setEditIndex(null);
    } else {
      setAmounts([...amounts, value]);
    }
    setInputValue('');
  };

  // Delete amount
  const handleDelete = (index) => {
    setAmounts(amounts.filter((_, i) => i !== index));
  };

  // Edit amount
  const handleEdit = (index) => {
    setInputValue(amounts[index]);
    setEditIndex(index);
  };

  // Calculate total
  const total = amounts.reduce((sum, val) => sum + val, 0);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2> Amount Tracker</h2>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul>
        {amounts.map((amt, index) => (
          <li key={index}>
            ₹{amt.toFixed(2)}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
};

export default AmountTracker;