//#1

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (const first of board) {
  for (const second of first) {
    console.log(second);
  }
}

//#2
//2.1
const doggo = {
  name: "Bobby",
  breed: "German sheperd",
  favoriteFoods: ["lasagna", "pasta spahgetti", "cachota", "fratelli"],
};

//2.3
const {
  favoriteFoods: [, second],
} = doggo;

console.log(second);

//2.4

for (const foods of doggo.favoriteFoods) {
  console.log("2.4", foods);
}

//#3

const recipes = {
  ingredients: {
    butter: "not too much",
    sugar: "not at all",
    flour: "just a little",
  },
};

recipes.ingredients.ginger = "a lot of it";

recipes.ingredients["brownSugar"] = recipes.ingredients["sugar"];
delete recipes.ingredients.sugar;

console.log(recipes);

for (const ingredientValue of Object.values(recipes.ingredients)) {
  console.log("Ingredient values:", ingredientValue);
}
