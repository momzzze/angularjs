// // let username = "Ivan";
// // console.log(username);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let isOpen: boolean[] = [false];
// interface IMyDto {
//     prop: string;
//     prop1: number
// }
// function id<T>(item: T): T {
//     return item;
// }
// type MyDtoORNumber = IMyDto | number;
// let num = id<MyDtoORNumber>({ prop: '1', prop1: 1 })
// function createUser(username1: string, age: number = 0) {
//     return {
//         username1,
//         age
//     }
// }
// const ivans = createUser('Ivan');
// console.log(ivans);
//------------------------------------------------------------------------------------------
// let fulfilled: boolean = false;
// function Data(method: string, uri: string, version: string, message: string, response?: string){
//     return {
//         method: method,
//         uri: uri,
//         version: version,
//         message: message,
//         response: response,
//         fulfilled
//     }
// };
// let myData = Data('GET', 'http://google.com', 'HTTP/1.1', '');
// console.log(myData);
//-------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
// function Data(data: string[], criteria: string) {
//     let result: { destination: string, price: number, status: string }[] = [];
//     let obj: { destination: string, price: number, status: string };
//     let result1: { destination: string, price: number, status: string }[] = [];
//     let result2: string[] = [];
//     data.forEach(e => {
//         obj = {
//             destination: e.split('|')[0],
//             price: Number(e.split('|')[1]),
//             status: e.split('|')[2]
//         }
//         result.push(obj);
//     });
//     console.log(obj);
//     if (criteria === 'destination') {
//         result1 = result.sort((a, b) => {
//             if (a.destination > b.destination) {
//                 return 1;
//             }
//             if (a.destination < b.destination) {
//                 return -1;
//             }
//             return 0;
//         })
//     }
//     if (criteria === 'price') {
//         result1 = result.sort((a, b) => {
//             if (a.price > b.price) {
//                 return 1;
//             }
//             if (a.price < b.price) {
//                 return -1;
//             }
//             return 0;
//         })
//     }
//     if (criteria === 'status') {
//         result1 = result.sort((a, b) => {
//             if (a.status > b.status) {
//                 return 1;
//             }
//             if (a.status < b.status) {
//                 return -1;
//             }
//             return 0;
//         })
//     }
//     result1.forEach(e => {
//         result2.push("Ticket " + JSON.stringify(e))
//     });
//     console.log(result2);
// }
// let result = Data(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination');
//-----------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
// abstract class Employee {
//     public age: number;
//     public name: string;
//     public salary: number;
//     public tasks: string[];
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this.salary = 0;
//         this.tasks = [];
//     }
//     public work(): void {
//         const currentTask = this.tasks.shift();
//         this.tasks.push(currentTask);
//         console.log(this.name + currentTask);
//     }
//     public collectSalary(): void {
//         console.log(`${this.name} received ${this.getSalary()} this month.`);
//     }
//     public getSalary(): number {
//         return this.salary;
//     }
// }
// export class Junior extends Employee {
//     constructor(name: string, age: number) {
//         super(name, age);
//         this.tasks.push(" is working on a simple task")
//     }
// }
// export class Senior extends Employee {
//     constructor(name: string, age: number) {
//         super(name, age);
//         this.tasks.push(" is working on a complicated task.")
//         this.tasks.push(" is taking time off work.")
//         this.tasks.push(" is supervising junior workers")
//     }
// }
// export class Manager extends Employee {
//     public divident: number;
//     constructor(name: string, age: number) {
//         super(name, age);
//         this.divident = 0;
//         this.tasks.push(" scheduled a meeting.")
//         this.tasks.push(" is preparing a quarterly meeting.")
//     }
//     public getSalary(): number {
//         return this.salary + this.divident;
//     }
// }
//--------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// class Box<T>{
//     private _boxes = [];
//     public add(el: T) {
//         this._boxes.push(el)
//     }
//     public remove() {
//         this._boxes.pop();
//     }
//     public get count(): number {
//         return Number(this._boxes.length);
//     }
// }
// export default Box;
// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// box.remove();
// console.log(box.count);
// let box = new Box<String>();
// box.add("Pesho");
// box.add("Gosho");
// console.log(box.count);
// box.remove(); 
// console.log(box.count);
//------------------------------------------------------------------
//-----------------------------------------------------------------
// class KeyValuePair<T, U>{
//     private key: T;
//     private val: U;
//     public setKeyValue(key: T, val: U) {
//         this.key = key;
//         this.val = val;
//     }
//     public display() {
//         console.log(`key = ${this.key}, value = ${this.val}`);
//     }
// }
// export default KeyValuePair;
// let kvp = new KeyValuePair<number, string>();
// kvp.setKeyValue(1, "Steve");
// kvp.display();
//---------------------------------------------------------------------
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        var _newTarget = this.constructor;
        this.weight = weight;
        this.melonSort = melonSort;
        if (_newTarget === Melon)
            throw new Error("Throws error");
    }
    Melon.prototype.toString = function () {
        return 'Throw error';
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Watermelon.prototype, "elementIndex", {
        get: function () {
            return this.weight + Number(this.melonSort.length);
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        return "Element: Water\nSort:".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Firemelon.prototype, "elementIndex", {
        get: function () {
            return this.weight + Number(this.melonSort.length);
        },
        enumerable: false,
        configurable: true
    });
    Firemelon.prototype.toString = function () {
        return "Element: Water\nSort:".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Earthmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight + Number(this.melonSort.length);
        },
        enumerable: false,
        configurable: true
    });
    Earthmelon.prototype.toString = function () {
        return "Element: Water\nSort:".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Airmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight + Number(this.melonSort.length);
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        return "Element: Water\nSort:".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Airmelon;
}(Melon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
