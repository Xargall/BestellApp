function init() {
  renderContent();
}

function renderContent() {
  document.getElementById("main_content").innerHTML = getMainTemplate();
  renderBurgerCard();
  renderPizzaCard();
  renderSaladCard();
  renderBasket();
}

function renderBurgerCard() {
  const burgerRef = document.getElementById("burger");
  for (let i = 0; i < burgers.length; i++) {
    burgerRef.innerHTML += renderBurgerTemplate(i);
    formattedBurgerPrice(i);
  }
}

function renderPizzaCard() {
  const pizzaRef = document.getElementById("pizza");
  for (let i = 0; i < pizzas.length; i++) {
    pizzaRef.innerHTML += renderPizzaTemplate(i);
    formattedPizzaPrice(i);
  }
}

function renderSaladCard() {
  const saladRef = document.getElementById("salad");
  for (let i = 0; i < salads.length; i++) {
    saladRef.innerHTML += renderSaladTemplate(i);
    formattedSaladPrice(i);
  }
}

function renderBasket() {
  const basketRef = document.getElementById("basket");
  basketRef.innerHTML = getBasketTemplate();
}

function formattedBurgerPrice(i) {
  const priceRef = document.getElementById(`burger_price${i}`);
  const price = burgers[i].price;
  const formattedPrice = price.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  priceRef.innerHTML = formattedPrice;
}

function formattedPizzaPrice(i) {
  const priceRef = document.getElementById(`pizza_price${i}`);
  const price = pizzas[i].price;
  const formattedPrice = price.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  priceRef.innerHTML = formattedPrice;
}

function formattedSaladPrice(i) {
  const priceRef = document.getElementById(`salad_price${i}`);
  const price = salads[i].price;
  const formattedPrice = price.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  priceRef.innerHTML = formattedPrice;
}
