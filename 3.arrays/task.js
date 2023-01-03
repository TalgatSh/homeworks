function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  let result;
  result = users.filter(gen => gen.gender === "мужской").map(ages => ages.age).reduce((acc, item, index, arr) => {
    acc += item;
    if(index === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
  });
  return result;
}