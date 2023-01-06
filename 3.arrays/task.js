function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  if(users.length == 0) {
    return 0;
  };     
  return users.filter(genders => genders.gender === gender).map(ages => ages.age).reduce((acc, item, index, arr) => {
      acc += item;
      if(index === arr.length - 1) {
        return acc / arr.length;
      } 
      return acc;
    }, 0);  
}