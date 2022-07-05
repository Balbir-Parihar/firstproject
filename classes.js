//classes always in PacalForm
class Person{
    constructor(name,dob){
        this.name=name;
        this.dob=dob;
    }
    isVerfied=false;
    hasAadhar=false;

    //method
    speak(){
        console.log(this.name, "is speaking...");
    }
    walk(){
        console.log(this.name, "is walking...");
    }
    run(){
        console.log(this.name, "is running...");
    }
}
    let person1=new Person("abc","21");
    let person2=new Person("bac","22");

//     //stopwatch
//     class StopWatch{
//         constructor(modelNo, color){
//             this.modelNo = modelNo;
//             this.color =color;
//         }
//         //properties
//         isRunning= false;
//         startTime=0;
//         stopTime=0;
//         duration=0;
    
//     //method
//     start() {
//         if
//         this.startTime = new Date().getTime();
//         console.log("Stopwatch started...");
//     } 
//     stop() {
//         if(!this.isRunning) throw new Error
//         this.stopTime = new Date().getTime();
//         duration = (this.stopTime - this.startTime)/ 1000;
//         console.log("duration started", this.duration);
//     } 
//     reset() {} 
// }
// let stopWatch1 = new StopWatch("bcda","red");
// let stopWatch2 = new StopWatch("abcd","gray");
//SOLUTION FOR STOPWATCH
const stopwatch = {
  //Properties
  startTime: 0,
  stopTime: 0,
  duration: 0,
  isRunning: false,
  durations: [],
  //methods
  start() {
    if (this.isRunning) throw new Error("Watch has already started...");
    this.isRunning = true;
    this.startTime = new Date().getTime();
    console.log("Stop watch started at...", this.startTime);
  },
  stop() {
    if (!this.isRunning) throw new Error(`Watch hasn't started yet...`);
    this.isRunning = false;
    this.stopTime = new Date().getTime();
    this.duration = (this.stopTime - this.startTime) / 1000;
    console.log(this.duration);
  },

  takeReadings() {
    if (!this.isRunning) throw new Error(`Watch hasn't started yet`);
    let now = new Date().getTime();
    let interval = (now - this.startTime) / 1000;
    this.durations.push(interval);
    console.log(this.durations);
  },
  reset() {
    this.startTime = 0;
    this.stopTime = 0;
    this.isRunning = false;
  },
};
        

// class Television{
//     constructor(modelNo, color){
//         this.modeNo = modelNo;
//         this.color= color;
//     }
//     //#use for private field not for public use 
//     #MAX_VOLUME=10;//private properties
//     #MIN_VOLUME=0;//private properties
//     isRunning= false;
//     volume=0;
//     //getter and setter function
//     get volume() {
//         return this.#volume;
//     }
//     set volume(value){
//         if (!(value>this.#MIN_VOLUME && value this.#MAX_VOLUME))
//         throw new Error("invalid value");
//         this.#volume= value;
//     }
//     on(){
//         if (this.isRunning) throw new Error("Tv is already running...");
//         this.isRunning = true; 
//         console.log("tv has started...");

//     }
//     off(){
//         if(!this.isRunning) throw new Error("Tv hasn't started yet...");
//         this.isRunning = false;
//         console.log("Tv has stoped...");
//     }
//     volUp(){
//         if (!this.isRunning) throw new Error("Tv hasn't started yet...");
//         if(this.volume >=this.#MAX_VOLUME) throw new Error("Max volume reached...");
//         this.volume--;
//         console.log(this.volume);
//     }

// }
class Television {
  constructor(modelNo, color) {
    this.modelNo = modelNo;
    this.color = color;
  }
  #MAX_VOLUME = 10; //PRIVATE PROPERTY
  #MIN_VOLUME = 0; //PRIVATE PROPERTY
  isRunning = false;
  volume = 0;
  on() {
    if (this.isRunning) throw new Error("Tv is already running...");

    this.isRunning = true;
    console.log("Tv has started....");
  }
  off() {
    if (!this.isRunning) throw new Error("Tv hasn't started yet...");
    this.isRunning = false;
    console.log("Tv has stopped....");
  }
  volUp() {
    if (!this.isRunning) throw new Error("Tv hasn't started yet...");
    if (this.volume >= this.#MAX_VOLUME) throw new Error("Max volume reached");
    this.volume++;
    console.log(this.volume);
  }
  volDown() {
    if (!this.isRunning) throw new Error("Tv hasn't started yet...");
    if (this.volume <= this.#MIN_VOLUME) throw new Error("Min volume reached");
    this.volume--;
    console.log(this.volume);
  }
}
