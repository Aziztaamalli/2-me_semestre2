var TBODY=document.querySelector("#TBODY")
var BLOAD=document.querySelector("#BLOAD")
var BGAME=document.querySelector("#BGAME")
var JEU=document.querySelector("#JEU")
var NGAME=document.querySelector("#NGAME")

var FORM=document.querySelector("form")
var TITLE=document.querySelector("#TITLE")
var BODY=document.querySelector("#BODY")
var USERID=document.querySelector("#USER_ID")
async function fLoadData(){
    let url="https://jsonplaceholder.typicode.com/posts"
    let reponse= await fetch(url)
    let data=await reponse.json();
    
    for(let d of data){
            let code=`<tr>
                        <td>${d.id}</td>
                        <td>${d.title}</td>
                    </tr>`
            TBODY.innerHTML+=code

    }


}
async function fGAME(){
    let ngame=NGAME.value
    let url=`http://numbersapi.com/${ngame}/math?json`
    let reponse=await fetch(url)
    let data=await reponse.json()
    JEU.innerHTML=data.text



}
async function addUSER(event){
    event.preventDefault()
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
BLOAD.addEventListener("click",fLoadData)
BGAME.addEventListener("click",fGAME)
FORM.addEventListener("submit",addUSER)

