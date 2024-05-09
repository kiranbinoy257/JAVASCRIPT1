// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data);})
// .catch((error)=>{console.log(error);})


// FETCH BUTTON

// function getData(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{return res.json()})
//     .then((data)=>{
//         console.log(data);
//         str=``
//         data.map((post)=>{
//             str+=`<li>${post.id}->${post.title}->${post.body}</li>`
//         })
//         document.getElementById("list").innerHTML=str
//     })
//     .catch((error)=>{console.log(error);})
// }

function getData(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data);
        str=``
        data.map((todo)=>{
            str+=`<li>${todo.id}---${todo.completed}-------------${todo.title}</li>`
        })
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{console.log(error);})
}