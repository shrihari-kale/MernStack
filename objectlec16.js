/*let mother = {
    name: "priya singh",
    age: 33,
    address : "Baner,pune",
    city: "pune",
};

let student={
    name: "pratik patil",
    age: 15,
    standard: "10th",
    gender: "male",
    address: "bhosari,pune",
    section: "c",
};


mother.occupation = "housewife"; // add in object
mother.age = 34; // update object
console.log({mother,student});


// create a vehicle object that has following properties:
//Number of seat, top speed, mileage, number of airbags

let vehicle1 = {
    seat: 6,
    speed: 100,
    mileage: 25,
    airbag: 4,
};

// updating the number of seart
vehicle1.seat = 4;

// adding a property in vehicle
vehicle1.colors =["White","black","grey"];

// deleting a property in vehicle

delete vehicle1.airbag;

// nested object
vehicle1.address = {
    addressLine1: "Area tower",
    addressLine2: "Baner",
    city: "pune",
    state: "Maharashtra",
};


console.log({vehicle: vehicle1});

console.log("city of vehicle address:",vehicle1?.address?.city);

// accessing a property that is not yet defind

console.log(vehicle1.name);

vehicle1.name = "scarpio"

const vehicle2 ={
    name: "Thar",
    seat: 4,
    speed: 180,
    mileage: 40,
    colors:["white","black","grey"],
    address : {
    addressLine1: "Area tower",
    addressLine2: "Baner",
    city: "pune",
    state: "Maharashtra",
    },
};
  
// array of object

const vehicles = [vehicle1,vehicle2];
console.log({vehicles});


// quetion: print name of the vehicle and it's city from vehicle array 

 for (let i = 0; i<vehicles.length; i++){
    console.log("name of vehicle:",vehicles[i]?.name);
    console.log("name of the city:",vehicles[i]?.address?.city);
 }

 console.log("vehicle1.name",vehicle1.name);
 console.log('vehicle["name"]',vehicles["name"]);


 // for.... in loop in object

 console.log("printing the vehicle1 object using for...in loop");
 for(let key in vehicle1){
    console.log(key +":"+vehicle1[key]);
 }

 // object.key (objectNAME)

 const vehicleObjkeys = Object.keys(vehicle1);
 const addressObjkeys = Object.keys(vehicle1.address);
 console.log({vehicleObjkeys,addressObjkeys});

 // object.value(objName)gives the array of value 

 const vehicleObjvalue = Object.values(vehicle1);
 const addressObjvalue = Object.values(vehicle1.address);
 console.log({vehicleObjvalue,addressObjvalue});

 // for... of loop in array of object 

 console.log("printing the array of objects using for...of loop");
 for(let value of vehicles){
    console.log(value);   
 }

 // change the value of city to mumbai, if city is pune using for... of loop

 for(let vehicle of vehicles){
    if(vehicle?.address?.city === "pune"){
        vehicle.address.city = "Mumbai";
    }
 }
 let vehicle3 ={
    name: "XUV700",
    seat: 7,
    speed: 180,
    currentspeed:100,
    mileage: 40,
    colors:["white","black","grey"],
    address : {
    addressLine1: "Area tower",
    addressLine2: "Baner",
    city: "pune",
    state: "Maharashtra",
    },
isRunning: function () {
    if(this.currentSpeed > 0)
     console.log("XUV is running at speed"+this.currentSpeed);
    else console.log("XUV is not running");
   
},
 };

 vehicle3.isRunning();
 vehicle3.currentspeed = 0;
 vehicle3.isRunning();*/

 /* implement this resume managment system */

 const resume = {
    name:"Shrihari",
    email:"shriharikale16@gmail.com",
    phone: "956231488",
    skills:["HTML","CSS","javascript"],
    workExperience: "none",

    display:function(){
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
    console.log("Skills:", this.skills.join(", "));
  //  console.log("Work Experience:", this.workExperience.join(", "));
  },

    addSkills: function(newskill) {
    this.skills.push(newskill);
    },


    addWorkExperience: function (newExperience){
        this.addWorkExperience.push(newExperience);
        console.log('${newExperience}added to work experience.');
    },

showSkilla: function (){
    console.log("Skills"+this.skills.join(","));

    
},
 };

 resume.display();
 console.log("resume");
 resume.addSkills("React");
 resume.addWorkExperience("Acciojob");
 console.log("resume");
 resume.showSkills();
 resume.display();

 