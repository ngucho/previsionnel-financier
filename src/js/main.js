import { computeProfit } from './modules/finance.js';

const app = document.getElementById('app');

function render() {
    const revenue = 1000000;
    const cost = 800000;
    const profit = computeProfit(revenue, cost);

    app.innerHTML = `
        <h1>Prévisionnel Financier - The Voice</h1>
        <p>Chiffre d'affaires: ${revenue} €</p>
        <p>Coûts: ${cost} €</p>
        <p>Bénéfice prévisionnel: ${profit} €</p>
    `;
}

render();
