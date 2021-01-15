export const location = (location) => {
    return `
            <section class="location-card">
                <img class="location-img" src = "${location.locationImage}">
                <p class="location-name">${location.name}</p>
            </section>
    `
}