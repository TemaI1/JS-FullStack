// создаем свои типы, для использования
type myTypeStr = string;
type myTypeNum = number;
// создаем тип пользователя
type Person = {
    name: myTypeStr;
    age: myTypeNum;
    gender: 'male' | 'female';
};
// создаем функцию для вывода
function printPersonInfo(person: Person){
    console.log(`name:${person.name}, age:${person.age}, gender:${person.gender}`);
};
// создаем пользователя
let artem: Person = {
    name: "Artem",
    age: 30,
    gender: "male"
};
// выводим пользователя
printPersonInfo(artem); // name:Artem, age:30, gender:male



// создаем тип, который делает свойства необязательными
type MyPartial<T> = {
    [el in keyof T]?: T[el]
};
// создаем тип пользователя
type User = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};
// создаем функцию для вывода
function printUserInfo(person: MyPartial<User>){
    console.log(`name:${person.name}, age:${person.age}, gender:${person.gender}`);
};
// создаем пользователя указав только имя
let oleg: MyPartial<User> = {
    name: "Oleg"
};
// выводим пользователя
printUserInfo(oleg); // name:Oleg, age:undefined, gender:undefined