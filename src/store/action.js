export function sortByDefault(){
  console.log("Hi")
  return {
    type:'sortByDefault'
  }
}
export function sortBySize(sizes) {
  return {
    type: 'sortBySize',
    payload: sizes,
  };
}
export function sortByPrice(filter) {
  return {
    type: 'sortByPrice',
    payload: filter,
  };
}

export function addItems(items, isCartOpen) {
  return {
    type: 'addItems',
    payload: { items, isCartOpen },
  };
}

export function decreaseItems(items) {
  return {
    type: 'decreaseItems',
    payload: items,
  };
}

export function removeItems(items) {
  return {
    type: 'removeItems',
    payload: items,
  };
}

export function toggleCart(){
  return {
    type : 'toggleCart'
  }
}
