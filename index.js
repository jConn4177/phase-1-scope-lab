var customerName = "bob";

function upperCaseCustomerName() {
  let upper = customerName.toUpperCase();
  return (customerName = upper);
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob";
}
