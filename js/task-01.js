const ulCatEl = document.querySelector("#categories");
const liItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemEl.length}`);

liItemEl.forEach((item) => {
    const titleEl = item.querySelector("h2").textContent;
    const listEl = item.querySelectorAll("li").length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${listEl}`);
  });
