//Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Ajax', age: 3 })); // 2

console.log(countProps({ mail: 'dick@onastick.com', isOnline: true, score: 400 })); // 3