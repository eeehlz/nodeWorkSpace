//js with server/04_filter_map.js
let persons = [{
  name : "유재석",
  point : 78,
  city : "서울"
},
{
  name : "김종국",
  point : 92,
  city : "서울"
},
{
  name : "양세찬",
  point : 76,
  city : "제주도"
},
{
  name : "하하",
  point : 81,
  city : "서울"
}
];

// 1) 점수가 80점 이상인 사람들만 따로
let scores = persons.filter(function (value, index){
  return value.point >= 80; //boolean TYPE
});
console.log(scores);
//객체배열일 경우 새로운 배열과 원본배열 둘다 데이터 변경 발생
scores[0].name = "강호동";
console.log("스코어",scores);
console.log("이름",persons);

// 2) 각 사람들 별로 no를 추가
let newList = persons.map(function (value, index){ // (persons.map = persons.forEach)
  return {
    no: ((index + 1) * 100),
    name : value.name,
    city : value.city
  }
});
console.log("새로운 배열 : ", newList); //point 라는 필드는 사라짐
//ps)
newList[0].name = "홍길동"; // newList의 이름 변경
console.log("newList :",newList);
console.log("persons :",persons); // persons 는 그대로