export const tip = (tip) => {
    return `
        <section class="tip-container">
            <h3 class="tip-subhead">${tip.head}</h3>
            <ul>
            <li class="tip-text">${tip.tip1}</li>
            <li class="tip-text">${tip.tip2}</li>
            </ul>
        </section>
    `
}