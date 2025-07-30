from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel

app = FastAPI()

class Vehicle(BaseModel):
    id: int
    latitude: float
    longitude: float
    batteryLevel: int

vehicles = [
    Vehicle(id=1, latitude=37.7749, longitude=-122.4194, batteryLevel=80),
    Vehicle(id=2, latitude=34.0522, longitude=-118.2437, batteryLevel=20),
    Vehicle(id=3, latitude=40.7128, longitude=-74.0060, batteryLevel=50),
]

@app.get('/api/vehicles', response_model=List[Vehicle])
async def get_vehicles():
    return vehicles

@app.get('/api/vehicles/{vehicle_id}', response_model=Vehicle)
async def get_vehicle(vehicle_id: int):
    vehicle = next((v for v in vehicles if v.id == vehicle_id), None)
    if vehicle is None:
        raise HTTPException(status_code=404, detail='Vehicle not found')
    return vehicle

#Simulated AI Agent - Simple threshold based alert
@app.get('/api/alerts')
async def get_alerts():
  low_battery_vehicles = [v.id for v in vehicles if v.batteryLevel < 30]
  if low_battery_vehicles:
    return {"message": f"Alert: Low battery on vehicles: {low_battery_vehicles}"}
  else:
    return {"message": "No alerts"}
