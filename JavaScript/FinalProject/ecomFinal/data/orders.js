export const orders = JSON.parse(localStorage.getItem('orders')) || [];// if there is nothing in local storage it will put an empty array

export function addOrder(order) {

    orders.unshift();// to add order to the front of the array
    saveToStorage();
}


function saveToStorage() {

    localStorage.setItem('orders', JSON.stringify(orders));
}