import { baseURL } from "../utils/config";

/**
 * Get User route
 * @param {number} id - user id
 * @returns {string} - routes url
 */
export const getUserRoute = (id) => {
  return `${baseURL}user/${id}`;
};

/**
 * Get User activities route
 * @param {number} id - user id
 * @returns {string} - routes url
 */
export const getUserActivityRoute = (id) => {
  return `${baseURL}user/${id}/activity`;
};

/**
 * Get User sessions route
 * @param {number} id - user id
 * @returns {string} - routes url
 */
export const getUserAverageSessionsRoute = (id) => {
  return `${baseURL}user/${id}/average-sessions`;
};

/**
 * Get User performance route
 * @param {number} id - user id
 * @returns {string} - routes url
 */
export const getUserPerformanceRoute = (id) => {
  return `${baseURL}user/${id}/performance`;
};
