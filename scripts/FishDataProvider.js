const fishCollection = [
    {
        type: "Beta Fish",
        length: "2 inches",
        name: "George",
        location: "Galapagos Island",
        food: "Pretzels"
    },
    {
        type: "Guppy",
        length: "3 cm",
        name: "Phil",
        location: "Missouri",
        food: "Crackers"
    },
    {
        type: "Goldfish",
        length: "1 inch",
        name: "Goldie",
        location: "China",
        food: "Pizza"
    },
    {
        type: "Bluefish",
        length: "6 inches",
        name: "Bill",
        location: "Ohio",
        food: "Chicken"
    },
    {
        type: "Sunfish",
        length: "2 feet",
        name: "Sunny",
        location: "Miami",
        food: "noodles"
    },
    {
        type: "Pike",
        length: "1.5 feet",
        name: "Phil",
        location: "West Virginia",
        food: "grits"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}