import PropTypes from "prop-types";

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

NutrimentCount.propsType = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};
