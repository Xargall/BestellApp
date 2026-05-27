function renderBurgerTemplate(i) {
  return /*html*/ `
        <section class="meals">
            <img src="" alt="">
            <div>
                <article>
                    <p>${burgers[i].name}</p>
                    <p id="food_price${i}"></p>
                </article>
                <article>
                    <p>${burgers[i].description}</p>
                </article>
                <button></button>
            </div>
        </section>
    `;
}

function renderPizzaTemplate(i) {
  return /*html*/ `
        <section class="meals">
            <img src="" alt="">
            <div>
                <article>
                    <p>${pizzas[i].name}</p>
                    <p id="food_price${i}"></p>
                </article>
                <article>
                    <p>${pizzas[i].description}</p>
                </article>
                <button></button>
            </div>
        </section>
    `;
}

function renderSaladTemplate(i) {
  return /*html*/ `
        <section class="meals">
            <img src="" alt="">
            <div>
                <article>
                    <p>${salads[i].name}</p>
                    <p id="food_price${i}"></p>
                </article>
                <article>
                    <p>${pizzas[i].description}</p>
                </article>
                <button></button>
            </div>
        </section>
    `;
}
