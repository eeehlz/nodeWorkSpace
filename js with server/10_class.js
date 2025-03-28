// js with server/10_class.js

//1) 생성자 함수
function User(name, age, city) {
  // 필드
  this.name = name;
  this.age = age;
  this.city = city;
  // 메서드
  this.getInfo = function () {
    return `${this.name}, ${this.age}, ${this.city}`;
  }
}

let hong = new User('Hong', 30, 'Daegu');
console.log(hong.getInfo());

let Kim = new User('Kim', 25, 'Jeju');
console.log(Kim.getInfo());

//class
class Emp {
  // 생성자
  constructor(id, name, dept) {
    //해당 클래스가 가지는 필드 등록 // ' _ '(언더바) 이유? private 필드 선언을 언더바로 시작 -> 숨겨진 필드는 언더바로 정의 (암묵적 룰)
    this._id = id;
    this._name = name;
    this._dept = dept;
  }
  // get & set
  get id() { // get 만 있다면 읽기만 가능 불러오기 제한
    return this._id;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }


  //매서드
  setDept(dept) {
    this._dept = dept;
  }

  getDept() {
    return thiskdept;
  }
}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200; // 200은 안바뀜 set 이 없어서
kang.name = 'King';
kang.setDept('Marketing');
console.log(kang);