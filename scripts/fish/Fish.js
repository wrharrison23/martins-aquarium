/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="https://static.hollywoodreporter.com/sites/default/files/2014/12/dory_a_l.jpg" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.type}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
}