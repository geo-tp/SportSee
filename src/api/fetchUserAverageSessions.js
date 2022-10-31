import { formatAverageSessionsData } from "../format/formatAverageSessionsData";
import { defaultAverageSessions } from "../mock/defaultAverageSessions";
import { isMocked } from "../utils/config";
import { HEADERS } from "./headers";
import { getUserAverageSessionsRoute } from "./routes";

/**
 * Api call to get user sessions data
 * @param {number} id - user id
 * @returns {Promise<Data>} - json user data
 */
export const fetchUserAverageSessions = async (id) => {
  if (isMocked) {
    return formatAverageSessionsData(defaultAverageSessions.data.sessions);
  }

  const url = getUserAverageSessionsRoute(id);
  return fetch(url, { headers: HEADERS })
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
