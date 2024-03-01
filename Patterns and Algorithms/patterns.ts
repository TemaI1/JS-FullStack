// Паттерн Строитель (Builder) позволяет создавать сложные объекты пошагово, изолируя процесс создания от самого объекта. Это позволяет изменять структуру объекта без изменения самого объекта, а также упрощает процесс создания объектов с большим количеством параметров.
 
// Класс, представляющий сложный объект
class Car {
  public model: string;
  public engine: string;
  public wheels: number;
  public color: string;
 
  constructor(model: string, engine: string, wheels: number, color: string) {
    this.model = model;
    this.engine = engine;
    this.wheels = wheels;
    this.color = color;
  }
}
 
// Интерфейс строителя, определяет методы для пошагового создания объекта
interface CarBuilder {
  setModel(model: string): void;
  setEngine(engine: string): void;
  setWheels(wheels: number): void;
  setColor(color: string): void;
  getResult(): Car;
}
 
// Конкретный строитель, реализует указанные методы и возвращает готовый объект
class ConcreteCarBuilder implements CarBuilder {
  private car: Car;
 
  constructor() {
    this.car = new Car('', '', 0, '');
  }
 
  setModel(model: string): void {
    this.car.model = model;
  }
 
  setEngine(engine: string): void {
    this.car.engine = engine;
  }
 
  setWheels(wheels: number): void {
    this.car.wheels = wheels;
  }
 
  setColor(color: string): void {
    this.car.color = color;
  }
 
  getResult(): Car {
    return this.car;
  }
}
 
//  Реализация
const carLada = new ConcreteCarBuilder();
carLada.setModel('Lada');
carLada.setEngine('1.6 л, 87 л.с.');
carLada.setWheels(4);
carLada.setColor('white');
console.log(carLada.getResult());

const carToyota = new ConcreteCarBuilder();
carToyota.setModel('Toyota');
carToyota.setEngine('3.5 л, 200 л.с.');
carToyota.setWheels(4);
carToyota.setColor('black');
console.log(carToyota.getResult());
 

