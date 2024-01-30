//check if there's local storage color option
let mainColors=localStorage.getItem("color-option");
if(mainColors!==null){
   // console.log('local storage is not empty');
   // console.log();
   document.documentElement.style.setProperty('--main-color',mainColors);
   //check for Active Class
    //remove active class from all colors list item
   document.querySelectorAll(".colors-list li").forEach(element=>{
        element.classList.remove("active"); 
        
        if(element.dataset.color===mainColors)
        {
        element.classList.add("active");
        }
    });
    //add active class on element with data==color storage
   
}
//select landing page
let landingPage=document.querySelector(".landing-page");

//get array of images
let imagesArray=["01.jpg","02.jpg","03.jpg"];


setInterval(()=>{
    //get Random number
    let randomNumber=Math.floor(Math.random() * imagesArray.length);
    //change background image url
    landingPage.style.backgroundImage='url("imgs/'+imagesArray[randomNumber] +'")';

},2000);
//background option
//let backgroundOPtin=true;
//variable to control the Interval
//let backInterval;

//function to randomize images
//function randomizeImgs(){
   // if(backgroundOPtin===true){
   

  //  }
//}

//toggle spin icons//
document.querySelector(".toggle-settings .fa-cog").onclick=function(){

    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");

};
//switch colors
const colorsLi=document.querySelectorAll(".colors-list li");
colorsLi.forEach(li=>{
    li.addEventListener("click",(e)=>{

        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        //set color in local storage
        localStorage.setItem("color-option",e.target.dataset.color);
       
        handleActive(e);
    });
});
//switch background option random
const randomBackEl=document.querySelectorAll(".random-backgrounds span");
//loop on all spans
randomBackEl.forEach(span=>{
    //click on every span
    span.addEventListener("click",(e)=>{
       handleActive(e);

        if(e.target.dataset.background==='yes'){
            //console.log("yes");
            backgroundOPtin=true;
            randomizeImgs();
        }
        else{
            backgroundOPtin=false;
            clearInterval(backInterval)
        }
    });
});
//select skills selector
let ourSkills=document.querySelector(".skills");
window.onscroll=function(){
    //skills ofSet top
    let skillsOffsetTop = ourSkills.offsetTop;
    
    //outer height
    let skillsOuterHeight=ourSkills.offsetHeight;
    //window Height
    let windowHeight=this.innerHeight;
    //window ScrollTop
    let windowScrollTop = this.pageYOffset;
    if(windowScrollTop>(skillsOffsetTop+skillsOuterHeight-windowHeight)){
     // this.console.log('skills section Reached');
     let allSkills =document.querySelectorAll(".skill-box .skill-progress span");
     allSkills.forEach(skill => {
        skill.style.width=skill.dataset.progress;
     })
    }
    this.console.log(skillsOuterHeight);
};
//create popup with the image
let ourGallery=document.querySelectorAll(".gallery img");
ourGallery.forEach(img =>{
    img.addEventListener('click',(e)=>{
        //create overlay element
        let overlay =document.createElement("div");
        //add class  To Overlay
        overlay.className='popup-overlay';
        //append overlay To The Body
        document.body.appendChild(overlay);
        //create the popup
        let popupBox=document.createElement("div");
        //add class to this popup Box
        popupBox.className='popup-box';
        if(img.alt!==null)
        {
          //create heading
          let imgHeading =document.createElement("h3");
         //create txt for hidden
         let imgText=document.createTextNode(img.alt);
         //append the text to the Heading
         imgHeading.appendChild(imgText);
         //append the heading to the popup box
         popupBox.appendChild(imgHeading);

        }
        //create the image
        let popupImage=document.createElement("img");
        //set image source
        popupImage.src=img.src;
        //add image
        popupBox.appendChild(popupImage);

        //append the popup box to body
        document.body.appendChild(popupBox);

        //create the close span
        let closeButton=document.createElement("span");
        //create the close button
        let closeButtonText=document.createTextNode("x");
        //append text to close button
        closeButton.appendChild(closeButtonText);
        //add class to close btn
        closeButton.className='close-button';
        //add close btn to the popup box
        popupBox.appendChild(closeButton);

        
    })
});
//close popup
document.addEventListener("click",function(e){
   if(e.target.className=='close-button'){
    //remove the current 
    e.target.parentNode.remove();
    //remove Overlay 
    document.querySelector(".popup-overlay").remove();
   }
})
//select All bullets
const allBullets=document.querySelectorAll(".nav-bullets .bullets");

//select All links
const allLinks=document.querySelectorAll(".links a");

function scrollToSomeWhere(elements){
    elements.forEach(ele=>{
    ele.addEventListener("click",(e)=>{
        e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
}
scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);
//handle active state
function handleActive(ev){
     //remove active class from all child
     ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
    });
    //add active class on self
    ev.target.classList.add("active");
}

let bulletSpan=document.querySelectorAll(".bullets-option span");
let bulletsContainer=document.querySelector(".nav-bullets");
bulletSpan.forEach(span=>{
    span.addEventListener("click",(e)=>{
        if(span.dataset.display==='show'){
            {
                bulletsContainer.style.display='block';
            }
        }
        else{
            bulletsContainer.style.display='none';
        }
        handleActive(e);
    })
})
//reset btn
document.querySelector(".reset-options").onclick=function(){
    localStorage.clear();
    //localStorage.removeItem("bullets-option")
    //localStorage.removeItem("colors-option")
     window.location.reload();
}
//toggle menu
let toggleBtn=document.querySelector(".toggle-menu");
let tLinks=document.querySelector(".links");

toggleBtn.onclick=function (e) {
    //stop propagation
    e.stopPropagation();
}

toggleBtn.onclick=function(){

    this.classList.toggle("menu-active");
    tLinks.classList.toggle("open");

};
//click anyway out side menu and toggle btn
document.addEventListener("click",(e)=>{
    if(e.target!==toggleBtn && e.target!==tLinks){
//check if menu open
    if(tLinks.classList.contains("open"))
    {
        toggleBtn.classList.toggle("menu-active");
        tLinks.classList.toggle("open");
    }
    }
})

//stop prot
tLinks.onclick=function(e){
    e.stopPropagation();
}