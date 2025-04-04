import recipes from "./recipes.mjs"

function random(num) {
  return Math.floor(Math.random() * num)
}

function getRandomListEntry(list) {
  const listLength = list.length
  const randomNum = random(listLength)
  return list[randomNum]
}

function tagsTemplate(tags) {
  // loop through the tags list and transform the strings to HTML
  const html = tags.map((tag) => `<div>${tag}</div>`).join("")
  return html
}

function ratingTemplate(rating) {
  // begin building an html string using the ratings HTML written earlier as a model.
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`
  // our ratings are always out of 5, so create a for loop from 1 to 5
  for (let i = 1; i <= 5; i++) {
    // check to see if the current index of the loop is less than our rating
    if (i < rating) {
      // if so then output a filled star
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`
    } else {
      // else output an empty star
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
  }
  // after the loop, add the closing tag to our string
  html += `</span>`
  // return the html string
  return html
}

function recipeTemplate(recipe) {
  return `<section class="recipe">
    <img
      src=${recipe.image}
      alt=${recipe.name}
    />
    <div class="info">
      <div class="tags">
        ${tagsTemplate(recipe.tags)}
      </div>
      <h2>${recipe.name}</h2>
      ${ratingTemplate(recipe.rating)}
      <p class="description">
        ${recipe.description}
      </p>
    </div>
  </section>`
}

function renderRecipes(recipeList) {
  // get the element we will output the recipes into
  const recipesElement = document.querySelector(".recipes")
  // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
  const recipesHtml = recipeList
    .map((recipe) => recipeTemplate(recipe))
    .join("")
  // Set the HTML strings as the innerHTML of our output element.
  recipesElement.innerHTML = recipesHtml
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe])
}

function filter(query) {
  const filtered = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
      recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))
  )
  // sort by name
  const sorted = filtered.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  )
  return sorted
}

function searchHandler(e) {
  e.preventDefault()
  // get the search input
  // convert the value in the input to lowercase
  const query = searchInput.value.toLowerCase()
  // use the filter function to filter our recipes
  const filteredList = filter(query)
  // render the filtered list
  renderRecipes(filteredList)
}

const searchInput = document.querySelector(".search input")
const searchButton = document.querySelector(".search img")

searchButton.addEventListener("click", searchHandler)

// to test
// console.log(getRandomListEntry(recipes))
// const recipe = getRandomListEntry(recipes)
// console.log(recipeTemplate(recipe))

init()
