const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulListEl = document.querySelector("#ingredients");
const liListEl = ingredients.map((elements) => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = elements;
  return listEl
});
  ulListEl.append(...liListEl);


