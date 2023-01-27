//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [{}];  
  return (...args) => {
    const hash = md5(...args);
    const objectInCache = cache.find((item) => Object.values(item).includes(hash))
    if (objectInCache !== undefined) {
      return objectInCache;
    }
      return cache[hash];
    
    const result = func(...args);
    cache[hash] = result;
    return result;
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
