const tags = ["Cold", "Sweet", "Evening" ]
const prices = [1.5, 2, 4, 6]

console.log(tags)
console.log(prices)

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}