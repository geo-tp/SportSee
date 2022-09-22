import { UserHeader } from "../containers/UserHeader";

export const PageContent = () => {
  return (
    <div className="page-content">
      <UserHeader
        name="Thomas"
        performance={"Félication ! Vous avez explosé vos objectifs hier"}
      />
    </div>
  );
};
