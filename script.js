function printLetterName() {
  var inputValue = document.getElementById("nameInput").value;
  document.getElementById("name").textContent = inputValue.toUpperCase();
}
function printLetterMonth() {
  var inputElement = document.getElementById("sktm");
  var inputValue = inputElement.value.replace(/\D/g, "");
  document.getElementById("month").textContent = inputValue;
}
function printLetterYear() {
  var inputElement = document.getElementById("skty");
  var inputValue = inputElement.value.replace(/\D/g, "");
  document.getElementById("year").textContent = inputValue;
}
function printLetterCvc() {
  var inputElement = document.getElementById("cvcInput");
  var inputValue = inputElement.value.replace(/\D/g, "");
  document.getElementById("cvc").textContent = inputValue;
}

function updateCreditCardNumber() {
  var inputElement = document.getElementById("creditCardNumber");
  var displayElement = document.getElementById("number");
  var creditCardNumber = inputElement.value.replace(/\D/g, "");
  var formattedNumber = formatCreditCardNumber(creditCardNumber);
  displayElement.textContent = formattedNumber;
}

function formatCreditCardNumber(number) {
  // Her 4 karakterde bir boşluk ekleyen fonksiyon
  var formatted = "";
  for (var i = 0; i < number.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += " ";
    }
    formatted += number.charAt(i);
  }
  return formatted;
}
