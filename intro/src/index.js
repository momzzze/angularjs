// // let username = "Ivan";
// // console.log(username);
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
function Data(data, criteria) {
    var result = [];
    var obj;
    var result1 = [];
    var result2 = [];
    data.forEach(function (e) {
        obj = {
            destination: e.split('|')[0],
            price: Number(e.split('|')[1]),
            status: e.split('|')[2]
        };
        result.push(obj);
    });
    console.log(obj);
    if (criteria === 'destination') {
        result1 = result.sort(function (a, b) {
            if (a.destination > b.destination) {
                return 1;
            }
            if (a.destination < b.destination) {
                return -1;
            }
            return 0;
        });
    }
    if (criteria === 'price') {
        result1 = result.sort(function (a, b) {
            if (a.price > b.price) {
                return 1;
            }
            if (a.price < b.price) {
                return -1;
            }
            return 0;
        });
    }
    if (criteria === 'status') {
        result1 = result.sort(function (a, b) {
            if (a.status > b.status) {
                return 1;
            }
            if (a.status < b.status) {
                return -1;
            }
            return 0;
        });
    }
    result1.forEach(function (e) {
        result2.push("Ticket " + JSON.stringify(e));
    });
    console.log(result2);
}
var result = Data(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination');
