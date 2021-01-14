export const location = (location) => {
    return `
        <section class="location-card">
            <img class="location-img" src="${location.locationImage}"></img>
            <p class="location-name">${location.name}</p>
        </section>
    `
}