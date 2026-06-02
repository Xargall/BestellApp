function init() {
  renderContent();
  renderBasket();
  renderResponsiveBasket();
}

function renderContent() {
  document.getElementById("main_content").innerHTML = getMainTemplate();
  renderBurgerCard();
  renderPizzaCard();
  renderSaladCard();
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
  let addToBasketRef = document.getElementById(`add_btn${i}`);
  if (burger_meal) {
    burger_meal.quantity++;
    renderBasketContent();
    renderResponsiveBasketContent();
  } else {
    basket.push({
      "name": burgers[i].name,
      "price": burgers[i].price,
      "quantity": burgers[i].quantity,
    });
    renderBasketContent();
    renderResponsiveBasketContent();
  }
}

function addPizzaToCart(i) {
  const pizza_meal = basket.find((product) => product.name === pizzas[i].name);
  if (pizza_meal) {
    pizza_meal.quantity++;
    renderBasketContent();
    renderResponsiveBasketContent();
  } else {
    basket.push({
      "name": pizzas[i].name,
      "price": pizzas[i].price,
      "quantity": pizzas[i].quantity,
    });
    renderBasketContent();
    renderResponsiveBasketContent();
  }
}

function addSaladToCart(i) {
  const salad_meal = basket.find((product) => product.name === salads[i].name);
  if (salad_meal) {
    salad_meal.quantity++;
    renderBasketContent();
    renderResponsiveBasketContent();
  } else {
    basket.push({
      "name": salads[i].name,
      "price": salads[i].price,
      "quantity": salads[i].quantity,
    });
    renderBasketContent();
    renderResponsiveBasketContent();
  }
}

function renderBasket() {
  let basketRef = document.getElementById("main_basket");
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
  let checkoutTotal = document.getElementById("checkout_btn");
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
  checkoutTotal.innerHTML = checkoutButtonTemplate(formattedTotal);
}

function quantityNameRender(i) {
  const nameRef = document.getElementById(`quantity${i}`);
  nameRef.innerHTML = "";
  nameRef.innerHTML = quantityNameTemplate(i);
}

function quantityRender(i) {
  const quantRef = document.getElementById(`quantity_count${i}`);
  const deleteRef = document.getElementById(`delete${i}`);
  quantRef.innerHTML = "";
  quantRef.innerHTML = renderQuantityCount(i);
  if (basket[i].quantity > 1) {
    document.getElementById(`img2${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img${i}`).src = "./assets/icons/-.png";
    deleteRef.classList.remove("d_none");
  } else {
    document.getElementById(`img2${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img${i}`).src = "./assets/icons/delete.png";
    deleteRef.classList.add("d_none");
  }
}

function raiseQuantity(i) {
  const item = basket.find((product) => product.name === basket[i].name);
  const deleteRef = document.getElementById("delete");
  if (item) {
    item.quantity++;
    renderCardContent(i);
  }
}

function lowerQuantity(i) {
  const item = basket.find((product) => product.name === basket[i].name);

  if (item.quantity > 1) {
    item.quantity--;
    renderCardContent(i);

    renderBasketContent();
  } else if ((item.quantity = 1)) {
    basket.splice(i, 1);

    renderBasketContent();
  }
}

function deleteItem(i) {
  const item = basket.find((product) => product.name === basket[i].name);
  basket.splice(i, 1);
  renderBasketContent();
}

function sendConfirmation() {
  const confRef = document.getElementById("confirmation");
  const basketRef = document.getElementById("main_basket");
  const contentRef = document.getElementById("conf_content");
  confRef.showModal();
  contentRef.innerHTML = getConfirmationTemplate();
  basketRef.classList.add("d_none");
  setTimeout(`closeConfirmation()`, 3000);
}

function closeConfirmation() {
  const dialRef = document.getElementById("confirmation");
  const basketRef = document.getElementById("main_basket");
  basketRef.classList.remove("d_none");
  basket.splice(length);
  renderBasketContent();

  dialRef.close();
}

function bubbleProtection(event) {
  event.stopPropagation();
}

