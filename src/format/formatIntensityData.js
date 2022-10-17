export const formatIntensityData = (data) => {
  let formattedData = [];
  const kinds = [
    { english: "intensity", french: "Intensité" },
    { english: "speed", french: "Vitesse" },
    { english: "cardio", french: "Cardio" },
    { english: "endurance", french: "Endurance" },
    { english: "energy", french: "Energie" },
    { english: "strength", french: "Force" },
  ];

  for (let kind of kinds) {
    for (let perf of data.data) {
      if (kind.english === data.kind[perf.kind])
        formattedData.push({ subject: kind.french, value: perf.value });
    }
  }

  return formattedData;
};
