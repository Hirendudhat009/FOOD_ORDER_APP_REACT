import { useState, useEffect } from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeal.module.css'
import MealIteam from './MealIteam/MealIteam';


// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const AvalilableMeal = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [httpError, setError] = useState(false)

    useEffect(() => {
        const featchMeal = async () => {
            const responce = await fetch('https://react-http-54965-default-rtdb.firebaseio.com/meals.json')

            if (!responce.ok) {
                throw new Error('Something is wrong')
            }

            const data = await responce.json()

            let reponseData = []
            for (const key in data) {
                reponseData.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(reponseData)
            setLoading(false)
        }
        featchMeal().catch((error) => {
            setLoading(false)
            setError(error.message)
        })
    }
        , [])

    if (isLoading) {
        return <section className={classes.mealLoading}>
            <h3>Loading...</h3>
        </section>
    }
    if (httpError) {
        return <section className={classes.mealLoading}>
            <h6>{httpError}</h6>
        </section>
    }


    const mealList = meals.map((meal) => (
        <MealIteam
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>

    </section>


}

export default AvalilableMeal;