import { useLoaderData } from "react-router-dom";

function useFlightInfo() {
  const data = useLoaderData();
  return data.departures;
}

export default useFlightInfo;


export const flightInfoLoader = async () => {

  const url =
    "https://aerodatabox.p.rapidapi.com/flights/airports/iata/LHE?offsetMinutes=-120&durationMinutes=720&withLeg=true&direction=Departure&withCancelled=true&withCodeshared=true&withCargo=true&withPrivate=true&withLocation=false";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4ee9d3f8damshe29f1a21104ee9ep1da573jsn8fb238adcfb6",
      "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  return response.json();
};