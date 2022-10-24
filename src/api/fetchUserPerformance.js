import { formatIntensityData } from "../format/formatIntensityData";
import { defaultPerformances } from "../mock/defaultPerformances";
import { isMocked } from "../utils/config";
import { HEADERS } from "./headers";
import { getUserPerformanceRoute } from "./routes";

export const fetchUserPerformance = async (id) => {
  if (isMocked) {
    return formatIntensityData(defaultPerformances.data);
  }

  const url = getUserPerformanceRoute(id);
  return fetch(url, HEADERS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return defaultPerformances;
      }
      throw response;
    })
    .then((json) => {
      return formatIntensityData(json.data);
    })
    .catch((err) => {
      return err;
    });
};
