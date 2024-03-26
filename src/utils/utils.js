export function matchingItem(cartArr, idToCheck) {
  return cartArr.filter(item => item.itemId === idToCheck);
}