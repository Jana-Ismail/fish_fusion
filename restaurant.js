const { mongerInventory } = require("./fishMonger.js")

// fishMenu function with .map() array method
const fishMenu = (maxPrice) => {
    const chefsFish = mongerInventory(maxPrice)

    let html = "<h1>Menu</h1>"

        html += chefsFish.map(fish => {
            return `
<article class="menu">
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
</article>
            `
        }).join("")


    return html
}

// fishMenu function with for...of loop
// const fishMenu = (maxPrice) => {
//     const chefsFish = mongerInventory(maxPrice)

//     let html = "<h1>Menu</h1>"

//     for (const fish of chefsFish) {
//         html += `
// <article class="menu">
//     <h2>${fish.species}</h2>
//     <section class="menu__item">${fish.species} Soup</section>
//     <section class="menu__item">${fish.species} Sandwich</section>
//     <section class="menu__item">Grilled ${fish.species}</section>
// </article>
//         `
//     }

//     return html
// }

module.exports = { fishMenu }