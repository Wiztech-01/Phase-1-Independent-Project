document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
  
    const foodList = document.querySelector(".food-list");
    const recipeImage = document.querySelector(".recipe-image");
  
    // Function to fetch meal data
    function fetchMealData() {
        fetch("http://localhost:3000/meals")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    data.forEach((meal) => {
                        const mealItem = document.createElement("li");
                        mealItem.textContent = meal.strMeal;
  
                    // Add a click event listener to display recipe details
                    mealItem.addEventListener("click", () => {
                        // Display the clicked meal details in the recipe-image div
                        const mealDetails = `
                            <h2>${meal.strMeal}</h2>
                            <p>${meal.strInstructions}</p>
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width: 300px; height: 200px;">
                        `;
                        recipeImage.innerHTML = mealDetails;
                    });
  
                    // Append the meal item to the food list
                    foodList.appendChild(mealItem);
                });
            } else {
                console.error("No meals data found.");
            }
        })
        .catch((error) => {
            console.error("Error fetching meal data:", error);
        });
    }
  
    // Call the function to fetch and display meal data
    fetchMealData();
  });
  
  