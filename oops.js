const person ={
    //properties
    name:"rohit",
    age:22,
    lacation:"Mohali",
    //method
    speak : function(){
        console.log(this.name,'is Speaking...')
    },
    walk: function(){
        console.log(this.name,'is walking');
    },
};
const tv ={
    //properties
    modelNo:"fohalhlkjhdfj234",
    color: "gray",
    currentVolume:0,
    isRunning:"false",
    //method
    on() {
        if(this.isRunning) throw new Error("tv has already running");
        this.isRunning = true;
        console.log("tv is now on");
    },
    off() {
        if(this.isRunning) throw new Error(`TV hasn't started yet`);
        this.isRunning = false;
        console.log("tv has turned off");
    },
    volUp() {
         if(this.isRunning) throw new Error(`TV hasn't started yet`);
        this.currentVolume++;
        console.log("this.currentVolume");
    },
    volDown() {
          if(this.isRunning) throw new Error(`TV hasn't started yet`);
          this.currentVolume--;
        console.log("this.currentVolume");},
};
// //STOPWATCH
// const stopwatch = {
//   //Properties
//   startTime: 0,
//   stopTime: 0,
//   duration: 0,
//   isRunning: false,
//   durations: [],
//   //methods
//   start() {
//     if (this.isRunning) throw new Error("Watch has already started...");
//     this.isRunning = true;
//     this.startTime = new Date().getTime();
//     console.log("Stop watch started at...", this.startTime);
//   },
//   stop() {
//     if (!this.isRunning) throw new Error(`Watch hasn't started yet...`);
//     this.isRunning = false;
//     this.stopTime = new Date().getTime();
//     this.duration = (this.stopTime - this.startTime) / 1000;
//     console.log(this.duration);
//   },

//   takeReadings() {
//     if (!this.isRunning) throw new Error(`Watch hasn't started yet`);
//     let now = new Date().getTime();
//     let interval = (now - this.startTime) / 1000;
//     this.durations.push(interval);
//     console.log(this.durations);
//   },
//   reset() {
//     this.startTime = 0;
//     this.stopTime = 0;
//     this.isRunning = false;
//   },
// };

//for multiple stopwatches we have to use classses in  clsddrd yhrtr id sn onject



