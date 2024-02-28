// создаем функцию для вывода
function printPersonInfo(person) {
    console.log("name:".concat(person.name, ", age:").concat(person.age, ", gender:").concat(person.gender));
}
;
// создаем пользователя
var artem = {
    name: "Artem",
    age: 30,
    gender: "male"
};
// выводим пользователя
printPersonInfo(artem); // name:Artem, age:30, gender:male
// создаем функцию для вывода
function printUserInfo(person) {
    console.log("name:".concat(person.name, ", age:").concat(person.age, ", gender:").concat(person.gender));
}
;
// создаем пользователя указав только имя
var oleg = {
    name: "Oleg"
};
// выводим пользователя
printUserInfo(oleg); // name:Oleg, age:undefined, gender:undefined
