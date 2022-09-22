import { HEADERS } from "./headers";
import { getUserRoute } from "./routes";

export const fetchUser = async (id) => {
  const url = getUserRoute(id);
  return fetch(url, HEADERS)
    .then((response) => {
      if (response.ok) {
        console.log("RES IS OK");
        return response.json();
      }

      throw response;
    })
    .then((json) => {
      console.log("IN RETURN DATA");
      return json.data;
    })
    .catch((err) => {
      return err;
    });
};
