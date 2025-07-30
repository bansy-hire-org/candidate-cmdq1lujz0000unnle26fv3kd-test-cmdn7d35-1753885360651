import React, { useState, useEffect } from 'react';
import VehicleMap from './components/VehicleMap';
import VehicleList from './components/VehicleList';
import Login from './components/Login';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(user) {
      fetch('/api/vehicles')
        .then(res => res.json())
        .then(data => setVehicles(data));
    }
  }, [user]);

  return (
    <div>
      {user ? (
        <>
          <h1>Fleet Management Dashboard</h1>
          <VehicleMap vehicles={vehicles} />
          <VehicleList vehicles={vehicles} />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;