// Format activities data to be usable with recharts
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
