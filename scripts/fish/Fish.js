/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
        <section class="fish-card">
            <div><img  class="fish-image" src="https://static.hollywoodreporter.com/sites/default/files/2014/12/dory_a_l.jpg" /></div>
            <div class="fish-card_text">
            <div class="fish_text">${fish.name}</div>
            <div class="fish_text">${fish.type}</div>
            <div class="fish_text">${fish.length}</div>
            <div class="fish_text">${fish.location}</div>
            <div class="fish_text">${fish.food}</div>
            </div>
        </section>
    `
}