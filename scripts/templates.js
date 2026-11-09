function getMainTemplate() {
    return /*html*/ `
        <div class="menu">
          <div class="menu_head">
            <img
              src="./assets/icons/Chanese 1.png"
              alt="burger"
              class="menu_icon" />
            <p class="menu_text">Burger</p>
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

function renderMealTemplate(meal) {
    return /*html*/ `
        <div class="meals">
            <img src="./assets/imgs/${meal.category}/${meal.image_filename}" alt="">
            <div class="meal_info">
                <article class="meal_name">
                    <h5>${meal.name}</h5>
                    <p>${meal.description}</p>
                </article>
                <article class="side_info">
                    <p id="price_${meal.id}"></p>
                    <button onclick="addToCart(${meal.id})" id="add_btn_${meal.id}" class="add_btn">Add to basket</button>
                </article>

            </div>
        </div>
    `;
}

function getBasketTemplate(suffix = "") {
    if (suffix === "_respo") {
        return /*html*/ `
        <div class="respo_basket_style">
            <div class="respo_head">
                <h3>Your Basket</h3>
                <button onclick="closeBasket()" class="close_btn_respo"><img src="./assets/icons/close (1).png" alt=""></button>
            </div>
            <div id="respo_basket_content" class="respo_content_style"></div>
            <div id="empty_respo_basket" class="err"></div>
            <div id="checkout_respo" class="respo_checkout_style"></div>
        </div>
    `;
    }
    return /*html*/ `
        <div class="basket_style">
            <h3>Your Basket</h3>
            <div id="basket_content" class="content_style"></div>
            <div id="empty_basket" class="err"></div>
            <div id="checkout" class="checkout_style"></div>
        </div>
    `;
}

function getCheckoutTemplate(suffix = "") {
    return /*html*/ `
        <div class="subtotal_price"><p>Subtotal price</p><p id="subtotal${suffix}"></p></div>
        <div class="subtotal_price line-decoration"><p>Delivery Fee</p><p>4,99€</p></div>
        <div class="subtotal_price"><h6>Total</h6><h6 id="total${suffix}"></h6></div>
        <div id="checkout_btn${suffix}"></div>
    `;
}

function getErrorTemplate() {
    return /*html*/ `
        <p>Nothing here yet. <br> Go ahead and choose something delicious!</p>
        <img src="./assets/icons/shopping_cart.png" alt="">
    `;
}

function basketContentCard(i, suffix = "") {
    const cardClass = suffix === "_respo" ? "meal_card_responsive" : "meal_card";
    return /*html*/ `
    <div class="${cardClass}" id="meal_card${suffix}${i}">
        <div class="meal_card_head">
            <p id="quantity${suffix}${i}"></p>
            <button onclick="deleteItem(${i}, '${suffix}')" class="raise_btn" id="delete${suffix}${i}"><img src="./assets/icons/delete.png" alt=""></button>
        </div>
        <div class="price_section">
            <div class="quantity" id="quantity_count${suffix}${i}"></div>
            <p id="price${suffix}${i}"></p>
        </div>
    </div>
    `;
}

function checkoutButtonTemplate(formattedTotal) {
    return /*html*/ `
        <button onclick="sendConfirmation()">Buy now (${formattedTotal})</button>
    `;
}

function renderQuantityCount(i, suffix = "") {
    return /*html*/ `
        <button onclick="lowerQuantity(${i}, '${suffix}')" class="raise_btn"><img src="" alt="" id="img${suffix}${i}"></button><p>${basket[i].quantity}</p><button onclick="raiseQuantity(${i}, '${suffix}')" class="raise_btn" ><img src="" alt="" id="img2${suffix}${i}"></button>
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
            <div class="close"><button onclick="closeConfirmation()" class="close_btn"><img src="./assets/icons/close (1).png" alt=""></button></div>
            <div class="close_text">
                <img src="./assets/icons/ChatGPT Image Nov 24, 2025, 11_51_33 AM 1.png" alt="">
                <h6>Order Confirmed!</h6>
                <p>Your food is on the Way!</p>
            </div>

        </div>
    `;
}