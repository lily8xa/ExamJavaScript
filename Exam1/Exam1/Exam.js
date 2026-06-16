const pairList=[]


const buttonAdd=document.getElementById("button-a");
buttonAdd.addEventListener("click", function(){
    const input=document.getElementById("name");
    const errorMessage=document.getElementById("not");
    const result=document.getElementById("comment");



    // const valueIn=input.value.replace(/\s+/g,'')
    const valueIn=input.value.trim();
    const regular=valueIn.match(/^[a-zA-Z0-9=]+=[a-zA-Z0-9]+$/)



    // const valueInput= regular;

    if(!regular) {
        errorMessage.innerText = 'not correct "Name=Value"'
    }
    else {
        errorMessage.innerText='';
        const pair=valueIn.split(`=`)
        const name=pair[0]
        const value=pair[1]
        pairList.push({name:name,value:value})

        const li=document.createElement('li');
        result.appendChild(li);
         li.innerText=`${name}-${value}`;
        input.value='';
        const deleteButton= document.createElement("button")
        deleteButton.classList.add("delete-button");
        deleteButton.innerText=`&#x274c`
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){
            li.innerText=''
        })
        console.log(pairList)

    }

})

const sortName=document.getElementById("sort-name");
sortName.addEventListener("click", function(){
    const resultName=document.getElementById("comment");
   resultName.innerText='';

    const nameSort = [...pairList].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

    for(const item of nameSort){

       const liName=document.createElement('li');

       liName.innerText=`${item.name}-${item.value}`;
        const deleteButton= document.createElement("button")
        deleteButton.classList.add("delete-button");
        deleteButton.innerText=`&#x274c`
       liName.appendChild(deleteButton)
       resultName.appendChild(liName);
        deleteButton.addEventListener("click", function(){
            liName.innerText=''
        })
   }

})

const sortValue=document.getElementById("sort-value");
sortValue.addEventListener("click", function(){
    const resultValue=document.getElementById("comment");
    resultValue.innerText='';

    let valueSort=[...pairList].sort((a, b) => a.value.localeCompare(b.value, undefined, { numeric: true }));
    for(const item of valueSort){
        const liValue=document.createElement('li');
        liValue.innerText=`${item.name}-${item.value}`;
        resultValue.appendChild(liValue);
        const deleteButton= document.createElement("button")
        deleteButton.classList.add("delete-button");
        deleteButton.innerText=`&#x274c`
        liValue.appendChild(deleteButton)
        deleteButton.addEventListener("click", function(){
            liValue.innerText=''
        })
    }

})

let deleteButton=document.getElementById("delete");
deleteButton.addEventListener("click", function(){
    const del=document.getElementById("comment");
    del.innerText='';
    pairList.length=0;

})
