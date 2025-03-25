

const submit = document.getElementById("sub");
const nam = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("msg");
const logo = document.getElementById("logo");

if(submit || nam || subject || message){
submit.addEventListener("click", ()=>{
    if(!message.value  || !nam.value  || !subject.value)
        {
            alert("complete all fields")
        }else{
            alert("message is submited.Thank you 😁")

        }
})
}

if(logo){
    logo.addEventListener("click", ()=>{
        const body = document.querySelector("body");
        const greeting = document.createElement("div");
        greeting.textContent = "hellooooo";
        greeting.style.color= "white";
        greeting.style.position= "fixed";
        greeting.style.top= "0";
        greeting.style.fontSize= "6rem";
        greeting.style.fontWeight= "900";
        greeting.style.display= "flex";
        greeting.style.justifyContent= "center";
        greeting.style.alignItems= "center";
        greeting.style.zIndex= "9999";
        greeting.style.transition= "all 2s ease-in-out";
        greeting.style.width= "100%";
        greeting.style.height= "100%";
        body.appendChild(greeting);

        setTimeout(() => {
           body.removeChild(greeting);

        }, 2000)
       

    })
}