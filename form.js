let allinput=document.querySelectorAll("input");
let allcircle=document.querySelectorAll(".circle");
let error=document.querySelector(".error");
let button=document.querySelector(".submitt");
let button1=document.querySelector(".submitt1");
let bar=document.querySelector(".increasing");
let span=document.querySelector(".check")
let message=document.getElementById("message");
let alluserdata=JSON.parse(localStorage.getItem("formdata"))||{}
let increment=Object.values(alluserdata).filter((goal)=> goal.completed).length
if(increment==3){
    button.classList.remove("hide");
    button.addEventListener("click",()=>{
      button1.classList.remove("con")
      button.classList.add("hide");
      localStorage.setItem("user data",JSON.stringify(alluserdata))
    })
 }
 else{
    button1.classList.add("con")
    button.classList.add("hide");
    
 }

console.log(increment)
let array=[
    "Raise the bar when you complete the input",
    "One Phase Complete",
    "Second Phase Completed",
    "Congratulations "
]
  bar.style.width=`${increment/3*100}%`
         bar.style.backgroundColor="red"
bar.firstElementChild.innerHTML=`${increment}/3`
message.innerHTML=array[increment];
// console.log(increment);

allcircle.forEach((chcek)=>{
    chcek.addEventListener("click",()=>{
    const allfields1=[...allinput].every(function(input){
        return input.value;
    })
    if(allfields1){
        chcek.parentElement.classList.toggle("Completed")
        const getid=chcek.nextElementSibling.id;
         alluserdata[getid].completed= !alluserdata[getid].completed
        localStorage.setItem("formdata",JSON.stringify(alluserdata))
         increment=Object.values(alluserdata).filter((goal)=> goal.completed).length
         span.innerHTML=`${increment}/3 completed`
         message.innerHTML=array[increment];
         bar.style.width=`${increment/3*100}%`
         bar.style.backgroundColor="red"
         if(increment==3){
            button.classList.remove("hide");
            button.addEventListener("click",()=>{
                button1.classList.remove("con");
                button.classList.add("hide");
                localStorage.setItem("user data",JSON.stringify(alluserdata));
            })
            
         }
         else{
            button1.classList.add("con")
            button.classList.add("hide");
         }
       
    }
    else{
        error.classList.remove("error")
        error.style.color="red"
    }
    })
})
allinput.forEach((check)=>{
    check.value=alluserdata[check.id].name
    if(alluserdata[check.id].completed){
        check.parentElement.classList.add("Completed");
    }
    check.addEventListener("focus",()=>{
        error.classList.add("error")

    })
    check.addEventListener("input",()=>{
      alluserdata[check.id]={
        name:check.value,
        completed:false
      }
        localStorage.setItem("formdata",JSON.stringify(alluserdata));

    })

})


let tl1=gsap.timeline();
tl1.from(".container",{
    x:400,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
      
        start:"top 80%",
        end:"top 60%",
        scrub:2
      }

})
tl1.from("h1",{
    y:-100,
    opacity:0,
    duration:1,
    
})
tl1.from("#message",{
    y:-100,
    opacity:0,
    duration:1
})
tl1.from(".bar",{
    x:-200,
    opacity:0,
    duration:1
})
tl1.from("h4",{
    x:-200,
    opacity:0,
    duration:1
})
tl1.from(".circle",{
    x:100,
    opacity:0,
    duration:1
})
tl1.from("input",{
    x:-200,
    opacity:0,
    duration:1
})


