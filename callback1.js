function orderfood(callback){
    setTimeout(()=>{
        console.log("food ordered");
        callback()
    },3000)
}
function decorateVenue(callback){
    setTimeout(()=>{
        console.log("venue Decorated");
        callback()
    },3000)
}
function arrangeDJ(callback){
    setTimeout(()=>{
        console.log("DJ arranged");
        callback()
    },3000)
}
decorateVenue(()=>{
    orderfood(()=>{
        arrangeDJ(()=>{
            console.log("program finished");

        })
    })
})