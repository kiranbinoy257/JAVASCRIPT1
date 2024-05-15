document.getElementById("input").addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    let regx=/^([0,1,2]\d|3[0,1])-([0]\d|1[0,1,2])-(\d{4})$/
    let x= regx.test(e.target.value)
    console.log(x);
    if(x){
        document.getElementById("detail").innerHTML=""
    }
    else{
        document.getElementById("detail").innerHTML="Inavali Date"

    }
})
