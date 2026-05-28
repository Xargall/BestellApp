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
  let basketRef = document.getElementById("basket");
  basketRef.innerHTML = getBasketTemplate();
  renderBasketContent();
}

function renderBasketContent() {
  const basketContentRef = document.getElementById("basket_content");
  const basketErrRef = document.getElementById("empty_basket");
  const basketCheckoutRef = document.getElementById("checkout");
  basketContentRef.innerHTML = "";
  basketErrRef.innerHTML = "";
  basketCheckoutRef.innerHTML = "";
  if (basket.length === 0) {
    basketErrRef.innerHTML = getErrorTemplate();
  } else {
    for (let i = 0; i < basket.length; i++) {
      basketContentRef.innerHTML += basketContentCard(i);
      basketCheckoutRef.innerHTML = getCheckoutTemplate(i);
      renderCardContent(i);
    }
  }
}

function renderCardContent(i) {
  formattedCardPrice(i);
  formattedSubTotal(i);
  quantityRender(i);
  quantityNameRender(i);
}

function formattedCardPrice(i) {
  const priceRef = document.getElementById(`price${i}`);
  priceRef.innerHTML = "";
  const cardPrice = basket[i].price * basket[i].quantity;
  const formattedPrice = cardPrice.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  priceRef.innerHTML += formattedPrice;
}

function formattedSubTotal(i) {
  let subTotalRef = document.getElementById("subtotal");
  let totalPriceRef = document.getElementById("total");
  let total = 0;
  let subTotal = 0;
  for (i = 0; i < basket.length; i++)
    subTotal += basket[i].price * basket[i].quantity;
  let formattedSubTotal = subTotal.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  subTotalRef.innerHTML = formattedSubTotal;
  total += subTotal + 4.99;
  let formattedTotal = total.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  totalPriceRef.innerHTML = formattedTotal;
}

function quantityNameRender(i) {
  const nameRef = document.getElementById(`quantity${i}`);
  nameRef.innerHTML = "";
  nameRef.innerHTML = quantityNameTemplate(i);
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

function addBurgerToCart(i) {
  const burger_meal = basket.find(
    (product) => product.name === burgers[i].name,
  );
  if (burger_meal) {
    burger_meal.quantity++;
    renderBasketContent();
  } else {
    basket.push({
      "name": burgers[i].name,
      "price": burgers[i].price,
      "quantity": burgers[i].quantity,
    });
    renderBasketContent();
    console.log(basket);
  }
}

function addPizzaToCart(i) {
  const pizza_meal = basket.find((product) => product.name === pizzas[i].name);
  if (pizza_meal) {
    pizza_meal.quantity++;
    renderBasketContent();
  } else {
    basket.push({
      "name": pizzas[i].name,
      "price": pizzas[i].price,
      "quantity": pizzas[i].quantity,
    });
    renderBasketContent();
  }
}

function addSaladToCart(i) {
  const salad_meal = basket.find((product) => product.name === salads[i].name);
  if (salad_meal) {
    salad_meal.quantity++;
    renderBasketContent();
  } else {
    basket.push({
      "name": salads[i].name,
      "price": salads[i].price,
      "quantity": salads[i].quantity,
    });
    renderBasketContent();
    console.log(basket);
  }
}

function quantityRender(i) {
  const quantRef = document.getElementById(`quantity_count${i}`);
  quantRef.innerHTML = "";
  quantRef.innerHTML = renderQuantityCount(i);
  if (basket[i].quantity > 1) {
    document.getElementById(`img2${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img${i}`).src = "./assets/icons/-.png";
  } else {
    document.getElementById(`img2${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img${i}`).src = "./assets/icons/delete.png";
  }
}

function raiseQuantity(i) {
  const item = basket.find((product) => product.name === basket[i].name);
  if (item) {
    item.quantity++;
    quantityRender(i);
    formattedCardPrice(i);
    formattedSubTotal(i);
    quantityNameRender(i);
  }
}

function lowerQuantity(i) {
  const item = basket.find((product) => product.name === basket[i].name);

  if (item.quantity > 1) {
    item.quantity--;
    quantityRender(i);
    formattedCardPrice(i);
    formattedSubTotal(i);
    quantityNameRender(i);

    renderBasketContent();
  } else if ((item.quantity = 1)) {
    basket.splice(i, 1);

    renderBasketContent();
  }
}
