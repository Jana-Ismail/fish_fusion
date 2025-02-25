const { boatInventory } = require("./fishingBoat.js")


const mongerInventory = (maxPrice) => {
    const dailyCatch = boatInventory()
    const fishPurchasedByMonger = []
    const chefsFish = []
    // monger buys exactly 10 of each inexpensive fish
    // fish that are 7.50 or less each are inexpensive
    // monger will only buy fish that have 10 or more available to buy
    for (const fish of dailyCatch) {
        if (fish.price <= 7.5 && fish.amount >= 10) {
            fish.amount = 10
            fishPurchasedByMonger.push(fish)
        }
    }

    for (const fish of fishPurchasedByMonger) {
        if (fish.price <= maxPrice) {
            fish.amount /= 2
            chefsFish.push(fish)
        }
    }
    
    return chefsFish
}

module.exports = {mongerInventory}