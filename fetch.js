// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data);})
// .catch((error)=>{console.log(error);})


// FETCH BUTTON

function getData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data);
        str=``
        data.map((post)=>{
            str+=`<li>${post.id}-></li>`
        })
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{console.log(error);})
}