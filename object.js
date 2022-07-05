let fakedata = `[
 {
  "model": "Colorado",
  "manufacturer": "Honda",
  "feul": "Hybrid",
  "name": "Rolls Royce Model T",
  "isNew": false,
  "price": "419.85",
  "id": "1"
 },
 {
  "model": "A4",
  "manufacturer": "Ferrari",
  "feul": "Electric",
  "name": "Cadillac 911",
  "isNew": false,
  "price": "87.62",
  "id": "2"
 },
 {
  "model": "LeBaron",
  "manufacturer": "Fiat",
  "feul": "Hybrid",
  "name": "Bugatti LeBaron",
  "isNew": true,
  "price": "838.77",
  "id": "3"
 },
 {
  "model": "PT Cruiser",
  "manufacturer": "Bugatti",
  "feul": "Gasoline",
  "name": "Audi Charger",
  "isNew": true,
  "price": "445.95",
  "id": "4"
 },
 {
  "model": "Jetta",
  "manufacturer": "Chevrolet",
  "feul": "Hybrid",
  "name": "BMW Mustang",
  "isNew": false,
  "price": "753.98",
  "id": "5"
 },
 {
  "model": "911",
  "manufacturer": "Audi",
  "feul": "Gasoline",
  "name": "Polestar Prius",
  "isNew": true,
  "price": "133.79",
  "id": "6"
 },
 {
  "model": "LeBaron",
  "manufacturer": "Smart",
  "feul": "Hybrid",
  "name": "Aston Martin Camaro",
  "isNew": true,
  "price": "302.88",
  "id": "7"
 },
 {
  "model": "Expedition",
  "manufacturer": "Cadillac",
  "feul": "Electric",
  "name": "Jeep Model T",
  "isNew": false,
  "price": "885.54",
  "id": "8"
 },
 {
  "model": "XTS",
  "manufacturer": "Mini",
  "feul": "Electric",
  "name": "Volkswagen CX-9",
  "isNew": true,
  "price": "152.89",
  "id": "9"
 },
 {
  "model": "Camaro",
  "manufacturer": "Jeep",
  "feul": "Electric",
  "name": "Maserati Fortwo",
  "isNew": false,
  "price": "764.67",
  "id": "10"
 },
 {
  "model": "XTS",
  "manufacturer": "Bugatti",
  "feul": "Diesel",
  "name": "Bentley Jetta",
  "isNew": true,
  "price": "11.49",
  "id": "11"
 },
 {
  "model": "Jetta",
  "manufacturer": "Volkswagen",
  "feul": "Electric",
  "name": "Honda Model 3",
  "isNew": false,
  "price": "323.76",
  "id": "12"
 },
 {
  "model": "Land Cruiser",
  "manufacturer": "Ford",
  "feul": "Diesel",
  "name": "Chevrolet Cruze",
  "isNew": true,
  "price": "831.35",
  "id": "13"
 },
 {
  "model": "Malibu",
  "manufacturer": "Mini",
  "feul": "Electric",
  "name": "Mazda Challenger",
  "isNew": true,
  "price": "646.36",
  "id": "14"
 },
 {
  "model": "Golf",
  "manufacturer": "Toyota",
  "feul": "Gasoline",
  "name": "Lamborghini Colorado",
  "isNew": true,
  "price": "263.78",
  "id": "15"
 },
 {
  "model": "Jetta",
  "manufacturer": "Nissan",
  "feul": "Hybrid",
  "name": "Audi Corvette",
  "isNew": true,
  "price": "796.51",
  "id": "16"
 },
 {
  "model": "Durango",
  "manufacturer": "Bentley",
  "feul": "Electric",
  "name": "Mini El Camino",
  "isNew": true,
  "price": "330.09",
  "id": "17"
 },
 {
  "model": "Durango",
  "manufacturer": "Mercedes Benz",
  "feul": "Electric",
  "name": "Chrysler CX-9",
  "isNew": false,
  "price": "802.56",
  "id": "18"
 },
 {
  "model": "Malibu",
  "manufacturer": "Jeep",
  "feul": "Diesel",
  "name": "Chrysler Camaro",
  "isNew": false,
  "price": "249.36",
  "id": "19"
 },
 {
  "model": "Model T",
  "manufacturer": "Porsche",
  "feul": "Electric",
  "name": "Bentley Fortwo",
  "isNew": true,
  "price": "919.90",
  "id": "20"
 },
 {
  "model": "Land Cruiser",
  "manufacturer": "Bentley",
  "feul": "Diesel",
  "name": "Smart Wrangler",
  "isNew": false,
  "price": "855.11",
  "id": "21"
 },
 {
  "model": "Model T",
  "manufacturer": "Jaguar",
  "feul": "Diesel",
  "name": "Chrysler Civic",
  "isNew": false,
  "price": "726.37",
  "id": "22"
 },
 {
  "model": "CTS",
  "manufacturer": "Volvo",
  "feul": "Gasoline",
  "name": "Ferrari Model T",
  "isNew": true,
  "price": "859.69",
  "id": "23"
 },
 {
  "model": "Prius",
  "manufacturer": "Rolls Royce",
  "feul": "Gasoline",
  "name": "Audi CX-9",
  "isNew": false,
  "price": "585.79",
  "id": "24"
 },
 {
  "model": "XTS",
  "manufacturer": "Volkswagen",
  "feul": "Electric",
  "name": "Mini 2",
  "isNew": true,
  "price": "145.90",
  "id": "25"
 },
 {
  "model": "Model S",
  "manufacturer": "Bugatti",
  "feul": "Hybrid",
  "name": "Tesla Alpine",
  "isNew": true,
  "price": "357.73",
  "id": "26"
 },
 {
  "model": "V90",
  "manufacturer": "Polestar",
  "feul": "Electric",
  "name": "Land Rover Grand Cherokee",
  "isNew": true,
  "price": "979.43",
  "id": "27"
 },
 {
  "model": "Explorer",
  "manufacturer": "Ford",
  "feul": "Gasoline",
  "name": "Bentley Colorado",
  "isNew": true,
  "price": "269.99",
  "id": "28"
 },
 {
  "model": "Escalade",
  "manufacturer": "Audi",
  "feul": "Hybrid",
  "name": "Toyota A8",
  "isNew": false,
  "price": "124.50",
  "id": "29"
 },
 {
  "model": "Malibu",
  "manufacturer": "Chevrolet",
  "feul": "Gasoline",
  "name": "Smart Jetta",
  "isNew": false,
  "price": "210.72",
  "id": "30"
 },
 {
  "model": "Spyder",
  "manufacturer": "Audi",
  "feul": "Diesel",
  "name": "Kia Grand Caravan",
  "isNew": false,
  "price": "757.84",
  "id": "31"
 },
 {
  "model": "ATS",
  "manufacturer": "Lamborghini",
  "feul": "Electric",
  "name": "Bentley Explorer",
  "isNew": false,
  "price": "985.65",
  "id": "32"
 },
 {
  "model": "Element",
  "manufacturer": "Ferrari",
  "feul": "Gasoline",
  "name": "Ford V90",
  "isNew": true,
  "price": "787.54",
  "id": "33"
 },
 {
  "model": "Golf",
  "manufacturer": "Kia",
  "feul": "Electric",
  "name": "Cadillac Camry",
  "isNew": false,
  "price": "718.28",
  "id": "34"
 },
 {
  "model": "Camry",
  "manufacturer": "Jaguar",
  "feul": "Diesel",
  "name": "Volvo XTS",
  "isNew": true,
  "price": "378.38",
  "id": "35"
 },
 {
  "model": "Camry",
  "manufacturer": "Jaguar",
  "feul": "Electric",
  "name": "Smart Escalade",
  "isNew": true,
  "price": "263.64",
  "id": "36"
 },
 {
  "model": "Durango",
  "manufacturer": "Mercedes Benz",
  "feul": "Gasoline",
  "name": "Bugatti Altima",
  "isNew": false,
  "price": "445.32",
  "id": "37"
 },
 {
  "model": "Fortwo",
  "manufacturer": "Hyundai",
  "feul": "Diesel",
  "name": "Mercedes Benz Roadster",
  "isNew": false,
  "price": "944.51",
  "id": "38"
 },
 {
  "model": "Altima",
  "manufacturer": "Dodge",
  "feul": "Hybrid",
  "name": "Mazda Mercielago",
  "isNew": false,
  "price": "90.21",
  "id": "39"
 },
 {
  "model": "Grand Cherokee",
  "manufacturer": "Porsche",
  "feul": "Gasoline",
  "name": "Chevrolet Cruze",
  "isNew": true,
  "price": "649.47",
  "id": "40"
 },
 {
  "model": "Sentra",
  "manufacturer": "Chrysler",
  "feul": "Diesel",
  "name": "Kia Expedition",
  "isNew": false,
  "price": "959.67",
  "id": "41"
 },
 {
  "model": "Camaro",
  "manufacturer": "Aston Martin",
  "feul": "Diesel",
  "name": "Maserati LeBaron",
  "isNew": false,
  "price": "322.89",
  "id": "42"
 },
 {
  "model": "Cruze",
  "manufacturer": "Rolls Royce",
  "feul": "Electric",
  "name": "Hyundai Prius",
  "isNew": true,
  "price": "841.19",
  "id": "43"
 },
 {
  "model": "XC90",
  "manufacturer": "Smart",
  "feul": "Diesel",
  "name": "Aston Martin Beetle",
  "isNew": false,
  "price": "855.13",
  "id": "44"
 },
 {
  "model": "Element",
  "manufacturer": "Honda",
  "feul": "Gasoline",
  "name": "Hyundai Grand Caravan",
  "isNew": true,
  "price": "613.58",
  "id": "45"
 },
 {
  "model": "A8",
  "manufacturer": "Fiat",
  "feul": "Diesel",
  "name": "Lamborghini Fortwo",
  "isNew": false,
  "price": "966.54",
  "id": "46"
 },
 {
  "model": "Sentra",
  "manufacturer": "Kia",
  "feul": "Electric",
  "name": "Fiat Accord",
  "isNew": false,
  "price": "705.23",
  "id": "47"
 },
 {
  "model": "Sentra",
  "manufacturer": "Toyota",
  "feul": "Electric",
  "name": "Chrysler Fiesta",
  "isNew": true,
  "price": "217.28",
  "id": "48"
 },
 {
  "model": "Countach",
  "manufacturer": "Kia",
  "feul": "Electric",
  "name": "BMW Mercielago",
  "isNew": false,
  "price": "819.95",
  "id": "49"
 }
]`;
// let cars = JSON.parse(fakedata);
// for(let el of cars){
//     if(el.color==='Bugatti')console.log(el);
// }

