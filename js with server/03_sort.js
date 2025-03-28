let fruits = ["banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

let points = [40, 100, 1, 25, 5, 10];
points.sort();
console.log(points);

points.sort(function (a,b) {
  return a - b;
});
console.log(points);
//퀵정렬, 합병정렬
//a-b 가 음수면 a
//a-b 가 양수면 b

