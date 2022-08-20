const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll(".slider-content-left-top img").length;
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li');

if(rightbtn && leftbtn && imgNumber && imgNumberLi ){
    function slider(){
        document.querySelector(".slider-content-left-top").style.right = index *100+"%";
        removeActive()
        imgNumberLi[index].classList.add('active');
    }
    
    let index = 0;
    rightbtn.addEventListener("click",function(){
        index = index+1;
        if(index>imgNumber-1){
            index = 0
        }
        slider();
        
    })
    
    leftbtn.addEventListener("click",function(){
        index = index-1;
        if(index<0){
            index = imgNumber-1;
        }
        slider();
    })
    
    
    // Slider 2 ********************
    
    imgNumberLi.forEach(function(element,i){
        element.addEventListener('click',function(){
            index = i;
            removeActive()
            document.querySelector(".slider-content-left-top").style.right = i *100+"%";
            element.classList.add('active');
        })
    })
    function removeActive(){
        let imgActive = document.querySelector('.active');
        imgActive.classList.remove('active');
    }
    
    // Slider 3 ********************
    function imgAuto() {
        index = index + 1;
        if(index>imgNumber-1){
            index = 0;
        }
        slider();
    }
    
    setInterval(imgAuto,7000);
    
}


// ********************Slider Product*******************//
var i = 0;
const rightbtnTwo = document.querySelector('.fa-chevron-right-two')
const leftbtnTwo = document.querySelector('.fa-chevron-left-two')
const divItemsNumber = document.querySelectorAll(".slider-product-one-content-items").length;


if(rightbtnTwo && leftbtnTwo && divItemsNumber){
        // console.log(divItemsNumber)
    rightbtnTwo.addEventListener("click",function(){
        
        i = i+1;
        if(i>divItemsNumber-1){
            i = 0
        }
        document.querySelector(".slider-product-one-content-items-content").style.right = i *100+"%";
        
    })

    leftbtnTwo.addEventListener("click",function(){
        i = i-1;
        if(i<0){
            i = divItemsNumber-1;
        }
        document.querySelector(".slider-product-one-content-items-content").style.right = i *100+"%";
    })

}   



// ********************Slider Detail Product*******************//
let num = 0;
const rightbtnThree = document.querySelector('.fa-chevron-right-three');
const leftbtnThree = document.querySelector('.fa-chevron-left-three');
const imgItemsNumber = document.querySelectorAll(".detail-product-contain-content-left-slider img").length;
const titleImg= document.querySelectorAll('.detail-product-contain-content-left-title li');

rightbtnThree.addEventListener("click",function(){
    num = num+1;
    if(num>imgItemsNumber-1){
        num = 0
    }
    document.querySelector(".detail-product-contain-content-left-slider").style.right = num *100+"%";
    
})

leftbtnThree.addEventListener("click",function(){
    num = num-1;
    if(num<0){
        num = imgItemsNumber-1;
    }
    document.querySelector(".detail-product-contain-content-left-slider").style.right = num *100+"%";
})

// Click title
titleImg.forEach(function(element,i){
    element.addEventListener('click',function(){
        num = i;
        removeActive()
        document.querySelector(".detail-product-contain-content-left-slider").style.right = num *100+"%";
        element.classList.add('active');
    })
})
function removeActive(){
    let imgActive = document.querySelector('.active');
    imgActive.classList.remove('active');
}



// Remove atribute hidden raiting
var btnRaiting = document.querySelector("#btn-raiting");
var formRaitingHidden = document.querySelector("#form-raiting-hidden");
if(btnRaiting){
    btnRaiting.addEventListener('click',function () {
        formRaitingHidden.removeAttribute('hidden');
    });
}
