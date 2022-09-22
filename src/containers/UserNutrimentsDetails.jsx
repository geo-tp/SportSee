import { NutrimentCount } from "../components/NutrimentCount";
import Carbs from "../assets/carbs.svg";
import Protein from "../assets/protein.svg";
import Fat from "../assets/fat.svg";
import Calories from "../assets/calories.svg";

export const UserNutrimentsDetails = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) => {
  return (
    <div className="user-calories-details">
      <NutrimentCount
        name="Calories"
        value={calorieCount}
        unit="kCal"
        icon={Calories}
        alt="Calories icone"
      />

      <NutrimentCount
        name="Protéines"
        value={proteinCount}
        unit="g"
        icon={Protein}
        alt="Protéines icone"
      />

      <NutrimentCount
        name="Glucides"
        value={carbohydrateCount}
        unit="g"
        icon={Carbs}
        alt="Glucides icone"
      />

      <NutrimentCount
        name="Calories"
        value={lipidCount}
        unit="g"
        icon={Fat}
        alt="Lipides icone"
      />
    </div>
  );
};
