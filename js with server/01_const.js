//js with server/01_const.js
const count = 0;

// var count = 10;
// count = 10;
console.log(count);

const user = {
  "id" : "user01",
  "name" : "Hong"    //객체가 가진 값은 변경가능 const 의 성질
}

user.id = "mgro01";
user.name = "Kang";
user.ssn = "981015";
console.log(user);

user = {};  //error : 객체를 바꾸진 못한다. 객체가 가진 값은 변경 가능
console.log(user);