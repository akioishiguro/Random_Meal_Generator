const axios = require('axios');

module.exports={
    async  main (req,res) {
        const apiResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        /*.then(function(response){
        console.log(response.data.login); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        });*/
    
        console.log(apiResponse.data);
    
        const meal = apiResponse.data.meals[0]
     
        const ingredients = [];
    
        for(let i=1; i<=20; i++) {       
            if(meal[`strIngredient${i}`]) {
                ingredients.push(`${meal[`strMeasure${i}`]} - ${meal[`strIngredient${i}`]}`)
                //console.log(ingredients)
            } else {
                // Stop if no more ingredients
                break;
            }
        }
    
        const items = [
            {name: meal.strMeal, 
                strCategory: meal.strCategory, 
                strArea: meal.strArea, 
                image: meal.strMealThumb,
                video: meal.strYoutube, 
                souce: meal.strSource,
                ingredients: ingredients,
                instructions: meal.strInstructions
            }
        ]
    
        console.log(items) 

        return res.json(items)
    }
}