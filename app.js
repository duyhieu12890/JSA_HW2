//Bai1
let end = 'end';
let begin = 'begin';
console.log(begin + ' Bai1');
var type1 = ['Tao', 15];
var type2 = ['Cam', 10];
var type3 = ['Chuoi', 15];
var allType = [type1, type2, type3];
for (let index = 0; index < allType.length; index++) {
    const element = allType[index];
    console.log('Toi co ' + element[0] + ', so luong la:' + element[1]);
}
console.log(end + ' Bai1');

//Bai2
console.log(begin + ' Bai2');
let index1 = -1;
do {
    index1++;
    const element = allType[index1];
    console.log('(do while) Toi co ' + element[0] + ', so luong la:' + element[1]);
} while (index1 < allType.length - 1)
let index2 = -1;
while (index2 < allType.length - 1) {
    index2++;
    const element = allType[index2];
    console.log('(while) Toi co ' + element[0] + ', so luong la:' + element[1]);
}
for (let index = 0; index < allType.length; index++) {
    const element = allType[index];
    console.log('(for) Toi co ' + element[0] + ', so luong la:' + element[1]);
}
console.log(end + ' Bai2');
//Bai3
console.log(begin + ' Bai3');

var myDog = {
    'status': 'Before',
    'name': 'Cuc Cung',
    'legs': '4',
    'friends': ["everythingg!"]
}
console.log(myDog);

var Husky = myDog;

Husky.color = 'Brown';
Husky.status = 'After';

delete Husky.friends;

console.log(Husky);

console.log(end + 'bai3');

//end