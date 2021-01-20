const fishCollection = [
    {
        type: "Beta Fish",
        length: "7",
        name: "George",
        location: "Galapagos Island",
        food: "Pretzels"
    },
    {
        type: "Guppy",
        length: "35",
        name: "Phil",
        location: "Missouri",
        food: "Crackers"
    },
    {
        type: "Goldfish",
        length: "15",
        name: "Goldie",
        location: "China",
        food: "Pizza"
    },
    {
        type: "Bluefish",
        length: "6",
        name: "Bill",
        location: "Ohio",
        food: "Chicken"
    },
    {
        type: "Sunfish",
        length: "22",
        name: "Sunny",
        location: "Miami",
        food: "noodles"
    },
    {
        type: "Pike",
        length: "18",
        name: "Phil",
        location: "West Virginia",
        food: "grits"
    }
]


export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (let fish of fishCollection) {
        if (fish.length % 3 === 0)
        holyFish.push(fish)
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
   const soldierFish = []
   for (let fish of fishCollection){
    if (fish.length % 5 === 0)
    soldierFish.push(fish)
   }
    
    return soldierFish
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish= []
    for (let fish of fishCollection){
        if (fish.length % 5 != 0 && fish.length % 3 != 0)
        regularFish.push(fish)
    }
    return regularFish
}

console.log(nonHolyFish(fishCollection))