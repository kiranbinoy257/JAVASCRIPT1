const result=new Promise((resolve,reject)=>{
    const response=true
    data="hello team"
    if(response){
        resolve(data)
    }
    else{
        reject("This is error message")
    }
})
result
.then((val1)=>{console.log(val1);return msg="hello"}) 
.then((val2)=>{console.log(val2);return msg="haii"})
.then((val3)=>{console.log(val3);})
.catch((error)=>{console.log(error);})