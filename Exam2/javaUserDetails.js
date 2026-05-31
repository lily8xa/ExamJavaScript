

async function mainDetails() {


    const urlParms = new URL(location.href);
    const userId = urlParms.searchParams.get("id");
    let usersDetails = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
    const details = document.getElementById('div-details')
    const uId = document.createElement('h2')
    uId.innerText = usersDetails.id
    const uName = document.createElement('h1')
    uName.innerText = usersDetails.name
    const usName = document.createElement('h2')
    usName.innerText = `User name-${usersDetails.username}`
    const usEmail = document.createElement('p')
    usEmail.innerText = `Email-${usersDetails.email}`
    const addressName = document.createElement('ul')
    addressName.innerText = `address`
    for (const addr in usersDetails.address) {

        const li = document.createElement('li')
        li.innerText = `${addr}: ${usersDetails.address[addr]}`
        const value = usersDetails.address[addr]
        if (typeof value === 'object' && value != null) {
            li.innerText = `${addr}: Lat ${value.lat}, Lng ${value.lng}`
        } else {
            li.innerText = `${addr}: ${value}`
        }


        addressName.appendChild(li)
    }
    const number = document.createElement('p')
    number.innerText = `phone:${usersDetails.phone}`
    const veb = document.createElement('p')
    veb.innerText = `website: ${usersDetails.website}`
    const company = document.createElement('ul')
    company.innerText = 'company'
    const company1 = usersDetails.company
    for (const com in company1) {



        const liCompany=document.createElement('li')
        liCompany.innerText = `${com}: ${company1[com]}`
        company.appendChild(liCompany)
        console.log(com)




}

    let titleInfo=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
    const buttonTitle=document.createElement("button")
    buttonTitle.classList.add("button-title")
    buttonTitle.innerText=`Post of current user ${userId}`

    const postContainer=document.createElement('div')
    postContainer.classList.add("postContainer")
    buttonTitle.addEventListener("click", () =>{

        postContainer.innerText=''


        const titlePost=document.createElement('ul')

        for(const tit of titleInfo) {


            const post=document.createElement('li')
            post.innerText=tit.title
            titlePost.appendChild(post)
            details.appendChild(titlePost)
            const postDetails=document.createElement('a')
            postDetails.classList.add("post-details")
            postDetails.innerText='Post Details'
            postDetails.href=`post-details.html?id=${tit.id}`
            post.appendChild(postDetails)



    }
        postContainer.appendChild(titlePost)



    })




    console.log(titleInfo)






    details.append(uId,uName,usName,usEmail,addressName,number,veb,company,buttonTitle,postContainer)

}

mainDetails()


