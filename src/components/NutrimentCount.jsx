export const NutrimentCount = ({ name, icon, alt, value, unit }) => {
  return (
    <div className="nutriment-count">
      <div>
        <img src={icon} alt={alt} />
      </div>
      <div>
        <p className="nutriment-count__value">
          {value}
          {unit}
        </p>
        <p className="nutriment-count__name">{name}</p>
      </div>
    </div>
  );
};
