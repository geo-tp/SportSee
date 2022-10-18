import { fetchUser } from "../api/fetchUser";
import { UserHeader } from "../containers/UserHeader";
import { UserAnalytics } from "../containers/UserAnalytics";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const Dashboard = () => {
  const { userId } = useParams();

  const { data, error, isLoading } = useQuery(["user"], () =>
    fetchUser(userId)
  );

  if (error || !data) {
    return "Error during data fetch";
  } else if (isLoading) {
    return "Loading";
  }

  return (
    <div className="page-content">
      <UserHeader
        name={data.userInfos.firstName}
        performance={"Félication ! Vous avez explosé vos objectifs hier 👏"}
      />

      <UserAnalytics
        nutrimentsInfos={data.keyData}
        userId={userId}
        todayScore={data.todayScore ? data.todayScore : data.score}
      />
    </div>
  );
};
