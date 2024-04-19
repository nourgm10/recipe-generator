function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  // build the API url
  let ingredientsInput = document.querySelector("#ingredients");
  let apiKey = "2dbe7af4434o3f6bf61f8t7c0caf3496";
  let prompt = `generate a recipe using most or all ingredients from ${ingredientsInput.value}. Please style the recipe with simple HTML, as indicated in the context.`;
  let context =
    "You are a healthy food expert and love to create recipes that take less than 40 minutes to cook, are healthy and delicious. You love being challenged by creating surprising recipes inspired by cuisines from all over the world, with random ingredients. You always style the recipes in basic HTML, as follows and in this order: ALWAYS start with the recipe title in <h2>, then information about how many serves the recipes provide, how much time the recipe will take to make, and give a calorie and macro breakdown of the recipe per serving, then the ingredients section heading as <h3>, then the ingredients as a dotted list separated with <br />, then the instructions section heading as <h3>, then the instructions as a numbered list with each step separated by <br /> and finally 2 <br /> followed by a little pun at the end. You do not mention the prompt at the beginning of the response and jump right into to recipe information. You use the metric system. You like to slide in a couple of jokes.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">⏳ Generating a yummy recipe for you</div>`;

  // make a call to the API using axios
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
