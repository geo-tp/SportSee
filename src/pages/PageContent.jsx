import { useState } from "react";
import { fetchUser } from "../api/fetchUser";
import { fetchUserAverage } from "../api/fetchUserAverage";
import { fetchUserPerformance } from "../api/fetchUserPerformance";
import { fetchUserActivity } from "../api/fetchUserActivity";
import { UserHeader } from "../containers/UserHeader";

export const PageContent = () => {
  const [user, setUser] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [average, setAverage] = useState(null);
  const [activity, setActivity] = useState(null);

  const showUser = async () => {
    setUser(await fetchUser(12));
    setPerformance(await fetchUserPerformance(12));
    setAverage(await fetchUserAverage(12));
    setActivity(await fetchUserActivity(12));
    console.log(user, performance, average, activity);
  };
  return (
    <div className="page-content">
      <UserHeader
        name="Thomas"
        performance={"Félication ! Vous avez explosé vos objectifs hier"}
      />
      <button onClick={showUser}>SHOW</button>
    </div>
  );
};
