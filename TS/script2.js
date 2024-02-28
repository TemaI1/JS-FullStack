// класс использует стандартные методы JS
var MyClass = /** @class */ (function () {
    function MyClass(list) {
        this.list = list;
        this.list = list;
    }
    // вывод
    MyClass.prototype.print = function () {
        return this.list;
    };
    // вывод длины
    MyClass.prototype.elemLength = function () {
        return this.list.length;
    };
    // поиск элемента
    MyClass.prototype.elemSearch = function (num) {
        for (var i = 0; i < this.list.length; i++) {
            if (i === (num - 1)) {
                return this.list[i];
            }
        }
    };
    // добавить элемент в конец
    MyClass.prototype.elemPush = function (num) {
        this.list.push(num);
    };
    // удалить первый элемент
    MyClass.prototype.firstElemDel = function () {
        this.list.shift();
    };
    // удалить последний элемент
    MyClass.prototype.lastElemDel = function () {
        this.list.pop();
    };
    // поиск и замена элемента
    MyClass.prototype.elementRepl = function (num, newNum) {
        for (var i = 0; i < this.list.length; i++) {
            if (i === (num - 1)) {
                this.list[i] = newNum;
            }
        }
    };
    return MyClass;
}());
var myList = [25, 73, 32, 41, 19];
var myObject = new MyClass(myList);
console.log(myObject.print()); // [25, 73, 32, 41, 19]
console.log(myObject.elemLength()); // 5
console.log(myObject.elemSearch("g")); // 73
myObject.elemPush(4);
console.log(myObject.print()); // [25, 73, 32, 41, 19, 4]
myObject.firstElemDel();
console.log(myObject.print()); // [73, 32, 41, 19, 4]
myObject.lastElemDel();
console.log(myObject.print()); // [73, 32, 41, 19]
myObject.elementRepl(3, 99);
console.log(myObject.print()); // [73, 32, 99, 19]
