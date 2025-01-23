var B=document.querySelector("button")
var F1=document.querySelector("#F1")
var TITLE=document.querySelector("#title")
var BODY=document.querySelector("#body")
var USER_ID=document.querySelector("#user_id")

function fPostData(event){
    event.preventDefault()
    var title=TITLE.value 
    var body=BODY.value
    var user_id=USER_ID.value
    var url="https://jsonplaceholder.typicode.com/posts"
    var o={
        "title":title,
        "body":body,
        "userId":user_id
    }
    var parameters={
        "method":"post",
        "body":JSON.stringify(o)
    }
    fetch(url,parameters)
    .then(r=>{
        r.json()
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: "Success!",
                text: `Nouveau utilisateur ${data.id}!`,
                icon: "success"
              });
        })
    })

}




//B.addEventListener("click",fPostData)
F1.addEventListener("submit",fPostData)