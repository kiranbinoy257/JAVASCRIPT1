function goodBye(){
    console.log("good bye");
}
function greet(name,callback){
    setTimeout(()=>{
        console.log(`hello${name}`);
        callback();

    },3000)
   
}
greet("alan",goodBye)