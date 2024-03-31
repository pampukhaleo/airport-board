const AIRPORT_API_URL = `https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport`;

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Request failed with status: ${res.status}`);
}

export const fetchFlights = () => fetch(AIRPORT_API_URL).then(handleResponse);
