import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <h2 style={{ color: 'darkgreen', fontFamily: 'sans-serif' }}>
          Welcome, {user.name}!
        </h2>
      ) : (
        <h2 style={{ color: 'deepred', fontFamily: 'sans-serif' }}>
          Please log in
        </h2>
      )}
    </div>
  );
};

export default Dashboard;