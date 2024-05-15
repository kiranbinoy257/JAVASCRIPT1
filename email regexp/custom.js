document.getElementById("email").addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    let str=/(.^[.*a-z]|[A-Z]|)$/
    let x= str.test(e.target.value)
    console.log(x);
})