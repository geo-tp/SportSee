import { useEffect, useState } from "react";
import { fetchUser } from "../api/fetchUser";
import { fetchUserAverage } from "../api/fetchUserAverage";
import { fetchUserPerformance } from "../api/fetchUserPerformance";
import { fetchUserActivity } from "../api/fetchUserActivity";
import { UserHeader } from "../containers/UserHeader";
import { UserAnalytics } from "../containers/UserAnalytics";

export const PageContent = () => {
  const [user, setUser] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [average, setAverage] = useState(null);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchInfos = async () => {
      setUser(await fetchUser(12));
      setPerformance(await fetchUserPerformance(12));
      setAverage(await fetchUserAverage(12));
      setActivity(await fetchUserActivity(12));
    };

    fetchInfos();
  }, []);

  return (
    <div className="page-content">
      {user && (
        <UserHeader
          name={user.userInfos.firstName}
          performance={"Félication ! Vous avez explosé vos objectifs hier 👏"}
        />
      )}
      {user && <UserAnalytics nutrimentsInfos={user.keyData} />}
    </div>
  );
};
