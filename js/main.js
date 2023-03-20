// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// let drinkName = document.querySelector("h2")
// let drinkImage = document.querySelector("img")
// let drinkInstruction = document.querySelector("h3")



// document.querySelector("button").addEventListener("click", function(event) {
//     event.preventDefault()
//     const searchTerm = document.querySelector("input").value
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {    
        
//         const cocktail = data.drinks[data.drinks.length - 1]
//         drinkName.textContent = cocktail.strDrink
//         drinkImage.src = cocktail.strDrinkThumb
//         drinkInstruction.textContent = cocktail.strInstructions      
//     })
//     .catch(err => {
//         console.log(`Error ${err}`)
//     })

// })
function validatePIN (pin) {
    if(typeof pin === 'number' && (pin.toString().length === 4 || pin.toString().length === 6))  {
      return true
    } else if(pin === 1234) {
        return false
    } else {
      return false
    }
  }
console.log(validatePIN(2002))

