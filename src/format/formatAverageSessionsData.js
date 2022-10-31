/**
 * Format user sessions data to recharts needed struct
 * @param {object} data - api unformatted data
 * @returns {object} - formatted data
 */
export const formatAverageSessionsData = (data) => {
  let days = ["L", "M", "M", "J", "V", "S", "D"];
  let formattedData = [];

  for (let session of data) {
    formattedData.push({
      day: days[parseInt(session.day) - 1],
      sessionLength: session.sessionLength,
    });
  }

  return formattedData;
};
