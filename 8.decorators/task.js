function cachingDecoratorNew(func) {
  // Ваш код
    let cache = [];
    function wrapper(...args) {
        const hash = args.join(','); // получаем правильный хэш
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
            if (objectInCache) { // если элемент найден
                console.log('Из кэша: ' + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение
                return 'Из кэша: ' + objectInCache.value;
            }
            let result = func(...args); // в кэше результата нет - придётся считать
            cache.push({hash: hash , value: result}) ; // добавляем элемент с правильной структурой
            if (cache.length > 5) {
            cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый)
            }
            console.log('Вычисляем: ' + result);
            return 'Вычисляем: ' + result;
        }
        return wrapper;
}


function debounceDecoratorNew(func,ms) {
  // Ваш код
        let timerId;
        let firstTime = true;

        return function (...args) {
            clearTimeout(timerId);
            if (firstTime) {
                func.apply(this, args);
                firstTime = false;
            }
           else {
                timerId = setTimeout(() => {
                    func.apply(this, args);
                }, ms);
            }
        }

}

function debounceDecorator2(func) {
  // Ваш код
    let timerId;
    let firstTime = true;

    return function wrapper(...args) {
        clearTimeout(timerId);
        wrapper.count++;
        if (firstTime) {
            func.apply(this, args);
            firstTime = false;
        }
        else {
            timerId = setTimeout(() => {
                func.apply(this, args);
            }, ms);
        }
    }

    wrapper.count = 0;
    return wrapper
}
