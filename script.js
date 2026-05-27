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

function renderBasket(){
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = getBasketTemplate(); 
}


function renderBasketContent() {
  const basketContentRef = document.getElementById('basket_content');
  const basketErrRef = document.getElementById('empty_basket'); 
  if(basket.length === 0){
basketErrRef.innerHTML = getErrorTemplate();
  }else {
    for (let i = 0; i < basket.length; i++) {
        basketContentRef.innerHTML = basketContentCard();
    }
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

function addBurgerToCart(i){
const burger_meal = basket.find((product) => product.name === burgers[i].name);
if (burger_meal) {
    burger_meal.quantity++
} else {
    basket.push({"name": burgers[i].name, "price": burgers[i].price, "quantity": burgers[i].quantity})
    console.log(basket);
}
}
