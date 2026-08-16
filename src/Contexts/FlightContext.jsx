// src/Contexts/FlightContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the Context
const FlightContext = createContext();

// 2. Create the Provider Component
export function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const url = "https://aerodatabox.p.rapidapi.com/flights/airports/iata/LHE?offsetMinutes=0&durationMinutes=720&withLeg=true&direction=Departure&withCancelled=true&withCodeshared=true&withCargo=true&withPrivate=true&withLocation=false";

        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": "82656c6840msh6a48def4eba9eedp1d0469jsn4b37f6d000e2",
            "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Failed to fetch flights");
        }

        const data = await response.json();
        setFlights(data.departures || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []); // The empty array ensures this fetch only happens ONCE.

  return (
    <FlightContext.Provider value={{ flights, loading, error }}>
      {children}
    </FlightContext.Provider>
  );
}

// 3. Create a custom hook so other components can easily read the data
export default function useFlightContext() {
  return useContext(FlightContext);
}