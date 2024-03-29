// класс использует стандартные методы JS
class myClass{
	constructor(list){
		this.list = list;
	}
 
	// вывод
	print(){
		return this.list;
	}
 
	// вывод длины
	elemLength(){
		return this.list.length;
	}
 
	// поиск элемента
	elemSearch(num){
		for (let i = 0; i < this.list.length; i++) {
			if (i === (num - 1)){
				return this.list[i];
			}
		}
	}
 
	// добавить элемент в конец
	elemPush(num){
		this.list.push(num);
	}
 
	// удалить первый элемент
	firstElemDel(){
		this.list.shift();
	}
 
	// удалить последний элемент
	lastElemDel(){
		this.list.pop();
	}
 
	// поиск и замена элемента
	elementRepl(num, newNum){
		for (let i = 0; i < this.list.length; i++) {
			if (i === (num - 1)){
				this.list[i] = newNum;
			}
		}
	}
}
 
let myList = [25, 73, 32, 41, 19];
let myObject = new myClass(myList);
 
console.log(myObject.print()); // [25, 73, 32, 41, 19]
 
console.log(myObject.elemLength()); // 5
 
console.log(myObject.elemSearch(2)); // 73
 
myObject.elemPush(4);
console.log(myObject.print()); // [25, 73, 32, 41, 19, 4]
 
myObject.firstElemDel();
console.log(myObject.print()); // [73, 32, 41, 19, 4]
 
myObject.lastElemDel();
console.log(myObject.print()); // [73, 32, 41, 19]
 
myObject.elementRepl(3, 99);
console.log(myObject.print()); // [73, 32, 99, 19]