// function changeButton(i) {
//   const item = basket.find((product) => product.name === burgers[i].name);
//   let elem = document.getElementById(`add_btn${i}`);
//   let burger = basket[i].quantity;
//   getIndexFromBasket(burger)
//   if (item) {
//     elem.innerHTML = `Added ${burger}`;
//   }
// }

function getIndexFromBasket(burger) {
  return basket.indexOf(burger);
}

function renderResponsiveBasket() {
  let basketRef = document.getElementById("respo_basket");
  basketRef.classList.toggle("d_none");
  basketRef.innerHTML = getRespoBasketTemplate();
  renderResponsiveBasketContent();
}

function renderResponsiveBasketContent() {
  const respoBasketRef = document.getElementById("respo_basket_content");
  const respoErrRef = document.getElementById("empty_respo_basket");
  const respoCheckoutRef = document.getElementById("checkout_respo");
  respoBasketRef.innerHTML = "";
  respoErrRef.innerHTML = "";
  respoCheckoutRef.innerHTML = "";
  if (basket.length === 0) {
    respoErrRef.innerHTML = getErrorTemplate();
  } else {
    for (let i = 0; i < basket.length; i++) {
      respoBasketRef.innerHTML += respoBasketContentCard(i);
      respoCheckoutRef.innerHTML = getRespoCheckoutTemplate(i);
      renderRespoCardContent(i);
    }
  }
}

function renderRespoCardContent(i) {
  formattedCardPriceRespo(i);
  formattedSubTotalRespo(i);
  quantityRespoRender(i);
  quantityRespoNameRender(i);
}

function formattedCardPriceRespo(i) {
  const priceRespoRef = document.getElementById(`price_respo${i}`);
  priceRespoRef.innerHTML = "";
  const cardPrice = basket[i].price * basket[i].quantity;
  const formattedPrice = cardPrice.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  priceRespoRef.innerHTML += formattedPrice;
}

function formattedSubTotalRespo(i) {
  let subTotalRef = document.getElementById("subtotal_respo");
  let totalPriceRef = document.getElementById("total_respo");
  let checkoutTotal = document.getElementById("checkout_btn_respo");
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
  checkoutTotal.innerHTML = checkoutButtonTemplate(formattedTotal);
}

function quantityRespoNameRender(i) {
  const nameRef = document.getElementById(`quantity_respo${i}`);
  nameRef.innerHTML = "";
  nameRef.innerHTML = quantityNameTemplate(i);
}

function quantityRespoRender(i) {
  const quantRef = document.getElementById(`quantity_count_respo${i}`);
  const deleteRef = document.getElementById(`delete_respo${i}`);
  quantRef.innerHTML = "";
  quantRef.innerHTML = renderRespoQuantityCount(i);
  if (basket[i].quantity > 1) {
    document.getElementById(`img2_respo${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img_respo${i}`).src = "./assets/icons/-.png";
    deleteRef.classList.remove("d_none");
  } else {
    document.getElementById(`img2_respo${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img_respo${i}`).src = "./assets/icons/delete.png";
    deleteRef.classList.add("d_none");
  }
}

function raiseRespoQuantity(i) {
  const item = basket.find((product) => product.name === basket[i].name);
  const deleteRef = document.getElementById("delete_respo");
  if (item) {
    item.quantity++;
    renderRespoCardContent(i);
  }
}

function lowerRespoQuantity(i) {
  const item = basket.find((product) => product.name === basket[i].name);

  if (item.quantity > 1) {
    item.quantity--;
    renderRespoCardContent(i);

    renderResponsiveBasketContent();
  } else if ((item.quantity = 1)) {
    basket.splice(i, 1);

    renderResponsiveBasketContent();
  }
}

function deleteRespoItem(i) {
  const item = basket.find((product) => product.name === basket[i].name);
  basket.splice(i, 1);
  renderResponsiveBasketContent();
}

function closeBasket() {
  const closeRef = document.getElementById("respo_basket");
  closeRef.classList.toggle("d_none");
}
