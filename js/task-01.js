
const liItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemEl.length}`);

liItemEl.forEach(item => {
  const liNameEl = item.querySelector('h2').textContent;
  const liListEl = item.querySelectorAll('li');

  console.log(`Category: ${liNameEl}`);
  console.log(`Elements: ${liListEl.length}`);
});


// const ulItemEl = document.querySelector("#categories").children
// console.log(`Number of categories: ${ulItemEl.length}`);

// const liItemEl = document.querySelectorAll(".item");
// liItemEl.forEach(item => {
//   const liNameEl = item.firstElementChild.textContent;
//   const liListEl = item.lastElementChild.children;

//   console.log(`Category: ${liNameEl}`);
//   console.log(`Elements: ${liListEl.length}`);
// });