// const person1= {
//     name: "abc",
//     age: 22,
//     isVerified: false,
//     address: ["b92", "p34"],
//     friend: {id:"11", name:"rohit"},
// };
// const person2= {
//     name: "abc",
//     age: 22,
//     isVerified: false,
//     address: ["b92", "p34"],
//     friend: {id:"11", name:"rohit"},
// };
// const person3= {
//     name: "abc",
//     age: 22,
//     isVerified: false,
//     address: ["b92", "p34"],
//     friend: {id:"11", name:"rohit"},
// };
// const person = [person1, person2, person3];
// json= javascript object notation
// let data = JSON.stringify(person);
// let json_string='[{"name":"abc","age":22,"isVerified":false,"address":["b92","p34"],"friend":{"id":"11","name":"rohit"}},{"name":"abc","age":22,"isVerified":false,"address":["b92","p34"],"friend":{"id":"11","name":"rohit"}},{"name":"abc","age":22,"isVerified":false,"address":["b92","p34"],"friend":{"id":"11","name":"rohit"}}]'

// for(let index=0; index<person.length; index++){
//     console.log(person[index].naem);
// }

// console.log{person["address"]}
// for (let el in person){
//     console.log(el, person[el]);
// }
// for (let el in person){
//     console.log(el);
// }
// for (let el of object.keys(person)){
//     console.log(el, persol[el]);
// }


