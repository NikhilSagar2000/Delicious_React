import React,{useState,useEffect} from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './mealItem/MealItem';


const AvailableMeals = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://delicious-react-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        setisLoading(false)
        throw new Error('Something Went Wrong :(');
      }
      const data = await response.json();

      const mealsData = [];

      for (const key in data) {
        mealsData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setAllMeals(mealsData);
      setisLoading(false);
    }
    fetchMeals()
      .catch((error) => {
      setHttpError(error.message);
    });
  }, [])
  
  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  const meals = allMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
    return (
      <section className={styles.meals}>
        <Card>
          <ul>{meals}</ul>
        </Card>
      </section>
    );
}

export default AvailableMeals;