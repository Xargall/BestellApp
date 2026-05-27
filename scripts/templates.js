function getMainTemplate() {
  return /*html*/ `
        <div class="menu">
          <div class="menu_head">
            <img
              src="./assets/icons/Chanese 1.png"
              alt="burger"
              class="menu_icon" />
            <p class="menu_text">Burger & Sandwiches</p>
          </div>
          <div id="burger"></div>
        </div>
        <div class="menu">
          <div class="menu_head">
            <img
              src="./assets/icons/Pizza 1.png"
              alt="burger"
              class="menu_icon" />
            <p class="menu_text">Pizza (30cm)</p>
          </div>
          <div id="pizza"></div>
        </div>
        <div class="menu">
          <div class="menu_head">
            <img
              src="./assets/icons/Salad 1.png"
              alt="burger"
              class="menu_icon" />
            <p class="menu_text">Salad</p>
          </div>
          <div id="salad"></div>
        </div>
    `;
}

function renderBurgerTemplate(i) {
  return /*html*/ `
        <div class="meals">
            <img src="../assets/imgs/burger/${burgerImgs[i]}" alt="">
            <div>
                <article>
                    <p>${burgers[i].name}</p>
                    <p id="burger_price${i}"></p>
                </article>
                <article>
                    <p>${burgers[i].description}</p>
                </article>
                <button></button>
            </div>
        </div>
    `;
}

function renderPizzaTemplate(i) {
  return /*html*/ `
        <section class="meals">
            <img src="" alt="">
            <div>
                <article>
                    <p>${pizzas[i].name}</p>
                    <p id="pizza_price${i}"></p>
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
                    <p id="salad_price${i}"></p>
                </article>
                <article>
                    <p>${pizzas[i].description}</p>
                </article>
                <button></button>
            </div>
        </section>
    `;
}

function getBasketTemplate() {
  return /*html*/ `
        <div class="basket_style">
            <h3>Your Basket</h3>
            <div></div>
            <div></div>
            <button></button>
        </div>
    `;
}


