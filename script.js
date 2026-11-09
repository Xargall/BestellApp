async function init() {
  await loadMeals();
  renderContent();
  renderBasket();
  renderResponsiveBasket();
}

// Formatiert eine Zahl als Euro-Betrag nach deutschem Format (z.B. 16,90 €).
function formatCurrency(amount) {
  return amount.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
}

// Bildet Element-IDs für den jeweiligen Warenkorb-Container. suffix ist ""
// für den normalen (Desktop-)Warenkorb oder "_respo" für den mobilen.
// Diese beiden IDs folgen keinem einfachen "basis + suffix"-Muster
// (respo_basket_content statt basket_content_respo), deshalb eine Lookup-Map.
const BASKET_CONTAINER_IDS = {
  "": { content: "basket_content", empty: "empty_basket", checkout: "checkout" },
  "_respo": {
    content: "respo_basket_content",
    empty: "empty_respo_basket",
    checkout: "checkout_respo",
  },
};

function renderContent() {
  document.getElementById("main_content").innerHTML = getMainTemplate();
  renderMealSection("burger");
  renderMealSection("pizza");
  renderMealSection("salad");
}

// Rendert eine Menü-Sektion (Burger/Pizza/Salat). Ersetzt die früheren
// renderBurgerCard/renderPizzaCard/renderSaladCard, die bis auf den
// Kategorienamen identisch waren.
function renderMealSection(category) {
  const sectionRef = document.getElementById(category);
  const categoryMeals = getMealsByCategory(category);

  categoryMeals.forEach((meal) => {
    sectionRef.innerHTML += renderMealTemplate(meal);
    const priceRef = document.getElementById(`price_${meal.id}`);
    priceRef.innerHTML = formatCurrency(meal.price);
  });
}

// Aktualisiert den "Add to basket"-Button zum passenden Gericht.
// quantity > 0 -> zeigt die aktuelle Menge, quantity === 0 -> Reset auf Ursprungstext.
function updateAddButton(name, quantity) {
  const meal = meals.find((m) => m.name === name);
  if (!meal) return;
  const buttonRef = document.getElementById(`add_btn_${meal.id}`);
  if (!buttonRef) return;
  buttonRef.innerHTML = quantity > 0 ? `${quantity} added` : "Add to basket";
}

// Fügt ein Gericht zum Warenkorb hinzu (oder erhöht die Menge, falls schon
// vorhanden). Ersetzt die früheren addBurgerToCart/addPizzaToCart/
// addSaladToCart, die bis auf das Quell-Array identisch waren.
function addToCart(mealId) {
  const meal = getMealById(mealId);
  const existingItem = basket.find((product) => product.name === meal.name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    basket.push({
      "name": meal.name,
      "price": meal.price,
      "quantity": 1,
    });
  }

  const quantityInBasket = existingItem ? existingItem.quantity : 1;
  updateAddButton(meal.name, quantityInBasket);

  renderBasketContent("");
  renderBasketContent("_respo");
}

function renderBasket() {
  const basketRef = document.getElementById("main_basket");
  basketRef.innerHTML = getBasketTemplate("");
  renderBasketContent("");
}

function renderResponsiveBasket() {
  const basketRef = document.getElementById("respo_basket");
  basketRef.classList.toggle("d_none");
  basketRef.innerHTML = getBasketTemplate("_respo");
  renderBasketContent("_respo");
}

// Rendert den kompletten Warenkorb-Inhalt - normal (suffix "") oder
// responsive (suffix "_respo"). Ersetzt die früheren renderBasketContent/
// renderResponsiveBasketContent.
function renderBasketContent(suffix) {
  const ids = BASKET_CONTAINER_IDS[suffix];
  const contentRef = document.getElementById(ids.content);
  const errRef = document.getElementById(ids.empty);
  const checkoutRef = document.getElementById(ids.checkout);
  contentRef.innerHTML = "";
  errRef.innerHTML = "";
  checkoutRef.innerHTML = "";

  if (basket.length === 0) {
    errRef.innerHTML = getErrorTemplate();
    if (suffix === "_respo") renderCartBadge();
  } else {
    for (let i = 0; i < basket.length; i++) {
      contentRef.innerHTML += basketContentCard(i, suffix);
      checkoutRef.innerHTML = getCheckoutTemplate(suffix);
      renderCardContent(i, suffix);
    }
  }
}

