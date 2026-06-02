let arrResultName=[]
let arrResultValue=[]

const buttonAdd=document.getElementById("button-a");
buttonAdd.addEventListener("click", function(){
    const input=document.getElementById("name");
    const notNow=document.getElementById("not");
    const result=document.getElementById("comment");



    const valueIn=input.value.replace(/\s+/g,'')
    const regular=valueIn.match(/^[a-zA-Z0-9= ]+$/)



    const valueInput= regular;

    if(!valueInput){
        notNow.innerText='not correct "Name=Value"'
    }else if(!valueIn.includes('=')){
        notNow.innerText='not correct "Name=Value"'
        }
    else {
        notNow.innerText='';
        const pair=valueInput[0].split(`=`)
        const name=pair[0]
        const value=pair[1]
        arrResultName.push(name);
        arrResultValue.push(value);

        const li=document.createElement('li');
        result.appendChild(li);
         li.innerText=valueInput;
        input.value='';

    }

})

let sortName=document.getElementById("sort-name");
sortName.addEventListener("click", function(){
    const resultName=document.getElementById("comment");
   resultName.innerText='';

   let nameSort=arrResultName.sort((a, b) =>
       a.localeCompare(b));
   for(const item of nameSort){
       const liName=document.createElement('li');
       liName.innerText=item;
       resultName.appendChild(liName);
   }

})

let sortValue=document.getElementById("sort-value");
sortValue.addEventListener("click", function(){
    const resultValue=document.getElementById("comment");
    resultValue.innerText='';

    let valueSort=arrResultValue.sort((a, b) =>a.localeCompare(b));
    for(const item of valueSort){
        const liValue=document.createElement('li');
        liValue.innerText=item;
        resultValue.appendChild(liValue);
    }

})

let deleteButton=document.getElementById("delete");
deleteButton.addEventListener("click", function(){
    const del=document.getElementById("comment");
    del.innerText='';
    arrResultName.length=0;
    arrResultValue.length=0;

})
