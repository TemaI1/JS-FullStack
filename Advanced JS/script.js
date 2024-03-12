// Функция-генератор для выдачи чисел Фибоначчи, завершается после достижения определенного числа элементов.
function* fibonacciGenerator(limit) {
    let a = 0;
    let b = 1;
    let count = 0;
    while (count < limit) {
        yield a; // Возврат значений
        let temp = a;
        a = b;
        b = temp + b;
        count++;
    }
    return; // Завершаем генератор
}

// Создаем объект-генератор
const fibGen = fibonacciGenerator(15);

// Получаем первые 15 чисел Фибоначчи, остальные будут в undefined, из-за созданного ограничения.
for (let i = 0; i < 20; i++) {
    console.log(`${i + 1} - ${fibGen.next().value}`);
}