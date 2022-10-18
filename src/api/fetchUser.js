import { defaultUser } from "../mock/defaultUser";
import { HEADERS } from "./headers";
import { getUserRoute } from "./routes";

export const fetchUser = async (id) => {
  const url = getUserRoute(id);
  return fetch(url, HEADERS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return defaultUser;
      }

      throw response;
    })
    .then((json) => {
      return json.data;
    })
    .catch((err) => {
      return err;
    });
};
