let icon = document.getElementById('menu-icon');
let menu = document.getElementById('menu');

function menuShowing(){
  //console.log("Bora ver se dá certo");
  if (menu.style.display == "none" || menu.style.display == " "){
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// FILTRO DE FRETE BASEADO NO PREÇO
const priceFilter = document.getElementById("price-filter");
const priceValue = document.getElementById("price-value");

priceFilter.addEventListener("input", function () {
  const value = priceFilter.value;
  const formattedValue = formatPrice(value);
  priceValue.textContent = `R$${formattedValue}`;
});

function formatPrice(value) {
  return (value / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Recolher e mostrar perguntas frequentes

let idAsked = null;

function displayAnswer(answerCard) {
  let answerSee = document.getElementById(answerCard);

  if (answerSee !== null && answerSee !== idAsked) {
    let answerSeeClick = document.getElementById(idAsked);
    if (answerSeeClick !== null) {
      answerSeeClick.style.display = 'none';
    }
  }

  if (answerSee.style.display === 'none') {
    answerSee.style.display = 'block';
  } else {
    answerSee.style.display = 'none';
  }

  idAsked = answerSee.style.display === 'none' ? null : answerCard;
}
