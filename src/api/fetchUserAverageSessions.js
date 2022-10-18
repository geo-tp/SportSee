import { formatAverageSessionsData } from "../format/formatAverageSessionsData";
import { defaultAverageSessions } from "../mock/defaultAverageSessions";
import { HEADERS } from "./headers";
import { getUserAverageSessionsRoute } from "./routes";

export const fetchUserAverageSessions = async (id) => {
  const url = getUserAverageSessionsRoute(id);
  return fetch(url, HEADERS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return defaultAverageSessions;
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
