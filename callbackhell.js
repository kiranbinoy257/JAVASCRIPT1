const result=new Promise((resolve,reject)=>{
    return reject("error will show")
    // return resolve("sucess message")
})
result.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);})