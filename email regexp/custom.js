
document.getElementById("email").addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    let regx=/^([a-z A-Z]+|)([0-9 \._]+)@([a-z A-Z 0-9])+.([a-z]+)(.[a-z]+)?$/
    let x= regx.test(e.target.value)
    console.log(x);
    if(x){
        document.getElementById("res").innerHTML="Sucessfull"
    }
    else{
        document.getElementById("res").innerHTML="Inavalid Email id"

    }
})

document.getElementById("userid").addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    let regx=/^([a-z A-Z]+|)([0-9 \.]+)([a-z A-Z 0-9])+.([a-z]+)(.[a-z]+)?$/
    let x= regx.test(e.target.value)
    console.log(x);
    if(x){
        document.getElementById("user").innerHTML="Sucessfull"
    }
    else{
        document.getElementById("user").innerHTML="Inavalid User Id "

    }
})


document.getElementById("password").addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    let regx=/^([a-z A-Z]+|)([0-9 \.]+)([a-z A-Z 0-9])+.([a-z]+)(.[a-z]+)?$/
    let x= regx.test(e.target.value)
    console.log(x);
    if(x){
        document.getElementById("pass").innerHTML="Sucessfull"
    }
    else{
        document.getElementById("pass").innerHTML="Inavalid Password"

    }
})