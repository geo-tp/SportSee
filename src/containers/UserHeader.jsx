export const UserHeader = ({ name, performance }) => {
  return (
    <div className="user-header">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>{performance}</p>
    </div>
  );
};
