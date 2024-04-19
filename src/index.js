function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: `The recipe <br />will go here`,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
