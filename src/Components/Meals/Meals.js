import { Fragment } from "react";
import AvalilableMeal from "./AvailableMeals";
import MealsSummary from "./MealSummary";

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvalilableMeal />
    </Fragment>
}

export default Meals;