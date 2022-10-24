import { formatAverageSessionsData } from "../format/formatAverageSessionsData";
import { defaultAverageSessions } from "../mock/defaultAverageSessions";
import { isMocked } from "../utils/config";
import { HEADERS } from "./headers";
import { getUserAverageSessionsRoute } from "./routes";

export const fetchUserAverageSessions = async (id) => {
  if (isMocked) {
    return formatAverageSessionsData(defaultAverageSessions.data.sessions);
  }

  const url = getUserAverageSessionsRoute(id);
  return fetch(url, HEADERS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw response;
    })
    .then((json) => {
      return formatAverageSessionsData(json.data.sessions);
    })
    .catch((err) => {
      return err;
    });
};
