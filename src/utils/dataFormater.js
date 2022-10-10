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

export const formatIntensityData = (data) => {
  let formattedData = [];

  for (let perf of data.data) {
    formattedData.push({ subject: data.kind[perf.kind], value: perf.value });
  }
  return formattedData;
};
