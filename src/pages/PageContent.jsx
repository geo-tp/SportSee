import { useEffect, useState } from "react";
import { fetchUser } from "../api/fetchUser";
import { UserHeader } from "../containers/UserHeader";
import { UserAnalytics } from "../containers/UserAnalytics";

export const PageContent = () => {
  const userId = 12;

  const [user, setUser] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [average, setAverage] = useState(null);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchInfos = async () => {
      setUser(await fetchUser(userId));
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
      {user && <UserAnalytics nutrimentsInfos={user.keyData} userId={userId} />}
    </div>
  );
};
