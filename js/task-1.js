const items = document.querySelectorAll("#categories > .item");

const count = items.length;
console.log(`Number of categories: ${count}`);

items.forEach((item) => {
const someEl = item.querySelectorAll("ul > li");
const categoryHeading = item.querySelector("h2");
console.log(`Category: ${categoryHeading.innerText}`);
console.log(`Elements: ${someEl.length}`);
});