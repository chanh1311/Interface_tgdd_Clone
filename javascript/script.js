
// Define function custom class active
function removeActive(){
    let imgActive = document.querySelector('.active');
    imgActive.classList.remove('active');
}

// ********************* Slider Index ************************** 
// Get element
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll(".slider-content-left-top img").length;
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li');


if(rightbtn && leftbtn && imgNumber && imgNumberLi ){
    // Define Function Slider
    function slider(){
        document.querySelector(".slider-content-left-top").style.right = index *100+"%";
        removeActive()
        imgNumberLi[index].classList.add('active');
    }
    
    // Event Click left,right
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
    
    
 
 

    // Event Click Title
    imgNumberLi.forEach(function(element,i){
        element.addEventListener('click',function(){
            index = i;
            removeActive()
            document.querySelector(".slider-content-left-top").style.right = i *100+"%";
            element.classList.add('active');
        })
    })
    
    
    // Slider 3 ********************

    // Define function auto Slider
    function imgAuto() {
        index = index + 1;
        if(index>imgNumber-1){
            index = 0;
        }
        slider();
    }
    // Use function auto Slider
    setInterval(imgAuto,7000);
    
}


// ********************Slider Product*******************//

// Get Element
const rightbtnTwo = document.querySelector('.fa-chevron-right-two')
const leftbtnTwo = document.querySelector('.fa-chevron-left-two')
const divItemsNumber = document.querySelectorAll(".slider-product-one-content-items").length;

// Click left,right
if(rightbtnTwo && leftbtnTwo && divItemsNumber){
    let i = 0;
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
// Get element

const rightbtnThree = document.querySelector('.fa-chevron-right-three');
const leftbtnThree = document.querySelector('.fa-chevron-left-three');
const imgItemsNumber = document.querySelectorAll(".detail-product-contain-content-left-slider img").length;
const titleImg= document.querySelectorAll('.detail-product-contain-content-left-title li');

if(rightbtnThree && leftbtnThree && imgItemsNumber && titleImg){
    let num = 0;
    // Event Click left,right
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
    
    // Event Click title
    titleImg.forEach(function(element,i){
        element.addEventListener('click',function(){
            num = i;
            removeActive()
            document.querySelector(".detail-product-contain-content-left-slider").style.right = num *100+"%";
            element.classList.add('active');
        })
    })
}





// ***********************Remove atribute hidden raiting***********************
// Get element
var btnRaiting = document.querySelector("#btn-raiting");
var formRaitingHidden = document.querySelector("#form-raiting-hidden");
if(btnRaiting){
    btnRaiting.addEventListener('click',function () {
        formRaitingHidden.removeAttribute('hidden');
    });
}






// *********************Slider Product Category**************************

// Get element 

const rightbtnCategory = document.querySelector('.fa-chevron-right-category');
const leftbtnCategory = document.querySelector('.fa-chevron-left-category');
const imgItemsNumberCategory = document.querySelectorAll(".product-category-contain-banner-top img").length;
const titleImgCategory= document.querySelectorAll('.product-category-contain-banner-bottom li');



if(rightbtnCategory && leftbtnCategory && imgItemsNumberCategory&& titleImgCategory){
        let index = 0;
        
        // Define Function Slider
        function slider(){
            document.querySelector(".product-category-contain-banner-top").style.right = index *100+"%";
            removeActive()
            titleImgCategory[index].classList.add('active');
        }
        
        // Event Click left,right
        
        rightbtnCategory.addEventListener("click",function(){
            index = index+1;
            if(index>imgItemsNumberCategory-1){
                index = 0
            }
            slider();
            
        })
        
        leftbtnCategory.addEventListener("click",function(){
            index = index-1;
            if(index<0){
                index = imgItemsNumberCategory-1;
            }
            slider();
        })
        // Click Title
        // Event Click Title
        titleImgCategory.forEach(function(element,i){
            element.addEventListener('click',function(){
                index = i;
                removeActive()
                document.querySelector(".product-category-contain-banner-top").style.right = i *100+"%";
                element.classList.add('active');
            })
        })

        // Auto Slider
        // Define function auto Slider
        function imgAuto() {
            index = index + 1;
            if(index>imgItemsNumberCategory-1){
                index = 0;
            }
            slider();
        }
        // Use function auto Slider
        setInterval(imgAuto,5000);
}


// ********************Hidden Discount Code***************************
// Get element
var btnDiscountCode = document.querySelector("#discount-code");
var inputDiscountHidden = document.querySelector(".cart-code-input");

if(btnDiscountCode){
    btnDiscountCode.addEventListener('click',function () {
        if(inputDiscountHidden.hasAttribute('hidden')){
            inputDiscountHidden.removeAttribute('hidden');
        }else{
            inputDiscountHidden.setAttribute('hidden','true');
        }
        
    });
}

// ********************Hidden Input Address***************************
// Get element
var btnInputAddress = document.querySelector("#btnInputAddress");
var inputAddressHidden = document.querySelector(".cart-information-main-address");
if(btnInputAddress){
    btnInputAddress.addEventListener('click',function () {
        if(inputAddressHidden .hasAttribute('hidden')){
            inputAddressHidden.removeAttribute('hidden');
        }else{
            inputAddressHidden.setAttribute('hidden','true');
        }
        
    });
}