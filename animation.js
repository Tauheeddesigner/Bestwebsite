document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

   

    
});
const allinput=document.querySelectorAll("input")
const submit=document.querySelector(".submitt");
const contact=document.querySelector(".hide");
const error=document.querySelector(".error")

submit.addEventListener("click",()=>{
    const allfields1=[...allinput].every(function(input){
        return input.value;
    })
    if(allfields1){
        const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

        submit.classList.add("hide")
        contact.classList.remove("hide")
        alert(`Form Submitted!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
        document.querySelector(".container").style.backgroundColor="blue"
        document.querySelector("body").style.backgroundColor="green"
       contact.style.backgroundColor="black"
        contact.style.color="white"
    }
    else{
        error.classList.remove("error")
    }
   allinput.forEach((input)=>{
    input.addEventListener("focus",()=>{
        error.classList.add("error")
    })
   })
})

