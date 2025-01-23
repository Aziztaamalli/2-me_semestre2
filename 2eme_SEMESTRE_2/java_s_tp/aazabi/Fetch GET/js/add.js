

var FORM=document.querySelector("form")
var TITLE=document.querySelector("#TITLE")
var BODY=document.querySelector("#BODY")
var USERID=document.querySelector("#USER_ID")
async function addUSER(event){

    let url="https://jsonplaceholder.typicode.com/posts"
    let header={
        "Content-Type":"application/json"
    }
    let o={
        "title": TITLE.value,
        "body": BODY.value,
        "userId": USERID.value
    }
    let parametrs={
        "method":"POST",
        "body":JSON.stringify(o),
        "headers":header
    }
    let reponse=await fetch(url, parametrs)
    let data=await reponse.json()
    alert(data.id)



}
FORM.addEventListener("submit",addUSER)