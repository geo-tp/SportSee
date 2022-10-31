/**
 * Format user activities data to recharts needed struct
 * @param {object} data - api unformatted data
 * @returns {object} - formatted data
 */
export const formatActivityData = (data) => {
  let formattedData = [];
  for (let session of data.sessions) {
    let day = session.day.split("-").pop();

    formattedData.push({
      day: day,
      kg: session.kilogram,
      kCal: session.calories,
    });
  }

  return formattedData;
};
