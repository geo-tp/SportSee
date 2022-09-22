import { HEADERS } from "./headers";
import { getUserPerformanceRoute } from "./routes";

export const fetchUserPerformance = async (id) => {
  const url = getUserPerformanceRoute(id);
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
