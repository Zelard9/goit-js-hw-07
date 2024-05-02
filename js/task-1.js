const categories = document.querySelectorAll(`#categories li.item`);
const categoriesCount = categories.length;
console.log(`Number of categories: ${categoriesCount}`);

categories.forEach((category) => {
  const categoryName = category.querySelector(`h2`).textContent;
  const countItems = category.querySelectorAll(`ul li`).length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${countItems}`);
});
