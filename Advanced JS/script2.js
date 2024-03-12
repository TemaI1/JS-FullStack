// Прокси, который позволяет использовать дробные значения в качестве индексов массива и возвращать значение элемента с ближайшим целым индексом

// Обработчик для прокси
const handler = {
    get: function(target, prop) {
        const index = Math.round(Number(prop)); // Преобразуем индекс в число и округляем до целого
        return target[index]; // Возвращаем значение элемента массива с округленным индексом
	}
};

// Создаем массив
const arr = [7, 43, 32, 71, 4];

// Создаем прокси, используя отдельный обработчик
const proxArray = new Proxy(arr, handler);

// Используем прокси как обычный массив
console.log(proxArray[2.4]); // Получим arr[2], то есть 32
console.log(proxArray[3.8]); // Получим arr[4], то есть 4