import vehicles from '../fake-data/vehicles.json';

/**
 * Simulates fetching vehicles from an API.
 * Currently returns local JSON but is structured to easily swap 
 * for a real fetch() or axios.get() call later.
 * 
 * @returns {Promise<Array>} Array of vehicle objects
 */
export const getVehicles = async () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(vehicles);
    }, 400); 
  });
};
