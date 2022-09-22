const BASE_URL = "http://localhost:3000/";

export const getUserRoute = (id) => {
  return `${BASE_URL}user/${id}`;
};

export const getUserActivityRoute = (id) => {
  return `${BASE_URL}user/${id}/activity`;
};

export const getUserAverageRoute = (id) => {
  return `${BASE_URL}user/${id}/average-sessions`;
};

export const getUserPerformanceRoute = (id) => {
  return `${BASE_URL}user/${id}/performance`;
};
