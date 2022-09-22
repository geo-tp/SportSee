import { HEADERS } from "./headers";
import { getUserAverageRoute } from "./routes";

export const fetchUserAverage = async (id) => {
  const url = getUserAverageRoute(id);
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
