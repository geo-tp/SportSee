import { formatActivityData } from "../utils/dataFormater";
import { HEADERS } from "./headers";
import { getUserActivityRoute } from "./routes";

export const fetchUserActivity = async (id) => {
  const url = getUserActivityRoute(id);
  return fetch(url, HEADERS)
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
