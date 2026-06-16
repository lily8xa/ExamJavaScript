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
        const newPair={name:name,value:value}
        pairList.push(newPair)

        const li=document.createElement('li');
        result.appendChild(li);
         li.innerText=`${name}-${value}`;
        input.value='';
        const deleteButton= document.createElement("button")
        deleteButton.classList.add("delete-button");
        deleteButton.innerText=`&#x274c`
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){
            const index = pairList.indexOf(newPair);
            if (index !== -1) {
                pairList.splice(index, 1);
            }
            li.remove();

        });
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
            const index = pairList.indexOf(item);
            if (index !== -1) {
                pairList.splice(index, 1);
            }
            liName.remove();
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
            const index = pairList.indexOf(item);
            if (index !== -1) {
                pairList.splice(index, 1);
            }
            liValue.remove();
        })
    }

})

let deleteButton=document.getElementById("delete");
deleteButton.addEventListener("click", function(){
    const del=document.getElementById("comment");
    del.innerText='';
    pairList.length=0;

})
