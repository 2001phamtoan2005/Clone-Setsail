
var form_sidebar =document.querySelector('.sidebar');
var btn_close=document.querySelector('.sidebar__close');
var btn_open=document.getElementById('label_openSidebar');

function action_open(){
    form_sidebar.classList.add('open');
}

function action_close(){
    form_sidebar.classList.remove('open');
}

btn_open.addEventListener('click',action_open)

btn_close.addEventListener('click',action_close)

// slide shows
var slides=document.querySelectorAll('.slideShow__slide');
var slideIndex = 1;
function showslide(index){
    
    if(index > slides.length)
    { 
        slideIndex=1;
        index = 1 ;
    }
    if(index < 1 )
    { 
        slideIndex=3;
        index = slides.length;
    }

    // slides[index - 1].classList.add('appear');
    
    for( var i=0;i<slides.length;i++){
        slides[i].classList.remove('appear');
        slides[index-1].classList.add('appear');
    }
    
    
};
// hiện khi load trang 
showslide(slideIndex);
// set vòng lặp
setInterval(function(){
    pushImg(1)
},8000)

// call function
function pushImg(n){
    return showslide(slideIndex +=n);
}


// cuộn ngang skiing

var btn_skiing_previous = document.querySelector('.Skiing_control-previous');
var btn_skiing_next = document.querySelector('.Skiing_control-next');

function skiing_Control_previous(){
    var list_skiing = document.querySelectorAll('.sectionChooseSkiing__item');
    for (var i=0 ;i <list_skiing.length;i++){
        list_skiing[i].classList.add('previous');
    }
    btn_skiing_next.classList.remove('active');

    btn_skiing_previous.classList.add('active');
}


function skiing_Control_next(){
    var list_skiing = document.querySelectorAll('.sectionChooseSkiing__item');
    for (var i=0 ;i <list_skiing.length;i++){
        list_skiing[i].classList.remove('previous');
    }
    btn_skiing_previous.classList.remove('active');
    btn_skiing_next.classList.add('active');
}

// xử lý navbar khi scroll
var header_nav=document.getElementById('header');

window.addEventListener("scroll",function(){
    var btn_scroll=document.getElementById('btn__scroll');

    var dimension_y=window.pageYOffset;
    if(dimension_y > 100 && dimension_y < 500){
        // rootStyle.setProperty('--h-header', "0px");
        header_nav.classList.add('active');

        if(dimension_y > 500){
            // rootStyle.setProperty('--h-header', "80px");
            header_nav.classList.remove('active');
            btn_scroll.classList.add('hien');
        }
    }
    else{
        // rootStyle.setProperty('--h-header', "80px");

        header_nav.classList.remove('active');
    }
})


//character

var characters=document.querySelectorAll('.reviewers__item');
var btn_characters=document.querySelectorAll('.btn__control.other');

var characters_previous=document.querySelector('.characters-previous');
var characters_mid=document.querySelector('.characters-mid');
var characters_next=document.querySelector('.characters-next');

function character_move(len){
    for (var i=0 ;i <characters.length;i++){
        characters[i].style.left=`calc(-474px * (${len}))`;
    }

    for (var i=0 ;i <btn_characters.length;i++){
        btn_characters[i].classList.remove('active');
    }
}

characters_previous.addEventListener('click',function(){
    characters_previous.classList.add('active');
});

characters_mid.addEventListener('click',function(){
    characters_mid.classList.add('active');
});

characters_next.addEventListener('click',function(){
    characters_next.classList.add('active');
});


// sk scroll

var btn_scroll=document.getElementById('btn__scroll');

window.addEventListener("scroll",function(){

    var dimension_y=window.pageYOffset;
    if(dimension_y > 500){
        btn_scroll.classList.add('visible');
}
    else{
        btn_scroll.classList.remove('visible');
    }
})


