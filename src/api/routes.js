import { baseURL } from "../utils/config";

// API route url to get user data
export const getUserRoute = (id) => {
  return `${baseURL}user/${id}`;
};

// API route url to get user recents activities
export const getUserActivityRoute = (id) => {
  return `${baseURL}user/${id}/activity`;
};

// API route url to get user average sessions
export const getUserAverageSessionsRoute = (id) => {
  return `${baseURL}user/${id}/average-sessions`;
};

// API route url to get user performance values
export const getUserPerformanceRoute = (id) => {
  return `${baseURL}user/${id}/performance`;
};