function renderCardContent(i, suffix) {
  formattedCardPrice(i, suffix);
  formattedSubTotal(suffix);
  quantityRender(i, suffix);
  quantityNameRender(i, suffix);
  if (suffix === "_respo") renderCartBadge();
}

function formattedCardPrice(i, suffix) {
  const priceRef = document.getElementById(`price${suffix}${i}`);
  const cardPrice = basket[i].price * basket[i].quantity;
  priceRef.innerHTML = formatCurrency(cardPrice);
}

function formattedSubTotal(suffix) {
  const subTotalRef = document.getElementById(`subtotal${suffix}`);
  const totalPriceRef = document.getElementById(`total${suffix}`);
  const checkoutTotalRef = document.getElementById(`checkout_btn${suffix}`);

  let subTotal = 0;
  for (let i = 0; i < basket.length; i++)
    subTotal += basket[i].price * basket[i].quantity;

  subTotalRef.innerHTML = formatCurrency(subTotal);

  const total = subTotal + 4.99;
  const formattedTotal = formatCurrency(total);
  totalPriceRef.innerHTML = formattedTotal;
  checkoutTotalRef.innerHTML = checkoutButtonTemplate(formattedTotal);
}

function quantityNameRender(i, suffix) {
  const nameRef = document.getElementById(`quantity${suffix}${i}`);
  nameRef.innerHTML = quantityNameTemplate(i);
}

function quantityRender(i, suffix) {
  const quantRef = document.getElementById(`quantity_count${suffix}${i}`);
  const deleteRef = document.getElementById(`delete${suffix}${i}`);
  quantRef.innerHTML = renderQuantityCount(i, suffix);
  if (basket[i].quantity > 1) {
    document.getElementById(`img2${suffix}${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img${suffix}${i}`).src = "./assets/icons/-.png";
    deleteRef.classList.remove("d_none");
  } else {
    document.getElementById(`img2${suffix}${i}`).src = "./assets/icons/+.png";
    document.getElementById(`img${suffix}${i}`).src = "./assets/icons/delete.png";
    deleteRef.classList.add("d_none");
  }
}

function raiseQuantity(i, suffix) {
  const item = basket.find((product) => product.name === basket[i].name);
  if (item) {
    item.quantity++;
    updateAddButton(item.name, item.quantity);
    renderCardContent(i, suffix);
  }
}

function lowerQuantity(i, suffix) {
  const item = basket.find((product) => product.name === basket[i].name);

  if (item.quantity > 1) {
    item.quantity--;
    updateAddButton(item.name, item.quantity);
    renderCardContent(i, suffix);
    renderBasketContent(suffix);
  } else {
    updateAddButton(item.name, 0);
    basket.splice(i, 1);
    renderBasketContent(suffix);
  }
}

function deleteItem(i, suffix) {
  updateAddButton(basket[i].name, 0);
  basket.splice(i, 1);
  renderBasketContent(suffix);
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
  basket.forEach((item) => updateAddButton(item.name, 0));
  basket.splice(0, basket.length);
  renderBasketContent("");
  renderBasketContent("_respo");
  dialRef.close();
}

function bubbleProtection(event) {
  event.stopPropagation();
}

function closeBasket() {
  const closeRef = document.getElementById("respo_basket");
  closeRef.classList.toggle("d_none");
}

function renderCartBadge() {
  const cartCount = document.getElementById("cart-counter");
  let totalQuantity = 0;
  for (let i = 0; i < basket.length; i++) {
    totalQuantity += basket[i].quantity;
  }
  cartCount.innerHTML = totalQuantity;
}