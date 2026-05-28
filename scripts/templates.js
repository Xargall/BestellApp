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
          <div id="burger" class="card_section"></div>
        </div>
        <div class="menu">
          <div class="menu_head">
            <img
              src="./assets/icons/Pizza 1.png"
              alt="burger"
              class="menu_icon" />
            <p class="menu_text">Pizza (30cm)</p>
          </div>
          <div id="pizza" class="card_section"></div>
        </div>
        <div class="menu">
          <div class="menu_head">
            <img
              src="./assets/icons/Salad 1.png"
              alt="burger"
              class="menu_icon" />
            <p class="menu_text">Salad</p>
          </div>
          <div id="salad" class="card_section"></div>
        </div>
    `;
}

function renderBurgerTemplate(i) {
  return /*html*/ `
        <div class="meals">
            <img src="../assets/imgs/burger/${burgerImgs[i]}" alt="">
            <div class="meal_info">
                <article class="meal_name">
                    <h5>${burgers[i].name}</h5>
                    <p>${burgers[i].description}</p>
                </article>
                <article class="side_info">
                    <p id="burger_price${i}"></p>
                    <button onclick="addBurgerToCart(${i})"></button>
                </article>
                
            </div>
        </div>
    `;
}

function renderPizzaTemplate(i) {
  return /*html*/ `
        <section class="meals">
            <img src="../assets/imgs/pizza/${pizzaImgs[i]}" alt="">
            <div class="meal_info">
                <article class="meal_name">
                    <h5>${pizzas[i].name}</h5>
                    <p>${pizzas[i].description}</p>
                </article>
                <article class="side_info">
                    <p id="pizza_price${i}"></p>
                    <button onclick="addPizzaToCart(${i})"></button>
                </article>
                
            </div>
        </section>
    `;
}

function renderSaladTemplate(i) {
  return /*html*/ `
        <section class="meals">
            <img src="../assets/imgs/salad/${saladImgs[i]}" alt="">
            <div class="meal_info">
                <article class="meal_name">
                    <h5>${salads[i].name}</h5>
                    <p>${salads[i].description}</p>
                </article>
                <article class="side_info">
                    <p id="salad_price${i}"></p>
                    <button onclick="addSaladToCart(${i})"></button>
                </article>
                
            </div>
        </section>
    `;
}

function getBasketTemplate() {
  return /*html*/ `
        <div class="basket_style">
            <h3>Your Basket</h3>
            <div id="basket_content" class="content_style"></div>
            <div id="empty_basket" class="err"></div>    
            <div id="checkout" class="checkout_style"></div>        
        </div>
    `;
}

function getCheckoutTemplate(i) {
  return /*html*/ `
        <div class="subtotal_price"><p>Subtotal price</p><p id="subtotal"></p></div>
        <div class="subtotal_price line-decoration"><p>Delivery Fee</p><p>4,99€</p></div>
        <div class="subtotal_price"><h6>Total</h6><h6 id="total"></h6></div>
        <button>Buy now (Total Price)</button>
    `;
}

function getErrorTemplate() {
  return /*html*/ `
        <p>Nothing here yet. <br> Go ahead and choose something delicious!</p>
        <img src="../assets/icons/shopping_cart.png" alt="">
    `;
}

function basketContentCard(i) {
  return /*html*/ `
    <div class="meal_card">
        <p>${basket[i].quantity} x ${basket[i].name}</p>
        <div class="price_section">
            <p><button><img src="" alt=""></button>${basket[i].quantity}<button><img src="" alt=""></button></p>
            <p id="price${i}"></p>
        </div>
    </div>
    `;
}
