// js with server/09_async_await.js
function webServerConnect() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}

async function getJSONData() {                  // async - await 붙은 함수는 비동기 작업을 순차적으로 진행하는걸 표시하는 문법
  const result = await webServerConnect();
  console.log(1, result);

  webServerConnect()
    .then(result => console.log(2, result));
}

getJSONData();
console.log('End!');