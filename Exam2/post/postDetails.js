async function postUserDetails(){
try{
    const urlParms = new URLSearchParams(window.location.search);
    const postId = urlParms.get("id");


    const postDetails = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
    const divDetails=document.getElementById('post-details')
    const userId=document.createElement('h1')
    userId.innerText= `User id: ${postDetails.userId}`
    const id=document.createElement('p')
    id.innerText=`Id:${postDetails.id}`
    const title=document.createElement('h3')
    title.innerText=`${postDetails.title}`
    const body=document.createElement('p')
    body.innerText=`${postDetails.body}`

    const postComments=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    const commentDiv=document.getElementById('post-comments')
    for(const postComment of postComments){
        const divComment=document.createElement('div')
        divComment.classList.add('comment')
    const commentId=document.createElement('p')
    commentId.innerText=`ID:${postComment.id}`
    const comPostID=document.createElement('p')
    comPostID.innerText= `Post Id:${postComment.postId}`
    const commentName=document.createElement('h3')
    commentName.innerText=postComment.name
    const commentEmail=document.createElement('p')
    commentEmail.innerText=postComment.email
    const commentBody=document.createElement('p')
    commentBody.innerText=postComment.body
        divComment.append(commentId,comPostID,commentName,commentEmail,commentBody)
        commentDiv.append(divComment)
    }




divDetails.append(userId,id,title,body)
}catch (error){



    console.log(error)
}
}
postUserDetails()
