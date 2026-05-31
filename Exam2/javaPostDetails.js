async function PostUserDetails(){

    const urlParms = new URLSearchParams(window.location.search);
    const postId = urlParms.get("id");
    console.log(urlParms);
    console.log(postId);

    let postDetails = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
        .then(response => response.json())
    const divDetails=document.getElementById('post-details')
    const userId=document.createElement('h1')
    userId.innerText=postDetails.userId
    console.log(postDetails)



divDetails.append(userId)

}
PostUserDetails()
