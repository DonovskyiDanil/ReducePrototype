Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    const array = this;
    const length = array.length;
  
    // Проверяем, передано ли начальное значение
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  };
  
  // Пример использования:
  const numbers = [1, 2, 3, 4, 5];
  
  const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Вывод: 15
  