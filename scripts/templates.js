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
                    <button onclick="addBurgerToCart(${i})" id="add_btn${i}" class="add_btn">Add to basket</button>
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
                    <button onclick="addPizzaToCart(${i})" id="add_btn${i}" class="add_btn">Add to basket</button>
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
                    <button onclick="addSaladToCart(${i})" id="add_btn${i}" class="add_btn">Add to basket</button>
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
        <div id="checkout_btn"></div>
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
        <p id="quantity${i}"></p>
        <div class="price_section">
            <div class="quantity" id="quantity_count${i}"></div>
            <p id="price${i}"></p>
        </div>
    </div>
    `;
}

function checkoutButtonTemplate(formattedTotal) {
  return /*html*/ `
        <button onclick="sendConfirmation()">Buy now (${formattedTotal})</button>
    `;
}

function renderQuantityCount(i) {
  return /*html*/ `
        <button onclick="lowerQuantity(${i})" class="raise_btn"><img src="" alt="" id="img${i}"></button><p>${basket[i].quantity}</p><button onclick="raiseQuantity(${i})" class="raise_btn" ><img src="" alt="" id="img2${i}"></button>
    `;
}

function quantityNameTemplate(i) {
  return /*html*/ `
        ${basket[i].quantity} x ${basket[i].name}
    `;
}

function getConfirmationTemplate() {
  return /*html*/ `
        <div onclick="bubbleProtection(event)" class="conf_style">
            <div class="close"><button onclick="closeConfirmation()" class="close_btn"><img src="../assets/icons/close (1).png" alt=""></button></div>
            <div class="close_text">
                <img src="../assets/icons/ChatGPT Image Nov 24, 2025, 11_51_33 AM 1.png" alt="">
                <h6>Order Confirmed!</h6>
                <p>Your food is on the Way!</p>
            </div>

        </div>
    `;
}
