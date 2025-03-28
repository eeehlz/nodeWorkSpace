//inner_module/01_path.js
//전역변수, 절대경로
console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log('----------------------------------------------------------------');
console.log('폴더정보 :', path.dirname(__filename)); // 폴더정보
console.log('실제 파일명 : %s', path.basename(__filename)); // 실제 파일명
console.log('확장자 : %s', path.extname(__filename)); // 확장자
