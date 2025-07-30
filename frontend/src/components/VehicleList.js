import React from 'react';

function VehicleList({ vehicles }) {
  return (
    <div>
      <h2>Vehicle List</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            Vehicle ID: {vehicle.id}, Battery: {vehicle.batteryLevel}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleList;