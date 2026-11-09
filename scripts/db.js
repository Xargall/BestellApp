let meals = [];
const basket = [];

const API_BASE_URL = "http://127.0.0.1:8000/api";

async function loadMeals() {
  const response = await fetch(`${API_BASE_URL}/meals/`);
  const data = await response.json();

  data.forEach((meal) => {
    meal.price = parseFloat(meal.price);
  });

  meals = data;
}

function getMealsByCategory(category) {
  return meals.filter((meal) => meal.category === category);
}

function getMealById(id) {
  return meals.find((meal) => meal.id === id);
}