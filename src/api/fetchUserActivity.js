import { formatActivityData } from "../format/formatActivityData";
import { defaultActivities } from "../mock/defaultActivities";
import { HEADERS } from "./headers";
import { getUserActivityRoute } from "./routes";

export const fetchUserActivity = async (id) => {
  const url = getUserActivityRoute(id);
  return fetch(url, HEADERS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return defaultActivities;
      }

      throw response;
    })
    .then((json) => {
      return formatActivityData(json.data);
    })
    .catch((err) => {
      return err;
    });
};
