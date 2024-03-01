// Паттерн Строитель (Builder) позволяет создавать сложные объекты пошагово, изолируя процесс создания от самого объекта. Это позволяет изменять структуру объекта без изменения самого объекта, а также упрощает процесс создания объектов с большим количеством параметров.
// Класс, представляющий сложный объект
var Car = /** @class */ (function () {
    function Car(model, engine, wheels, color) {
        this.model = model;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
    }
    return Car;
}());
// Конкретный строитель, реализует указанные методы и возвращает готовый объект
var ConcreteCarBuilder = /** @class */ (function () {
    function ConcreteCarBuilder() {
        this.car = new Car('', '', 0, '');
    }
    ConcreteCarBuilder.prototype.setModel = function (model) {
        this.car.model = model;
    };
    ConcreteCarBuilder.prototype.setEngine = function (engine) {
        this.car.engine = engine;
    };
    ConcreteCarBuilder.prototype.setWheels = function (wheels) {
        this.car.wheels = wheels;
    };
    ConcreteCarBuilder.prototype.setColor = function (color) {
        this.car.color = color;
    };
    ConcreteCarBuilder.prototype.getResult = function () {
        return this.car;
    };
    return ConcreteCarBuilder;
}());
//  Реализация
var carLada = new ConcreteCarBuilder();
carLada.setModel('Lada');
carLada.setEngine('1.6 л, 87 л.с.');
carLada.setWheels(4);
carLada.setColor('white');
console.log(carLada.getResult());
var carToyota = new ConcreteCarBuilder();
carToyota.setModel('Toyota');
carToyota.setEngine('3.5 л, 200 л.с.');
carToyota.setWheels(4);
carToyota.setColor('black');
console.log(carToyota.getResult());
