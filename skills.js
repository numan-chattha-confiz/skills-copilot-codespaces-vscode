function calculateNumbers(var1, var2) {
  return var1 + var2;
}

function multiplyNumbers(var1, var2) {
  return var1 * var2;
}

function findMinimum(var1, var2) {
  return Math.min(var1, var2);
}

function sortListOfObjects(list) {
  return list.sort((a, b) => a.name.localeCompare(b.name));
}