// Callback function

// function sum(a, b){
//     return a+b;
// }
// function mul(a,b){
//     return a * b;
// }
// function hello(x){
//     return x(2, 3);
// }

// function iterator(a){
//     console.log(a,name);
// }
// cars.forEach(iterator);

// cars.forEach((el, i) => {
// console.log(el.name, i);
    
// });
// filter
//  let result = cars.filter(el =>el.fuel =="hybrid");
//  let mapped= cars.map(el=>el.fuel =="hybrid");
     
// //map
// let numbers=[2,3,4, 5, 6, 7, 8]

// let mapped = numbers.map(el => el**2);


// let sum= numbers.reduce((sum, el) => sum+el, 0);

// let[a,b, ...etc] = numbers;

// let person = {id:2, name:"hello", age:23, address:"mohali"};
// let {id: student_id, name:full_name, age, address:location}= person;
// let result= cars.filter(el=>.fuel=="hybrid");

//sort array
 let numbers=[2,3,4,5,6,7,8];

// let mapped =numbers.map((el,i)=>el==3);
// let sum = numbers.reduce((sum,el)=>sum+el,0);

//     numbers.sort((a,b)=>{
//         if(a>b)return-1;
//         if(a<b)return 1;
//         return 0;
//         console.log(a,b)
//     } );

    // let alpha=["z", "A", "i","b","d","c"];
    // alpha.sort((a,b)=>{
    //     a=a.toUppercase();
    //     b=b.toUppercase();
    //     if(a>b)return 1;
    //     if(a<b)return -1;
    //     return 0;
    // });
    fakedata.sort((a,b)=>{
        a=a["price"];
        b=b["price"];
        // console.log(`a=${a}, b=${b}`);
        // console.log("__________");
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    });
    // sorting(array, sortBy, sortType, sortOrder){

    // }
    
//string method includ, startsWith, endsWith,split

// // fakedata.sort((a,b)=>{
// //     fakedata.stars
// })
function searching(array,searchBy,sortType, searchString){
    if (sortType==="number")return sortNumbers(array, sortBy,sortOrder);
    if (sortType==="string")return sortStrings(array, sortBy,sortOrder);

}
every,some, findincex
function sorting(array,sortBy, sortOrder)

function sortNumbers(array, sortBy, sortOrder){
    return array.sort((a,b)=>{
        a= a[sortBy];
        b=b[sortBy];
        if(sortOrder===1)return a-b;
        if(sortOrder===-1)return b-a;
    }); 
}

function sortStrings(array, sortBy, sortOrder){
    return array.sort((a,b)=>{
        a= a[sortBy].upperCase();
        b= b[sortBy].upperCase();
        if(a>b) return sortOrder ===1? 1 : -1;
        if(a<b) return sortOrder ===1? -1 : 1;
        return 0;
    });
}

function searching(array, sortBy,sortStrings){
    return array.filter((el) =>{
        let value=el[searchBy];
        return value
        .split('')
        .some((word)=>word.toLowerCase().startWith(searchString()));
    });
}
//classes of objects
