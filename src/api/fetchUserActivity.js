import { formatActivityData } from "../format/formatActivityData";
import { defaultActivities } from "../mock/defaultActivities";
import { isMocked } from "../utils/config";
import { HEADERS } from "./headers";
import { getUserActivityRoute } from "./routes";

export const fetchUserActivity = async (id) => {
  if (isMocked) {
    return formatActivityData(defaultActivities.data);
  }

  const url = getUserActivityRoute(id);
  return fetch(url, { headers: HEADERS })
    .then((response) => {
      if (response.ok) {
        return response.json();
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
