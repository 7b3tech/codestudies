// import axios, { AxiosResponse } from 'axios';

// function getUser(): Promise<void> {

//   const res = axios({
//     url: "http://api.github.com/users/7b3tech",
//     method: "get"
//   })

//   console.log(res);
// }

// const r = getUser().then((t)=>{

// });
//   console.log(r)
// })

setTimeout(() => {
  console.log('setTimeout data')
}, 1);

const promise = new Promise(resolve => {
  resolve('promise data');
})


promise.then((data) => {
  console.log(data);
});

for (let i = 1; i < 10000; i++) {
  console.log(i)
}
