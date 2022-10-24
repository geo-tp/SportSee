import { defaultUser } from "../mock/defaultUser";
import { isMocked } from "../utils/config";
import { HEADERS } from "./headers";
import { getUserRoute } from "./routes";

export const fetchUser = async (id) => {
  if (isMocked) {
    return defaultUser.data;
  }

  const url = getUserRoute(id);

  return fetch(url, HEADERS)
    .then((response) => {
      if (response.ok) {
        return response.json();
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
