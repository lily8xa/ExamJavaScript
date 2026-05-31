
let blockUsers=document.getElementById('users-name')
async function main(){


let users =await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    for(const user of users){
        const divUser=document.createElement("div")
        divUser.classList.add("div-user")
        const id=document.createElement("h3")
        id.innerText=`${user.id}`;
        const name=document.createElement("p")
        name.innerText=`${user.name}`;

        const button=document.createElement("a")
        button.classList.add("button")
        button.innerText=`Details ${user.id}`

        button.href=`user-details.html?id=${user.id}` /////////////

        divUser.append(id,name,button)
        blockUsers.appendChild(divUser)


    }



}
main()

