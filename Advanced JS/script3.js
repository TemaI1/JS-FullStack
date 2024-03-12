// Реализации асинхронной загрузки изображений и их вывода в DOM в соответствующем порядке, а также вывод сообщения в случае возникновения ошибки.

// Массив с URL изображений для загрузки
const imageUrls = [
    'https://source.unsplash.com/random/200x200',
    'https://source.unsplash.com/random/250x250',
    'https://source.unsplash.com/random/300x300'
];

// Функция для загрузки изображения по URL
async function loadImage(url) {
    // создается новый объект Promise, который возвращает функция
    return new Promise((resolve, reject) => {
        const image = new Image();
        // при вызове `resolve`, Promise разрешается, устанавливается обработчик события `onload`, который будет вызван, когда изображение успешно загрузится
        image.onload = () => resolve(image);
        // при вызове `reject`, Promise отклоняется, вызывается обработчик события `onerror`, передавая объект `Error`, содержащий сообщение об ошибке
        image.onerror = () => reject(new Error('Ошибка при загрузке изображения'));
        image.src = url;
    });
}

// Функция для асинхронной загрузки изображений
async function loadImages() {
    const imageElements = [];
    // перебор всех URL изображений из массива `imageUrls`
    for (let i = 0; i < imageUrls.length; i++) {
        try {
            // используется ключевое слово `await`, чтобы дождаться, пока изображение загрузится, оно добавляется в массив, если возникает ошибка при загрузке, это обрабатывается блоком `catch`
            const image = await loadImage(imageUrls[i]);
            // само изображение добавляется в массив
            imageElements.push(image);
        } catch (error) {
            // если происходит ошибка загрузки, создается новый элемент абзаца для отображения сообщения об ошибке
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            // элемент абзаца добавляется в массив
            imageElements.push(errorMessage);
        }
    }
    return imageElements;
}

// Функция для отображения изображений в DOM
async function displayImages() {
    // `await` требует, чтобы выполнение функции `displayImages` остановилось до того, как функция `loadImages` выполнит свою задачу, после результат будет сохранен в переменной `images`
    const images = await loadImages();
    const container = document.getElementById('image-container');
    images.forEach((image) => {
        container.appendChild(image);
    });
}

// Вызов функции для отображения изображений
displayImages();