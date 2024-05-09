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
            str+=`<li>${todo.completed?"complete":"notcomplete"}//////////////////////////${todo.title}</li>`
        })
        console.log(str);
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{console.log(error);})
    .then((val))
}




// function shilaf(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{return res.json()})
//     .then((data)=>{
//         console.log(data)
//         document.getElementById("list").innerHTML=data
//     })}
