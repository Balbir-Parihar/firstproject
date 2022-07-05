// // //sync code

// // // console.log("First");
// // // for (let i = 0; i < 1000000000; i++) {} //synchronous code
// // // console.log("Second");
// // // console.log("Third");

// // //async code

// // console.log("First");

// // // setTimeout(() => {
// // //   console.log("Hello");
// // // }, 2000); //asyn code

// // let i = 0;
// // const timer1 = setInterval(() => {
// //   console.log("Hello");
// // }, 200);

// // setTimeout(() => {
// //   clearInterval(timer1);
// // }, 5000);

// // console.log("Second");
// // console.log("Third");



// // function getUser(cb) {
// //   setTimeout(() => {
// //     cb({ id: 1, name: "Abc" });
// //   }, 5000);
// // }

// // function getLocation(cb) {
// //   setTimeout(() => {
// //     let loc = { lat: 12, lon: 45 };
// //     cb(loc);
// //   }, 4000);
// // }

// // callback function;

// // Promises

// // Async Await

// // let user = undefined;

// // getUser(input => (user = input));

// // getLocation(input => console.log(input));

// //api calls, file read,

// function getUser() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       //   res({ id: 1, name: "abc" });
//       rej("Disk Failure..");
//     }, 7000);
//   });
// }

// function getLocation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ lat: 23, lon: 43 });
//     }, 3000);
//   });
// }

// // let user = getUser();

// // let loc = getLocation();

// getUser()
//   .then(x => console.log(x))
//   .catch(er => console.log(er));
// getLocation().then(data => console.log(data));

// // setInterval(() => {
// //   console.log(user);
// // }, 500);


// // function getUser(cb) {
// //   setTimeout(() => {
// //     cb({ id: 1, name: "Abc" });
// //   }, 5000);
// // }

// // function getLocation(cb) {
// //   setTimeout(() => {
// //     let loc = { lat: 12, lon: 45 };
// //     cb(loc);
// //   }, 4000);
// // }

// // callback function;

// // Promises

// // Async Await

// // let user = undefined;

// // getUser(input => (user = input));

// // getLocation(input => console.log(input));

// //api calls, file read,

// function getUser() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // res(getLocation);
//       rej("Disk Failure..");
//     }, 2000);
//   });
// }

// function getLocation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(getAddress);
//       // reject(new Error("Server down"));
//     }, 2000);
//   });
// }

// function getAddress() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("#32432, Mohali");
//     }, 1000);
//   });
// }
// // callbacks, promises, async await

// getUser()
//   .then(i => i())
//   .then(j => j())
//   .then(k => console.log(k))
//   .catch(er => console.log(er));




//   // function getUser(cb) {
// //   setTimeout(() => {
// //     cb({ id: 1, name: "Abc" });
// //   }, 5000);
// // }

// // function getLocation(cb) {
// //   setTimeout(() => {
// //     let loc = { lat: 12, lon: 45 };
// //     cb(loc);
// //   }, 4000);
// // }

// // callback function;

// // Promises

// // Async Await

// // let user = undefined;

// // getUser(input => (user = input));

// // getLocation(input => console.log(input));

// //api calls, file read,

// function getUser() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // res(getLocation);
//       rej("Disk Failure..");
//     }, 1000);
//   });
// }

// function getLocation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(getAddress);
//       // reject(new Error("Server down"));
//     }, 1000);
//   });
// }

// function getAddress() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("#32432, Mohali");
//     }, 1000);
//   });
// }
// // callbacks, promises, async await

// // getUser()
// //   .then(i => i())
// //   .then(j => j())
// //   .then(k => console.log(k))
// //   .catch(er => console.log(er));

// async function apiCalls() {
//   try {
//     let user = await getUser();
//     let location = await getLocation();
//     let address = await getAddress();
//     console.log(address);
//   } catch (error) {
//     console.log(error);
//   }
// }



// fetch();
const URL = "https://6273be143d2b51007421072b.mockapi.io/car";
const API_KEY = "06354f04b31a38f607fddb386a60a17c";
// fetch(URL)
//   .then(res => res.json())
//   .then(data => console.log(data));

// async function getCarsfromServer() {
//   let response = await fetch(URL);
//   let data = await response.json();
//   console.log(data);
// }

// async function getWeather(city) {
//   let res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
//   );

//   let data = await res.json();
//   console.log(data.main.temp);
// }



  
const http = axios.create({
  baseURL:'https://6273be143d2b51007421072b.mockapi.io'
})

//get(to get info) post(to create info on server ) put(id) delete()--uri/students
async function getCars(){
  let response = await axios(URL);
  console.log(response.data);
  // let response = await fetch (URL);
  // let data = await response.json();
  // console.log(data);
}

async function createCars(input){
  let result = await axios.post(URL, input);
  console.log(result.status);
  // fetch(URL, {
  //   method: "POST", //verb or 
  //   headers: {
  //     "Content-type": "application/json", //the content type of data
  //   },
  //   body: JSON.stringify(input), //pay load
  // }).then(res => console.log(res.status));
}

async function updateCar(ID, input) {
  let result= await axios.put(`${URL}/$(ID)`, input);
  console.log(result.status);
  // let result = await fetch(`${URL}/${ID}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(input),
  // });
  // console.log(result.status);
}

async function deleteCar(ID) {
  let response = await axios.delete(`${URL}/$(ID)`, input);
  // let response = await fetch(`${URL}/${ID}`, {
  //   method: "DELETE",
  // });

  console.log(response.status);
}



