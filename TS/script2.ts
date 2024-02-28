// класс использует стандартные методы JS
class MyClass{
	constructor(protected list: any){
		this.list = list;
	}
 
	// вывод
	public print(): string{
		return this.list;
	}
 
	// вывод длины
	public elemLength(): string{
		return this.list.length;
	}
 
	// поиск элемента
	public elemSearch(num: number){
		for (let i = 0; i < this.list.length; i++) {
			if (i === (num - 1)){
				return this.list[i];
			}
		}
	}
 
	// добавить элемент в конец
	public elemPush(num: number){
		this.list.push(num);
	}
 
	// удалить первый элемент
	public firstElemDel(): void{
		this.list.shift();
	}
 
	// удалить последний элемент
	public lastElemDel(): void{
		this.list.pop();
	}
 
	// поиск и замена элемента
	public elementRepl(num: number, newNum: number){
		for (let i = 0; i < this.list.length; i++) {
			if (i === (num - 1)){
				this.list[i] = newNum;
			}
		}
	}
}
 
let myList = [25, 73, 32, 41, 19];
let myObject = new MyClass(myList);
 
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
