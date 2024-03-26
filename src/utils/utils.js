export function isMatchingItems(cartArr, idToCheck) {
  return cartArr.some(item => item.itemId === idToCheck);
}