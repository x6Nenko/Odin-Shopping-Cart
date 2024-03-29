export function matchingItem(cartArr, idToCheck) {
  return cartArr.filter(item => item.itemId === idToCheck);
}

export function countTotalPrice(cart) {
  const totalAllPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.allPrice;
  }, 0);

  return Math.round(totalAllPrice * 100) / 100
}