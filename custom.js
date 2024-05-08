class Car{
    color="green";
    wheel=4;
    segment="sedan"
    automaticGear(){
        console.log("Car have automatic Gear");
    }
    manualGear(){
        console.log("Car have manual Gear");
    }
    features(){
        console.log("power stearing");
        console.log("power window");
        console.log("inforntainment system");
        console.log("reverse camera");
    }
}
alto=new Car();
console.log(alto.color);
console.log(alto.segment);
console.log(alto.wheel);
alto.automaticGear()
alto.features()
