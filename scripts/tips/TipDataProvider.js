const tipsCollection = [
    {
        head: "Salinity",
        tip1: "Keep it salty",
        tip2: "Just dump in some salt"
    },
    {
        head: "Temperature",
        tip1: "Very hot",
        tip2: "Basically boiling",
    },
    {
        head: "Feeding",
        tip1: "Feed till they're fat",
        tip2: "Feed more"
    }
]

export const useTip = () => {
    return tipsCollection.slice()
}