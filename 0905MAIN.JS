async function getdata(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json()
    console.log(data);
    str=``
    data.map((post)=>{
        str+=`<h3 onclick="details(${users.id})">${user.name}</h3>`
    })

    document.getElementById("list").innerHTML=str

}

function details(id){
    console.log(id);
    window.location.href=`templates/details.html?id=${id}`
}