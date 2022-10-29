import { baseURL } from "../utils/config";

export const getUserRoute = (id) => {
  return `${baseURL}user/${id}`;
};

export const getUserActivityRoute = (id) => {
  return `${baseURL}user/${id}/activity`;
};

export const getUserAverageSessionsRoute = (id) => {
  return `${baseURL}user/${id}/average-sessions`;
};

export const getUserPerformanceRoute = (id) => {
  return `${baseURL}user/${id}/performance`;
};
