


var typed = new Typed('.profession', {
    strings: ['Front_End Developer','Software Engineer','web_designer'],
    typeSpeed: 100,
    backSpeed:100,
    loop:true
  });

let allprog=document.querySelectorAll(".prog");
  let html_value=document.querySelector(".inner_htmlvalue")
  let css_value=document.querySelector(".inner_cssvalue")
  let java_value=document.querySelector(".inner_javavalue")
  let h=0;
  let c=0;
  let j=0;
  let html=setInterval(()=>{
    h++;
    html_value.innerText=`${h}%`
   allprog[0].style.background=`conic-gradient(rgb(0,0,321) ${3.6*h}deg,black 0deg)`
    if(h==90){
      clearInterval(html);
      
    }

  },30)
  let css=setInterval(()=>{
    c++;
    css_value.innerHTML=`${c}%`;
    allprog[1].style.background=`conic-gradient(rgb(0,0,321) ${3.6*h}deg,black 0deg)`
    if(c==85){
      clearInterval(css);
    }
  },30)
  let java=setInterval(()=>{
    j++;
    java_value.innerHTML=`${j}%`;
    allprog[2].style.background=`conic-gradient(rgb(0,0,321) ${3.6*h}deg,black 0deg)`
    if(j==80){
      clearInterval(java);
    }
  },30)
  let inner_linear=document.querySelectorAll(".inner_linear")
  let rprog=document.querySelector(".inner_react_prog")
  let jprog=document.querySelector(".inner_java1_prog")
  let oprog=document.querySelector(".inner_oop_prog")
  let pprog=document.querySelector(".inner_python_prog")
  let dprog=document.querySelector(".inner_dsa_prog")
  let jvalue=document.querySelector("#java_value")
  let pvalue=document.querySelector("#python_value")
  let rvalue=document.querySelector(".react_value")
  let ovalue=document.querySelector("#oop_value")
  let dvalue=document.querySelector("#dsa_value")
  let r=0;
  let p=0;
  let o=0;
  let ja=0;
  let ds=0;
  let jas=setInterval(()=>{
    ja++;
    jvalue.innerHTML=`${ja}%`;
    jprog.style.width=`${60*(1/100)*ja}vw`
    if(r==70){
      clearInterval(jas);
    }
    
  },30)
  let react=setInterval(()=>{
    r++;
    rvalue.innerHTML=`${r}%`;
    rprog.style.width=`${60*(1/100)*r}vw`
    if(r==85){
      clearInterval(react);
    }
    
  },30)
  let oop=setInterval(()=>{
    o++;
    ovalue.innerHTML=`${o}%`;
    oprog.style.width=`${60*(1/100)*o}vw`
    if(o==90){
      clearInterval(oop);
    }
    
  },30)
  let python=setInterval(()=>{
    p++;
    pvalue.innerHTML=`${p}%`;
    pprog.style.width=`${60*(1/100)*p}vw`
    if(p==90){
      clearInterval(python);
    }
    
  },30)
  let dsa=setInterval(()=>{
    ds++;
    dvalue.innerHTML=`${ds}%`;
    dprog.style.width=`${60*(1/100)*ds}vw`
    if(ds==75){
      clearInterval(dsa);
    }
    
  },30)

  // import {gsap} from "gsap";
  // import { ScrollTrigger } from "gsap/ScrollTrigger";
  // gsap.registerPlugin(ScrollTrigger);
let tl=gsap.timeline()
tl.from(".navbar",{
  x:-200,
  opacity:0,
  duration:1

})
tl.from(".leftnav",{
  y:-100,
  opacity:0,
  duration:1
})
tl.from(".border",{
  y:-100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".heading",
    scroller:"body",
    
    start:"top 80%",
    end:"top 60%",
    scrub:2
  }
})
tl.from(".list-item",{
  y:-100,
  opacity:0,
  duration:.8,
  stagger:1
})
let tl2=gsap.timeline()
tl2.from(".line",{
  x:-80,
  opacity:0,
  duration:1,
  stagger:1
})
tl2.from(".cv",{
  x:-200,
  opacity:0,
  duration1:1
})
let tl3=gsap.timeline()
tl3.from(".right_img",{
  x:200,
  opacity:0,
  duration:1
})
tl3.from(".heading",{
  x:-200,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".heading",
    scroller:"body",
  
    start:"top 80%",
    end:"top 60%",
    scrub:2
  }
})
tl3.from(".about_details",{
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".about_details",
    scroller:"body",
  
    start:"top 70%",
    end:"top 50%",
    scrub:2
  }
})
tl3.from(".box",{
  x:100,
  opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:".box",
    scroller:"body",
   
    start:"top 70%",
    end:"top 50%",
    scrub:2
  }
})
let tl4=gsap.timeline()
tl4.from(".head_skill",{
  x:-200,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".head_skill",
    scroller:"body",
   
    start:"top 70%",
    end:"top 50%",
    scrub:2
  }
})
tl4.from(".prog",{
  x:100,
  opacity:0,
  rotate:360,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:".prog",
    scroller:"body",
 
    start:"top 60%",
    end:"top 30%",
    scrub:4
  }
 

})

tl4.from(".linear_prog",{
  x:200,
  opacity:0,
  duration:1,
  rotate:360,
  scrollTrigger:{
    trigger:".linear_prog",
    scroller:"body",
   
    start:"top 80%",
    end:"top 60%",
    scrub:2
  }
})
let tl5=gsap.timeline()
tl5.from(".cv1",{
  x:200,
  opacity:0,
  duration:1,
  stagger:1,
  
 
  
})
tl5.from(".cv2",{
  x:-200,
  opacity:0,
  duration:1,
 
  


})
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
     
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }

})
tl1.from("h1",{
    y:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:"h1",
      scroller:"body",
     
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
    
})
tl1.from("#message",{
    y:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:"#message",
      scroller:"body",
     
      start:"top 70%",
      end:"top 30%",
      scrub:2
    }
})
tl1.from(".bar",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:".bar",
      scroller:"body",
     
      start:"top 70%",
      end:"top 30%",
      scrub:2
    }
})
tl1.from("h4",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:"h4",
      scroller:"body",
     
      start:"top 70%",
      end:"top 30%",
      scrub:2
    }
})
tl1.from(".circle",{
    x:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:".circle",
      scroller:"body",
     
      start:"top 70%",
      end:"top 40%",
      scrub:2
    }
})
tl1.from("input",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:"input",
      scroller:"body",
     
      start:"top 70%",
      end:"top 40%",
      scrub:2
    }
})
tl1.from(".h",{
  x:-200,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".h",
    scroller:"body",
    start:"top 70%",
    end:"top 50%"
  }
})
tl1.from(".theory",{
  x:-200,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".theory",
    scroller:"body",
    start:"top 70%",
    end:"top 50%"
  }
})
let a1=gsap.timeline();
a1.from(".img",{
  x:300,
  opacity:0,
  duration:1})
//   scrollTrigger:{
//     trigger:".l",
//     scroller:"body",
//     start:"top 70%"
//     // end:"top 50%"
//   }
// })



